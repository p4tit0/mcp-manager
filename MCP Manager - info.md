# MCP Manager Application

> **Last Updated:** June 26, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: nitro-5
- **User**: p4tit0
- **Home Directory**: /home/p4tit0
- **Generation Date**: 26/06/2026, 20:53:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 7.0.9-200.nobara.fc43.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.20.2
- **NPM Version**: 10.8.2
- **Rust Version**: 1.96.0 (ac68faa20 2026-05-25)
- **Cargo Version**: 1.96.0 (30a34c682 2026-05-25)

### Network

- **Local IP**: 192.168.1.22
- **Tailscale Status**: active
- **Tailscale IP**: 100.117.11.103

### Docker

- **Docker Version**: 29.6.0,
- **Docker Status**: active

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 gen/
│    │    └─── 📁 schemas/
│    │         ├─── 📋 acl-manifests.json
│    │         ├─── 📋 capabilities.json
│    │         ├─── 📋 desktop-schema.json
│    │         └─── 📋 linux-schema.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

undefined
