use std::fs;

#[tauri::command]
pub async fn enable_autostart() -> Result<String, String> {
    let exe_path = std::env::current_exe().map_err(|e| e.to_string())?;
    let desktop_entry = format!(
        "[Desktop Entry]\n\
         Type=Application\n\
         Name=MCP Manager\n\
         Exec={} --minimized\n\
         Hidden=false\n\
         NoDisplay=false\n\
         X-GNOME-Autostart-enabled=true\n",
        exe_path.display()
    );
    
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    fs::create_dir_all(&autostart_dir).map_err(|e| e.to_string())?;
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    fs::write(desktop_file, desktop_entry).map_err(|e| e.to_string())?;
    
    Ok("Autostart enabled".to_string())
}

#[tauri::command]
pub async fn disable_autostart() -> Result<String, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    if desktop_file.exists() {
        fs::remove_file(desktop_file).map_err(|e| e.to_string())?;
    }
    
    Ok("Autostart disabled".to_string())
}

#[tauri::command]
pub async fn is_autostart_enabled() -> Result<bool, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    Ok(desktop_file.exists())
}

pub fn should_start_minimized() -> bool {
    std::env::args().any(|arg| arg == "--minimized")
}