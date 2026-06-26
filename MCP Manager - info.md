# MCP Manager Application

> **Last Updated:** June 26, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1.1. [Features](#features)
    1.2. [Available Themes](#available-themes)
    1.3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

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
├─── ├─── 📁 assets
├─── │   └─── 🖼️ react.svg
├─── ├─── 📁 components
├─── │   └─── 📄 Sidebar.tsx
├─── ├─── 📁 contexts
├─── │   └─── 📄 ThemeContext.tsx
├─── ├─── 📁 data
├─── │   ├─── 📋 features.json
├─── │   ├─── 📋 templates.json
├─── │   └─── 📋 themes.json
├─── ├─── 📁 pages
├─── │   ├─── 📄 Dashboard.tsx
├─── │   ├─── 📄 Logs.tsx
├─── │   └─── 📄 Settings.tsx
├─── ├─── 🎨 App.css
├─── ├─── 📄 App.tsx
├─── ├─── 📄 main.tsx
├─── └─── 📄 vite-env.d.ts
└─── ├─── 📁 capabilities
└─── │   └─── 📋 default.json
└─── ├─── 📁 icons
└─── │   ├─── 🖼️ 128x128.png
└─── │   ├─── 🖼️ 128x128@2x.png
└─── │   ├─── 🖼️ 32x32.png
└─── │   ├─── 🖼️ icon.icns
└─── │   ├─── 🖼️ icon.ico
└─── │   ├─── 🖼️ icon.png
└─── │   ├─── 🖼️ Square107x107Logo.png
└─── │   ├─── 🖼️ Square142x142Logo.png
└─── │   ├─── 🖼️ Square150x150Logo.png
└─── │   ├─── 🖼️ Square284x284Logo.png
└─── │   ├─── 🖼️ Square30x30Logo.png
└─── │   ├─── 🖼️ Square310x310Logo.png
└─── │   ├─── 🖼️ Square44x44Logo.png
└─── │   ├─── 🖼️ Square71x71Logo.png
└─── │   ├─── 🖼️ Square89x89Logo.png
└─── │   └─── 🖼️ StoreLogo.png
└─── ├─── 📁 src
└─── │   ├─── 🦀 autostart.rs
└─── │   ├─── 🦀 lib.rs
└─── │   ├─── 🦀 main.rs
└─── │   ├─── 🦀 mcp_server.rs
└─── │   └─── 🦀 tray.rs
└─── ├─── 🦀 build.rs
└─── ├─── 📄 Cargo.lock
└─── ├─── ⚙️ Cargo.toml
└─── └─── 📋 tauri.conf.json
├─── 📝 MCP Manager - info.md
├─── 📋 package-lock.json
├─── 📋 package.json
├─── 📝 README.md
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
├─── 📄 vite.config.ts
```

---

## Source Code


### Project Settings

#### vite.config.ts

```typescript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: process.env.TAURI_DEV_HOST || false,
    hmr: process.env.TAURI_DEV_HOST
      ? {
          protocol: "ws",
          host: process.env.TAURI_DEV_HOST,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    target: process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
```

#### package.json

```json
{
  "name": "mcp-manager",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri",
    "mcp-info": "node scripts/generate-mcp-info.js"
  },
  "dependencies": {
    "@headlessui/react": "^2.2.10",
    "@tauri-apps/api": "^2",
    "@tauri-apps/plugin-opener": "^2",
    "lucide-react": "^1.21.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hot-toast": "^2.6.0",
    "react-router-dom": "^7.18.0",
    "socket.io-client": "^4.8.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "@tauri-apps/cli": "^2",
    "@types/node": "^26.0.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "autoprefixer": "^10.5.2",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.1",
    "typescript": "~5.8.3",
    "vite": "^7.0.4"
  }
}
```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```


---

### Frontend (src/)

#### Workspace

##### src

```typescript

```


---

### Tauri Configuration (src-tauri/)

#### Cargo.toml

```toml
[package]
name = "mcp-manager"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
# The `_lib` suffix may seem redundant but it is necessary
# to make the lib name unique and wouldn't conflict with the bin name.
# This seems to be only an issue on Windows, see https://github.com/rust-lang/cargo/issues/8519
name = "mcp_manager_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = ["tray-icon", "devtools"] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
dirs = "5.0"
```

#### tauri.conf.json

```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "MCP Manager",
  "version": "1.0.0",
  "identifier": "com.birblabs.mcp-manager",
  "build": {
    "beforeDevCommand": "npm run dev",
    "devUrl": "http://localhost:1420",
    "beforeBuildCommand": "npm run build",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "MCP Manager",
        "width": 1200,
        "height": 800,
        "resizable": true,
        "fullscreen": false,
        "visible": true
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": ["appimage"],
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ],
    "linux": {
      "deb": {
        "depends": []
      }
    }
  }
}
```


---

### Backend (src-tauri/src/)

#### src

```rust

```



---

## System Information

> *Generated dynamically - updates on each run*

### Environment

- **Hostname**: c-6a3efcfb-01471659-6e3fbf3a90a4
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 26/06/2026, 22:32:07

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.10.10
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

*Este arquivo foi gerado automaticamente pelo MCP Manager. Para atualizar as informações, execute: `npm run mcp-info`*
