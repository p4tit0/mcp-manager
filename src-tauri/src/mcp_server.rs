use serde::{Deserialize, Serialize};
use std::process::{Command, Child, Stdio};
use std::sync::{Arc, Mutex};
use std::io::{BufRead, BufReader};
use std::thread;
use std::collections::HashMap;
use std::path::PathBuf;
use tauri::{State, Manager};
use crate::AppState;
use std::env;

// ============================================================
// PERSISTÊNCIA EM DISCO
// ============================================================

fn get_config_path(app: &tauri::AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir.join("servers_config.json"))
}

pub fn save_servers(app: &tauri::AppHandle, servers: &HashMap<String, McpServer>) -> Result<(), String> {
    let path = get_config_path(app)?;
    let configs: Vec<McpServerConfig> = servers.values().map(|s| s.config.clone()).collect();
    let json = serde_json::to_string_pretty(&configs).map_err(|e| e.to_string())?;
    std::fs::write(path, json).map_err(|e| e.to_string())?;
    Ok(())
}

pub fn load_servers(app: &tauri::AppHandle) -> HashMap<String, McpServer> {
    let mut map = HashMap::new();
    if let Ok(path) = get_config_path(app) {
        if path.exists() {
            if let Ok(data) = std::fs::read_to_string(path) {
                if let Ok(configs) = serde_json::from_str::<Vec<McpServerConfig>>(&data) {
                    for config in configs {
                        map.insert(config.id.clone(), McpServer {
                            config,
                            process: None,
                            container_id: None,
                            logs: Arc::new(Mutex::new(Vec::new())),
                            started_at: None,
                        });
                    }
                }
            }
        }
    }
    map
}

// ============================================================
// UTILS
// ============================================================

/// Obtém o caminho home do usuário atual de forma dinâmica
fn get_home_dir() -> String {
    env::var("HOME").unwrap_or_else(|_| "/home/user".to_string())
}

/// Substitui placeholders de caminho no template
fn resolve_path_template(template: &str) -> String {
    let home = get_home_dir();
    template.replace("/home/user", &home).replace("$HOME", &home)
}

// ============================================================
// STRUCTS (com camelCase para o frontend)
// ============================================================

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DockerConfig {
    pub image: String,
    pub volumes: Vec<String>,
    pub env_vars: Vec<String>,
    pub network: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerConfig {
    pub id: String,
    pub name: String,
    pub command: String,
    pub args: Vec<String>,
    pub port: u16,
    pub work_dir: Option<String>,
    pub use_docker: bool,
    pub docker: Option<DockerConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerStatus {
    pub id: String,
    pub name: String,
    pub port: u16,
    pub status: String,
    pub pid: Option<u32>,
    pub uptime: u64,
    pub container_id: Option<String>,
    pub use_docker: bool,
}

pub struct McpServer {
    pub config: McpServerConfig,
    pub process: Option<Child>,
    pub container_id: Option<String>,
    pub logs: Arc<Mutex<Vec<String>>>,
    pub started_at: Option<std::time::Instant>,
}

// ============================================================
// HELPERS DOCKER
// ============================================================

fn get_container_status(container_id: &str) -> String {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Status}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            String::from_utf8_lossy(&out.stdout).trim().to_string()
        }
        _ => "not_found".to_string(),
    }
}

fn get_container_pid(container_id: &str) -> Option<u32> {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Pid}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            let pid_str = String::from_utf8_lossy(&out.stdout).trim().to_string();
            pid_str.parse().ok()
        }
        _ => None,
    }
}

// ============================================================
// COMMANDS TAURI
// ============================================================

#[tauri::command]
pub async fn start_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let status = get_container_status(container_id);
                if status == "running" {
                    return Err("Server already running".to_string());
                }
            }
        } else {
            if server.process.is_some() {
                return Err("Server already running".to_string());
            }
        }

        if server.config.use_docker {
            let docker_config = server.config.docker.as_ref()
                .ok_or("Docker config not provided")?;

            let mut cmd = Command::new("docker");
            cmd.args(["run", "-d", "--rm"]);
            cmd.args(["--name", &format!("mcp-{}", server.config.id)]);
            cmd.args(["-p", &format!("{}:{}", server.config.port, server.config.port)]);

            // Resolve path templates in volumes (replace /home/user with actual home)
            for volume in &docker_config.volumes {
                let resolved_volume = resolve_path_template(volume);
                cmd.args(["-v", &resolved_volume]);
            }
            for env_var in &docker_config.env_vars {
                cmd.args(["-e", env_var]);
            }
            if let Some(ref network) = docker_config.network {
                cmd.args(["--network", network]);
            }

            cmd.arg(&docker_config.image);
            cmd.arg(&server.config.command);
            for arg in &server.config.args {
                cmd.arg(arg);
            }

            let output = cmd.output().map_err(|e| format!("Failed to start container: {}", e))?;

            if !output.status.success() {
                let stderr = String::from_utf8_lossy(&output.stderr);
                return Err(format!("Docker run failed: {}", stderr));
            }

            let container_id = String::from_utf8_lossy(&output.stdout).trim().to_string();
            server.container_id = Some(container_id.clone());
            server.started_at = Some(std::time::Instant::now());

            let logs = server.logs.clone();
            let server_id_clone = server_id.clone();
            let container_id_clone = container_id.clone();

            thread::spawn(move || {
                let output = Command::new("docker")
                    .args(["logs", "-f", &container_id_clone])
                    .stdout(Stdio::piped())
                    .stderr(Stdio::piped())
                    .spawn();

                if let Ok(mut child) = output {
                    if let Some(stdout) = child.stdout.take() {
                        let reader = BufReader::new(stdout);
                        for line in reader.lines().flatten() {
                            if let Ok(mut logs) = logs.lock() {
                                logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                                if logs.len() > 1000 {
                                    logs.remove(0);
                                }
                            }
                        }
                    }
                }
            });

            Ok(format!("Container {} started", container_id))
        } else {
            let mut cmd = Command::new(&server.config.command);
            cmd.args(&server.config.args);

            // Resolve path templates in work_dir
            if let Some(ref work_dir) = server.config.work_dir {
                let resolved_work_dir = resolve_path_template(work_dir);
                cmd.current_dir(&resolved_work_dir);
            }

            // Add environment variables
            if let Some(ref docker_config) = server.config.docker {
                for env_var in &docker_config.env_vars {
                    if let Some((key, value)) = env_var.split_once('=') {
                        let resolved_value = resolve_path_template(value);
                        cmd.env(key, &resolved_value);
                    } else {
                        cmd.env(env_var, "");
                    }
                }
            }

            cmd.stdout(Stdio::piped())
               .stderr(Stdio::piped());

            let mut child = cmd.spawn().map_err(|e| format!("Failed to spawn process: {}", e))?;

            if let Some(stdout) = child.stdout.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stdout);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            if let Some(stderr) = child.stderr.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stderr);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][ERR] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            server.started_at = Some(std::time::Instant::now());
            server.process = Some(child);

            Ok(format!("Server {} started", server_id))
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn stop_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let output = Command::new("docker")
                    .args(["stop", &container_id])
                    .output()
                    .map_err(|e| e.to_string())?;

                if output.status.success() {
                    server.started_at = None;
                    Ok(format!("Container {} stopped", container_id))
                } else {
                    let stderr = String::from_utf8_lossy(&output.stderr);
                    Err(format!("Failed to stop container: {}", stderr))
                }
            } else {
                Err("Container not running".to_string())
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
                server.started_at = None;
                Ok(format!("Server {} stopped", server_id))
            } else {
                Err("Server not running".to_string())
            }
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn restart_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    stop_server(state.clone(), server_id.clone()).await.ok();
    start_server(state, server_id).await
}

#[tauri::command]
pub async fn get_server_status(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerStatus, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let (status, pid) = if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let container_status = get_container_status(container_id);
                let container_pid = get_container_pid(container_id);
                (container_status, container_pid)
            } else {
                ("stopped".to_string(), None)
            }
        } else {
            let status = if server.process.is_some() { "running" } else { "stopped" };
            let pid = server.process.as_ref().map(|p| p.id());
            (status.to_string(), pid)
        };

        let uptime = server.started_at
            .map(|t| t.elapsed().as_secs())
            .unwrap_or(0);

        Ok(McpServerStatus {
            id: server.config.id.clone(),
            name: server.config.name.clone(),
            port: server.config.port,
            status,
            pid,
            uptime,
            container_id: server.container_id.clone(),
            use_docker: server.config.use_docker,
        })
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_all_servers(
    state: State<'_, AppState>,
) -> Result<Vec<McpServerStatus>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    let statuses: Vec<McpServerStatus> = servers.values()
        .map(|server| {
            let (status, pid) = if server.config.use_docker {
                if let Some(ref container_id) = server.container_id {
                    let container_status = get_container_status(container_id);
                    let container_pid = get_container_pid(container_id);
                    (container_status, container_pid)
                } else {
                    ("stopped".to_string(), None)
                }
            } else {
                let status = if server.process.is_some() { "running" } else { "stopped" };
                let pid = server.process.as_ref().map(|p| p.id());
                (status.to_string(), pid)
            };

            let uptime = server.started_at
                .map(|t| t.elapsed().as_secs())
                .unwrap_or(0);

            McpServerStatus {
                id: server.config.id.clone(),
                name: server.config.name.clone(),
                port: server.config.port,
                status,
                pid,
                uptime,
                container_id: server.container_id.clone(),
                use_docker: server.config.use_docker,
            }
        })
        .collect();

    Ok(statuses)
}

#[tauri::command]
pub async fn add_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    let server = McpServer {
        config,
        process: None,
        container_id: None,
        logs: Arc::new(Mutex::new(Vec::new())),
        started_at: None,
    };

    servers.insert(server.config.id.clone(), server);

    // SALVAR EM DISCO
    save_servers(&app, &servers)?;

    Ok("Server added".to_string())
}

#[tauri::command]
pub async fn remove_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(mut server) = servers.remove(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let _ = Command::new("docker").args(["stop", container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server removed".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_logs(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<Vec<String>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let logs = server.logs.lock().map_err(|e| e.to_string())?;
        Ok(logs.clone())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn update_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&config.id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let _ = Command::new("docker").args(["stop", &container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        server.config = config;
        server.started_at = None;

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server updated".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_config(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerConfig, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        Ok(server.config.clone())
    } else {
        Err("Server not found".to_string())
    }
}