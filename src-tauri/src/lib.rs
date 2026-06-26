mod mcp_server;
mod tray;
mod autostart;

use tauri::Manager;
use std::sync::Mutex;
use std::collections::HashMap;

pub struct AppState {
    servers: Mutex<HashMap<String, mcp_server::McpServer>>,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState {
            servers: Mutex::new(HashMap::new()),
        })
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();
            tray::create_tray(app)?;

            // CARREGAR DADOS SALVOS DO DISCO
            let initial_servers = mcp_server::load_servers(app.handle());
            let state = app.state::<AppState>();
            *state.servers.lock().unwrap() = initial_servers;

            if autostart::should_start_minimized() {
                window.hide()?;
            }
            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                window.hide().unwrap();
                api.prevent_close();
            }
        })
        .invoke_handler(tauri::generate_handler![
            mcp_server::start_server,
            mcp_server::stop_server,
            mcp_server::restart_server,
            mcp_server::get_server_status,
            mcp_server::get_all_servers,
            mcp_server::get_server_config,  // ← ADICIONAR ISSO
            mcp_server::add_server,
            mcp_server::update_server,
            mcp_server::remove_server,
            mcp_server::get_server_logs,
            autostart::enable_autostart,
            autostart::disable_autostart,
            autostart::is_autostart_enabled,
        ])
        .build(tauri::generate_context!())
        .expect("error while building tauri application")
        .run(|_app_handle, _event| {});
}