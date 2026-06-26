# MCP Manager Application

> **Last Updated:** June 26, 2026
> Description

---

## Table of Contents

1. [Project Details](#project-details)
    1.1. [Features](#features)
    1.2. [Available Themes](#available-themes)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`            |
| Framework  | Tauri v2 + React + TypeScript       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite) |
| Identifier | `com.birblabs.mcp-manager`          |
| Icons      | `src-tauri/icons/`                  |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- Window minimizes to tray on close (doesn't exit)
- DevTools enabled in release

### Available Themes

- Light
- Dark
- System (auto)
- Nord
- Dracula
- Monokai

---

## File Structure

```text
📁 mcp-manager/
├── 📁 src/
│   ├── 📁 components/
│   │   └── 📄 Sidebar.tsx
│   │
│   ├── 📁 pages/
│   │   ├── 📄 Dashboard.tsx
│   │   ├── 📄 Logs.tsx
│   │   └── 📄 Settings.tsx
│   │
│   ├── 📁 contexts/
│   │   └── 📄 ThemeContext.tsx
│   │
│   ├── 📄 App.tsx
│   └── 📄 App.css
│
├── 📁 src-tauri/
│   ├── 📁 src/lib.rs
│   │   ├── 📄 src/main.rs
│   │   ├── 📄 src/mcp_server.rs
│   │   ├── 📄 src/tray.rs
│   │   └── 📄 src/autostart.rs
│   │
│   ├── 📄 Cargo.toml
│   ├── 📄 tauri.conf.json
│   └── 📁 icons/
│
├── 📄 vite.config.ts
└── 📄 package.json
```

---

## Source Code

---

### Project Settings

#### Vite Configuration (vite.config.ts)

```ts

```

#### Package (package.json)

```json

```

---

### Frontend (mcp-manager/src/)

#### Components (components/)

##### Sidebar.tsx

```tsx

```

#### Pages (pages/)

##### Dashboard (Dashboard.tsx)

```tsx

```

##### Logs (Logs.tsx)

```tsx

```

##### Settings (Settings.tsx)

```tsx

```

#### Contexts (contexts/)

##### Theme Context (ThemeContext.tsx)

```tsx

```

#### Main App

##### App.tsx

```tsx

```

##### App.css

```css

```

---

### Tauri (mcp-manager/src-tauri/)

#### Cargo (Cargo.toml)

```toml

```

#### Tauri Configuration (tauri.conf.json)

```json

```

---

### Backend (mcp-manager/src-tauri/src/)

#### Libs (lib.rs)

```rs

```

#### Main Script (main.rs)

```rs

```

#### MCP Server (mcp_server.rs)

```rs

```

#### Tray (tray.rs)

```rs

```

#### Autostart (autostart.rs)

```rs

```