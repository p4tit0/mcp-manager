# MCP Manager Application

> **Last Updated:** June 26, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

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
│   ├── 📁 src/
│   │   ├── 📄 main.rs
│   │   ├── 📄 mcp_server.rs
│   │   ├── 📄 tray.rs
│   │   └── 📄 autostart.rs
│   │
│   ├── 📄 Cargo.toml
│   ├── 📄 tauri.conf.json
│   └── 📁 icons/
│
├── 📄 vite.config.ts
├── 📄 package.json
└── 📄 tsconfig.json
```

---

## Source Code

---

### Project Settings

#### Vite Configuration (vite.config.ts)

```ts
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

#### Package (package.json)

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

---

### Frontend (mcp-manager/src/)

#### Components (components/)

##### Sidebar.tsx

```tsx
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Server } from 'lucide-react';

export default function Sidebar() {
    const navItems = [
        { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/logs', icon: FileText, label: 'Logs' },
        { to: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        MCP Manager
                    </h1>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    v1.0.0
                </div>
            </div>
        </aside>
    );
}
```

#### Pages (pages/)

##### Dashboard (Dashboard.tsx)

```tsx
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Play, Square, RotateCcw, Plus, Trash2, Activity, X, Edit, Container } from 'lucide-react';
import toast from 'react-hot-toast';

interface Server {
    id: string;
    name: string;
    port: number;
    status: string;
    pid?: number;
    uptime: number;
    useDocker: boolean;
    containerId?: string;
    docker?: {
        image: string;
        volumes: string[];
        envVars: string[];
        network?: string;
    };
    command?: string;
    args?: string[];
    workDir?: string;
}

interface ServerConfig {
    id: string;
    name: string;
    command: string;
    args: string[];
    port: number;
    workDir: string | null;
    useDocker: boolean;
    docker: {
        image: string;
        volumes: string[];
        envVars: string[];
        network?: string;
    } | null;
}

export default function Dashboard() {
    const [servers, setServers] = useState<Server[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingServerId, setEditingServerId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        command: '',
        args: '[]',
        port: 3000,
        workDir: '',
        useDocker: false,
        dockerImage: 'node:20-slim',
        dockerVolumes: '',
        dockerEnvVars: '',
        dockerNetwork: 'host',
    });

    // MCP Server Templates - Using verified packages from @modelcontextprotocol/servers repo
    const mcpTemplates = [
        {
            id: 'memory',
            name: 'Memory Server',
            description: 'Persistent memory storage for AI context via knowledge graph',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-memory"]',
            port: 3001,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'filesystem',
            name: 'Filesystem Server',
            description: 'Access local files and directories (isolated via Docker, read-only)',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-filesystem"]',
            port: 3002,
            workDir: '',
            envVars: 'ALLOWED_DIRS=$HOME/Projects',
            useDocker: false,
        },
        {
            id: 'filesystem-docker',
            name: 'Filesystem Server (Docker Isolated)',
            description: 'Filesystem access in isolated container with read-only volume',
            command: 'docker',
            args: '["run", "--rm", "-i", "--read-only", "-v", "$HOME/Projects:/mnt/data:ro", "node:20-slim", "npx", "-y", "@modelcontextprotocol/server-filesystem", "/mnt/data"]',
            port: 3003,
            workDir: '/mnt/data',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['$HOME/Projects:/mnt/data:ro'],
        },
        {
            id: 'shell-sandboxed',
            name: 'Shell Server (Sandboxed)',
            description: 'Execute shell commands in isolated container (only /tmp access)',
            command: 'docker',
            args: '["run", "--rm", "-i", "-v", "/tmp:/workspace", "node:20-slim", "sh", "-c", "echo \\"Shell sandboxed ready\\""]',
            port: 3004,
            workDir: '/workspace',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['/tmp:/workspace'],
        },
        {
            id: 'shell-full',
            name: 'Shell Server (Full Access)',
            description: 'Full system access for diagnostics, drivers, processes and configurations',
            command: 'npx',
            args: '["-y", "@mako10k/mcp-shell-server"]',
            port: 3005,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'adb',
            name: 'ADB Server',
            description: 'Android Debug Bridge integration (requires native ADB installed). Use system adb command.',
            command: 'adb',
            args: '["start-server"]',
            port: 3006,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'sequential-thinking',
            name: 'Sequential Thinking Server',
            description: 'Chain of thought reasoning for complex problem solving',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-sequential-thinking"]',
            port: 3007,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git',
            name: 'Git Server',
            description: 'Git repository operations with read-only access to projects',
            command: 'npx',
            args: '["-y", "@cyanheads/git-mcp-server", "--dir", "$HOME/Projects"]',
            port: 3008,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git-docker',
            name: 'Git Server (Docker Isolated)',
            description: 'Git operations in isolated container with read-only repo access',
            command: 'docker',
            args: '["run", "--rm", "-i", "-v", "$HOME/Projects:/repos:ro", "node:20-slim", "npx", "-y", "@cyanheads/git-mcp-server", "--dir", "/repos"]',
            port: 3009,
            workDir: '/repos',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['$HOME/Projects:/repos:ro'],
        },
        {
            id: 'playwright',
            name: 'Playwright Server',
            description: 'Browser automation and testing via Playwright',
            command: 'npx',
            args: '["-y", "@playwright/mcp"]',
            port: 3010,
            workDir: '',
            useDocker: false,
        },
    ];

    const applyTemplate = (template: typeof mcpTemplates[0]) => {
        setFormData({
            id: template.id,
            name: template.name,
            command: template.command,
            args: template.args,
            port: template.port,
            workDir: template.workDir || '',
            useDocker: template.useDocker || false,
            dockerImage: template.dockerImage || 'node:20-slim',
            dockerVolumes: (template.dockerVolumes || []).join('\n'),
            dockerEnvVars: '',
            dockerNetwork: 'host',
        });
        setShowModal(true);
    };

    useEffect(() => {
        loadServers();
        const interval = setInterval(loadServers, 2000);
        return () => clearInterval(interval);
    }, []);

    const loadServers = async () => {
        try {
            const result = await invoke<Server[]>('get_all_servers');
            setServers(result);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    const startServer = async (id: string, name: string) => {
        try {
            await invoke('start_server', { serverId: id });
            toast.success(`${name} started`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to start ${name}: ${e}`);
        }
    };

    const stopServer = async (id: string, name: string) => {
        try {
            await invoke('stop_server', { serverId: id });
            toast.success(`${name} stopped`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to stop ${name}`);
        }
    };

    const restartServer = async (id: string, name: string) => {
        try {
            await invoke('restart_server', { serverId: id });
            toast.success(`${name} restarted`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to restart ${name}`);
        }
    };

    const removeServer = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to remove ${name}?`)) return;
        try {
            await invoke('remove_server', { serverId: id });
            toast.success(`${name} removed`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to remove ${name}`);
        }
    };

    const editServer = async (server: any) => {
        try {
            setEditingServerId(server.id);
            
            // Buscar configuração completa do servidor
            const config = await invoke<any>('get_server_config', { 
                serverId: server.id 
            });
            
            setFormData({
                id: config.id,
                name: config.name,
                command: config.command || '',
                args: JSON.stringify(config.args || [], null, 2),
                port: config.port,
                workDir: config.workDir || '',
                useDocker: config.useDocker || false,
                dockerImage: config.docker?.image || 'node:20-slim',
                dockerVolumes: (config.docker?.volumes || []).join('\n'),
                dockerEnvVars: (config.docker?.envVars || []).join('\n'),
                dockerNetwork: config.docker?.network || 'host',
            });
            setShowModal(true);
        } catch (error) {
            toast.error(`Failed to load server config: ${error}`);
        }
    };

    const openAddModal = () => {
        setEditingServerId(null);
        setFormData({
            id: '',
            name: '',
            command: '',
            args: '[]',
            port: 3000,
            workDir: '',
            useDocker: false,
            dockerImage: 'node:20-slim',
            dockerVolumes: '',
            dockerEnvVars: '',
            dockerNetwork: 'host',
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingServerId(null);
    };

    const handleSaveServer = async () => {
        try {
            // Corrige o crash quando o campo args está vazio
            let argsArray: string[] = [];
            const trimmedArgs = formData.args.trim();
            if (trimmedArgs) {
                try {
                    const parsed = JSON.parse(trimmedArgs);
                    argsArray = Array.isArray(parsed) ? parsed : [parsed];
                } catch {
                    toast.error('Arguments must be a valid JSON array');
                    return;
                }
            }
            
            const dockerConfig = formData.useDocker ? {
                image: formData.dockerImage,
                volumes: formData.dockerVolumes.split('\n').map(v => v.trim()).filter(v => v),
                envVars: formData.dockerEnvVars.split('\n').map(e => e.trim()).filter(e => e),
                network: formData.dockerNetwork || undefined,
            } : null;

            const config: ServerConfig = {
                id: formData.id,
                name: formData.name,
                command: formData.command,
                args: argsArray,
                port: formData.port,
                workDir: formData.workDir || null,
                useDocker: formData.useDocker,
                docker: dockerConfig,
            };

            if (editingServerId) {
                await invoke('update_server', { config });
                toast.success(`Server ${formData.name} updated`);
            } else {
                await invoke('add_server', { config });
                toast.success(`Server ${formData.name} added`);
            }
            
            closeModal();
            loadServers();
        } catch (e) {
            toast.error(`Failed to save server: ${e}`);
        }
    };

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-500 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MCP Servers</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your Model Context Protocol servers</p>
                </div>
                <button 
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    Add Server
                </button>
            </div>

            {/* MCP Templates Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Start Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mcpTemplates.map((template) => (
                        <button
                            key={template.id}
                            onClick={() => applyTemplate(template)}
                            className="flex flex-col items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all text-left group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Container size={18} className="text-blue-600 dark:text-blue-400" />
                                <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
                            <div className="mt-3 flex items-center gap-2 text-xs">
                                {template.useDocker ? (
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">Docker</span>
                                ) : (
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">Native</span>
                                )}
                                <span className="text-gray-400 dark:text-gray-500">Port: {template.port}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {servers.length === 0 ? (
                <div className="text-center py-12">
                    <Activity className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No servers configured yet</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {servers.map((server) => (
                        <div
                            key={server.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{server.name}</h3>
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                server.status === 'running'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                            }`}
                                        >
                                            {server.status}
                                        </span>
                                        {server.useDocker && (
                                            <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                                                <Container size={12} />
                                                Docker
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                        <p>Port: {server.port}</p>
                                        {server.pid && <p>PID: {server.pid}</p>}
                                        {server.containerId && <p>Container: {server.containerId.substring(0, 12)}</p>}
                                        {server.status === 'running' && (
                                            <p>Uptime: {formatUptime(server.uptime)}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    {server.status === 'running' ? (
                                        <>
                                            <button
                                                onClick={() => stopServer(server.id, server.name)}
                                                className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                                title="Stop"
                                            >
                                                <Square size={20} />
                                            </button>
                                            <button
                                                onClick={() => restartServer(server.id, server.name)}
                                                className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
                                                title="Restart"
                                            >
                                                <RotateCcw size={20} />
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => startServer(server.id, server.name)}
                                            className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                                            title="Start"
                                        >
                                            <Play size={20} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => editServer(server)}
                                        className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                        title="Edit"
                                    >
                                        <Edit size={20} />
                                    </button>
                                    <button
                                        onClick={() => removeServer(server.id, server.name)}
                                        className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        title="Remove"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8">
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {editingServerId ? 'Edit MCP Server' : 'Add MCP Server'}
                            </h2>
                            <button 
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server ID</label>
                                    <input
                                        type="text"
                                        value={formData.id}
                                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                        disabled={!!editingServerId}
                                        className={`w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white ${
                                            editingServerId ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                        placeholder="filesystem"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                        placeholder="Filesystem Server"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Container size={20} className="text-blue-600 dark:text-blue-400" />
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Run in Docker Container</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Isolated environment with custom dependencies</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.useDocker}
                                        onChange={(e) => setFormData({ ...formData, useDocker: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            {formData.useDocker ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Docker Image</label>
                                        <input
                                            type="text"
                                            value={formData.dockerImage}
                                            onChange={(e) => setFormData({ ...formData, dockerImage: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="node:20-slim"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Command</label>
                                        <input
                                            type="text"
                                            value={formData.command}
                                            onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="npx"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arguments (JSON array)</label>
                                        <textarea
                                            value={formData.args}
                                            onChange={(e) => setFormData({ ...formData, args: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={2}
                                            placeholder='["-y", "@modelcontextprotocol/server-filesystem", "/projects"]'
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Port Mapping</label>
                                        <input
                                            type="number"
                                            value={formData.port}
                                            onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="8001"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Host port will be mapped to the same container port</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Volumes (one per line: host:container)</label>
                                        <textarea
                                            value={formData.dockerVolumes}
                                            onChange={(e) => setFormData({ ...formData, dockerVolumes: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={3}
                                            placeholder="/home/user/Projects:/projects"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment Variables (one per line: KEY=VALUE)</label>
                                        <textarea
                                            value={formData.dockerEnvVars}
                                            onChange={(e) => setFormData({ ...formData, dockerEnvVars: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={3}
                                            placeholder="NODE_ENV=production"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network Mode</label>
                                        <select
                                            value={formData.dockerNetwork}
                                            onChange={(e) => setFormData({ ...formData, dockerNetwork: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                        >
                                            <option value="host">host</option>
                                            <option value="bridge">bridge</option>
                                            <option value="none">none</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Command</label>
                                        <input
                                            type="text"
                                            value={formData.command}
                                            onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="npx"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arguments (JSON array)</label>
                                        <textarea
                                            value={formData.args}
                                            onChange={(e) => setFormData({ ...formData, args: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={2}
                                            placeholder='["-y", "@modelcontextprotocol/server-filesystem", "/home/user/Projects"]'
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Port</label>
                                            <input
                                                type="number"
                                                value={formData.port}
                                                onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) || 0 })}
                                                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                                placeholder="3001"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Working Directory</label>
                                            <input
                                                type="text"
                                                value={formData.workDir}
                                                onChange={(e) => setFormData({ ...formData, workDir: e.target.value })}
                                                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                                placeholder="/home/user/Projects"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveServer}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                {editingServerId ? 'Update Server' : 'Add Server'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
```

##### Logs (Logs.tsx)

```tsx
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { RefreshCw, Trash2 } from 'lucide-react';

interface Server {
    id: string;
    name: string;
    status: string;
}

export default function Logs() {
    const [servers, setServers] = useState<Server[]>([]);
    const [selectedServer, setSelectedServer] = useState<string>('');
    const [logs, setLogs] = useState<string[]>([]);
    const [autoRefresh, setAutoRefresh] = useState(true);

    useEffect(() => {
        loadServers();
    }, []);

    useEffect(() => {
        if (selectedServer && autoRefresh) {
            const interval = setInterval(loadLogs, 1000);
            return () => clearInterval(interval);
        }
    }, [selectedServer, autoRefresh]);

    const loadServers = async () => {
        try {
            const result = await invoke<Server[]>('get_all_servers');
            setServers(result);
            if (result.length > 0 && !selectedServer) {
                setSelectedServer(result[0].id);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const loadLogs = async () => {
        if (!selectedServer) return;
        try {
            const result = await invoke<string[]>('get_server_logs', {
                serverId: selectedServer,
            });
            setLogs(result);
        } catch (e) {
            console.error(e);
        }
    };

    const clearLogs = async () => {
        setLogs([]);
    };

    return (
        <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Server Logs
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        View real-time logs from your MCP servers
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoRefresh}
                            onChange={(e) => setAutoRefresh(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            Auto-refresh
                        </span>
                    </label>
                    <button
                        onClick={loadLogs}
                        className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        title="Refresh"
                    >
                        <RefreshCw size={20} />
                    </button>
                    <button
                        onClick={clearLogs}
                        className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                        title="Clear"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <select
                    value={selectedServer}
                    onChange={(e) => setSelectedServer(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    {servers.map((server) => (
                        <option key={server.id} value={server.id}>
                            {server.name} ({server.status})
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex-1 bg-gray-900 rounded-lg p-4 overflow-auto font-mono text-sm">
                {logs.length === 0 ? (
                    <div className="text-gray-500 text-center py-12">
                        No logs available
                    </div>
                ) : (
                    <div className="space-y-1">
                        {logs.map((log, index) => (
                            <div key={index} className="text-gray-300 break-all">
                                {log}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
```

##### Settings (Settings.tsx)

```tsx
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Monitor, Palette, Power } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Settings() {
    const { theme, setTheme } = useTheme();
    const [autostartEnabled, setAutostartEnabled] = useState(false);

    useEffect(() => {
        loadAutostartStatus();
    }, []);

    const loadAutostartStatus = async () => {
        try {
            const result = await invoke<boolean>('is_autostart_enabled');
            setAutostartEnabled(result);
        } catch (e) {
            console.error(e);
        }
    };

    const toggleAutostart = async () => {
        try {
            if (autostartEnabled) {
                await invoke('disable_autostart');
                toast.success('Autostart disabled');
            } else {
                await invoke('enable_autostart');
                toast.success('Autostart enabled');
            }
            setAutostartEnabled(!autostartEnabled);
        } catch (e) {
            toast.error('Failed to toggle autostart');
        }
    };

    const themes = [
        { id: 'light', label: 'Light', icon: Sun },
        { id: 'dark', label: 'Dark', icon: Moon },
        { id: 'system', label: 'System', icon: Monitor },
        { id: 'nord', label: 'Nord', icon: Palette },
        { id: 'dracula', label: 'Dracula', icon: Palette },
        { id: 'monokai', label: 'Monokai', icon: Palette },
    ];

    return (
        <div className="p-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Settings
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Configure your MCP Manager preferences
                </p>
            </div>

            <div className="space-y-6">
                {/* Theme Selection */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Theme
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id as any)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${theme === t.id
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                            >
                                <t.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                <span className="text-gray-900 dark:text-white font-medium">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Autostart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Power className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Start with System
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Automatically start MCP Manager when you log in
                                </p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={autostartEnabled}
                                onChange={toggleAutostart}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>

                {/* About */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        About
                    </h2>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>
                            <span className="font-medium">Version:</span> 1.0.0
                        </p>
                        <p>
                            <span className="font-medium">Built with:</span> Tauri + React +
                            TypeScript
                        </p>
                        <p>
                            <span className="font-medium">License:</span> MIT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

#### Contexts (contexts/)

##### Theme Context (ThemeContext.tsx)

```tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system' | 'nord' | 'dracula' | 'monokai';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'system';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remover todas as classes de tema
    root.classList.remove('light', 'dark', 'nord', 'dracula', 'monokai');
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(systemDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

#### Main App

##### App.tsx

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Logs from './pages/Logs';
import './App.css';  // ← ADICIONE ESSA LINHA!

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-gray-800 dark:text-white',
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```

##### App.css

```css
@import "tailwindcss";

/* ============================================================
   TAILWIND v4 — Variant Dark
   No Tailwind v4 estável, usa-se @variant (não @custom-variant)
   ============================================================ */
@variant dark (&:where(.dark, .dark *, .nord, .nord *, .dracula, .dracula *, .monokai, .monokai *));

/* ============================================================
   Força navegadores a estilizar inputs/selects corretamente
   no dark mode (resolve o "texto branco em fundo branco")
   ============================================================ */
.dark {
  color-scheme: dark;
}

select,
input,
textarea,
option {
  color-scheme: inherit;
}

/* Remove estilos nativos do SO que sobrescrevem o Tailwind */
select,
input,
textarea {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* ============================================================
   PALETAS BASE (Nord, Dracula, Monokai)
   ============================================================ */
@theme {
  /* Cores Nord */
  --color-nord-0: #2E3440;
  --color-nord-1: #3B4252;
  --color-nord-2: #434C5E;
  --color-nord-3: #4C566A;
  --color-nord-4: #D8DEE9;
  --color-nord-5: #E5E9F0;
  --color-nord-6: #ECEFF4;

  /* Cores Dracula */
  --color-dracula-bg: #282A36;
  --color-dracula-current: #44475A;
  --color-dracula-fg: #F8F8F2;
  --color-dracula-comment: #6272A4;
  --color-dracula-cyan: #8BE9FD;
  --color-dracula-green: #50FA7B;
  --color-dracula-orange: #FFB86C;
  --color-dracula-pink: #FF79C6;
  --color-dracula-purple: #BD93F9;
  --color-dracula-red: #FF5555;
  --color-dracula-yellow: #F1FA8C;

  /* Cores Monokai */
  --color-monokai-bg: #272822;
  --color-monokai-fg: #F8F8F2;
  --color-monokai-comment: #75715E;
  --color-monokai-cyan: #66D9EF;
  --color-monokai-green: #A6E22E;
  --color-monokai-orange: #FD971F;
  --color-monokai-pink: #F92672;
  --color-monokai-purple: #AE81FF;
  --color-monokai-red: #F92672;
  --color-monokai-yellow: #E6DB74;
}

/* ============================================================
   TEMA NORD
   Mapeia as cores Nord para as variáveis internas do Tailwind,
   fazendo com que classes como bg-white, bg-gray-800,
   text-blue-600 etc. assumam automaticamente a paleta Nord.
   ============================================================ */
.nord {
  color-scheme: dark;

  /* Fundos e textos base */
  --color-white: #ECEFF4;       /* nord-6 - texto principal */
  --color-black: #2E3440;       /* nord-0 - fundo mais escuro */

  /* Escala de cinzas (do mais claro ao mais escuro) */
  --color-gray-50: #ECEFF4;     /* nord-6 - texto principal */
  --color-gray-100: #E5E9F0;    /* nord-5 - texto secundário claro */
  --color-gray-200: #D8DEE9;    /* nord-4 - ícones e bordas claras */
  --color-gray-300: #CDD3DE;    /* bordas médias */
  --color-gray-400: #B8C0CC;    /* placeholders */
  --color-gray-500: #A3AEBF;    /* texto desabilitado */
  --color-gray-600: #4C566A;    /* nord-3 - fundos secundários */
  --color-gray-700: #434C5E;    /* nord-2 - fundos de cards */
  --color-gray-800: #3B4252;    /* nord-1 - fundos primários */
  --color-gray-900: #2E3440;    /* nord-0 - fundo da página */

  /* Azuis - mais vibrantes para melhor visibilidade */
  --color-blue-50: #88C0D0;     /* nord-8 */
  --color-blue-100: #88C0D0;
  --color-blue-200: #81A1C1;    /* nord-9 */
  --color-blue-300: #81A1C1;
  --color-blue-400: #5E81AC;    /* nord-10 */
  --color-blue-500: #5E81AC;
  --color-blue-600: #81A1C1;
  --color-blue-700: #88C0D0;
  --color-blue-800: #4C566A;
  --color-blue-900: #3B4252;

  /* Verdes - mais saturados */
  --color-green-50: #A3BE8C;    /* nord-14 */
  --color-green-100: #A3BE8C;
  --color-green-200: #A3BE8C;
  --color-green-300: #A3BE8C;
  --color-green-400: #A3BE8C;
  --color-green-500: #A3BE8C;
  --color-green-600: #8FBCBB;   /* nord-7 - teal */
  --color-green-700: #8FBCBB;
  --color-green-800: #4C566A;
  --color-green-900: #3B4252;

  /* Vermelhos - mais claros */
  --color-red-50: #BF616A;      /* nord-11 */
  --color-red-100: #BF616A;
  --color-red-200: #BF616A;
  --color-red-300: #BF616A;
  --color-red-400: #BF616A;
  --color-red-500: #BF616A;
  --color-red-600: #D08770;     /* nord-12 - laranja avermelhado */
  --color-red-700: #D08770;
  --color-red-800: #4C566A;
  --color-red-900: #3B4252;

  /* Amarelos - mais brilhantes */
  --color-yellow-50: #EBCB8B;   /* nord-13 */
  --color-yellow-100: #EBCB8B;
  --color-yellow-200: #EBCB8B;
  --color-yellow-300: #EBCB8B;
  --color-yellow-400: #EBCB8B;
  --color-yellow-500: #EBCB8B;
  --color-yellow-600: #D08770;
  --color-yellow-700: #D08770;
  
  /* Laranjas */
  --color-orange-50: #D08770;   /* nord-12 */
  --color-orange-100: #D08770;
  --color-orange-200: #D08770;
  --color-orange-300: #D08770;
  --color-orange-400: #D08770;
  --color-orange-500: #D08770;
  --color-orange-600: #D08770;
  --color-orange-700: #D08770;
  
  /* Roxos - mais vibrantes */
  --color-purple-50: #B48EAD;   /* nord-15 */
  --color-purple-100: #B48EAD;
  --color-purple-200: #B48EAD;
  --color-purple-300: #B48EAD;
  --color-purple-400: #B48EAD;
  --color-purple-500: #B48EAD;
  --color-purple-600: #5E81AC;
  --color-purple-700: #81A1C1;
}

/* ============================================================
   TEMA DRACULA
   ============================================================ */
.dracula {
  color-scheme: dark;

  --color-white: #F8F8F2;       /* texto principal */
  --color-black: #282A36;       /* fundo mais escuro */

  --color-gray-50: #F8F8F2;     /* texto principal */
  --color-gray-100: #F1FA8C;    /* texto secundário claro */
  --color-gray-200: #E5E5E5;    /* ícones e bordas claras */
  --color-gray-300: #C9D6E8;    /* bordas médias */
  --color-gray-400: #A8B8D0;    /* placeholders */
  --color-gray-500: #8A9AB8;    /* texto desabilitado */
  --color-gray-600: #6272A4;    /* comment - fundos secundários */
  --color-gray-700: #44475A;    /* current - fundos de cards */
  --color-gray-800: #282A36;    /* bg - fundos primários */
  --color-gray-900: #282A36;    /* bg - fundo da página */

  --color-blue-50: #8BE9FD;     /* cyan - mais brilhante */
  --color-blue-100: #8BE9FD;
  --color-blue-200: #8BE9FD;
  --color-blue-300: #BD93F9;    /* purple */
  --color-blue-400: #BD93F9;
  --color-blue-500: #BD93F9;
  --color-blue-600: #BD93F9;
  --color-blue-700: #BD93F9;
  --color-blue-800: #6272A4;
  --color-blue-900: #44475A;

  --color-green-50: #50FA7B;    /* verde neon */
  --color-green-100: #50FA7B;
  --color-green-200: #50FA7B;
  --color-green-300: #50FA7B;
  --color-green-400: #50FA7B;
  --color-green-500: #50FA7B;
  --color-green-600: #50FA7B;
  --color-green-700: #50FA7B;
  --color-green-800: #6272A4;
  --color-green-900: #44475A;

  --color-red-50: #FF5555;      /* vermelho vibrante */
  --color-red-100: #FF5555;
  --color-red-200: #FF5555;
  --color-red-300: #FF5555;
  --color-red-400: #FF5555;
  --color-red-500: #FF5555;
  --color-red-600: #FF5555;
  --color-red-700: #FF5555;
  --color-red-800: #6272A4;
  --color-red-900: #44475A;

  --color-yellow-50: #F1FA8C;   /* amarelo claro */
  --color-yellow-100: #F1FA8C;
  --color-yellow-200: #F1FA8C;
  --color-yellow-300: #F1FA8C;
  --color-yellow-400: #F1FA8C;
  --color-yellow-500: #F1FA8C;
  --color-yellow-600: #F1FA8C;
  --color-yellow-700: #F1FA8C;
  
  --color-orange-50: #FFB86C;   /* laranja suave */
  --color-orange-100: #FFB86C;
  --color-orange-200: #FFB86C;
  --color-orange-300: #FFB86C;
  --color-orange-400: #FFB86C;
  --color-orange-500: #FFB86C;
  --color-orange-600: #FFB86C;
  --color-orange-700: #FFB86C;
  
  --color-purple-50: #BD93F9;   /* roxo vibrante */
  --color-purple-100: #BD93F9;
  --color-purple-200: #BD93F9;
  --color-purple-300: #BD93F9;
  --color-purple-400: #BD93F9;
  --color-purple-500: #BD93F9;
  --color-purple-600: #BD93F9;
  --color-purple-700: #BD93F9;
  
  --color-pink-50: #FF79C6;     /* rosa vibrante */
  --color-pink-100: #FF79C6;
  --color-pink-200: #FF79C6;
  --color-pink-300: #FF79C6;
  --color-pink-400: #FF79C6;
  --color-pink-500: #FF79C6;
  --color-pink-600: #FF79C6;
  --color-pink-700: #FF79C6;
}

/* ============================================================
   TEMA MONOKAI
   ============================================================ */
.monokai {
  color-scheme: dark;

  --color-white: #F8F8F2;       /* texto principal */
  --color-black: #272822;       /* fundo mais escuro */

  --color-gray-50: #F8F8F2;     /* texto principal */
  --color-gray-100: #F1F1E9;    /* texto secundário claro */
  --color-gray-200: #E8E8E3;    /* ícones e bordas claras */
  --color-gray-300: #D0D0CB;    /* bordas médias */
  --color-gray-400: #B8B8B0;    /* placeholders */
  --color-gray-500: #A0A098;    /* texto desabilitado */
  --color-gray-600: #75715E;    /* comment - fundos secundários */
  --color-gray-700: #49483E;    /* current - fundos de cards */
  --color-gray-800: #3E3D32;    /* bg escuro - fundos primários */
  --color-gray-900: #272822;    /* bg - fundo da página */

  --color-blue-50: #66D9EF;     /* cyan vibrante */
  --color-blue-100: #66D9EF;
  --color-blue-200: #66D9EF;
  --color-blue-300: #AE81FF;    /* purple */
  --color-blue-400: #AE81FF;
  --color-blue-500: #AE81FF;
  --color-blue-600: #AE81FF;
  --color-blue-700: #AE81FF;
  --color-blue-800: #75715E;
  --color-blue-900: #3E3D32;

  --color-green-50: #A6E22E;    /* verde lima vibrante */
  --color-green-100: #A6E22E;
  --color-green-200: #A6E22E;
  --color-green-300: #A6E22E;
  --color-green-400: #A6E22E;
  --color-green-500: #A6E22E;
  --color-green-600: #A6E22E;
  --color-green-700: #A6E22E;
  --color-green-800: #75715E;
  --color-green-900: #3E3D32;

  --color-red-50: #F92672;      /* rosa/vermelho vibrante */
  --color-red-100: #F92672;
  --color-red-200: #F92672;
  --color-red-300: #F92672;
  --color-red-400: #F92672;
  --color-red-500: #F92672;
  --color-red-600: #F92672;
  --color-red-700: #F92672;
  --color-red-800: #75715E;
  --color-red-900: #3E3D32;

  --color-yellow-50: #E6DB74;   /* amarelo claro */
  --color-yellow-100: #E6DB74;
  --color-yellow-200: #E6DB74;
  --color-yellow-300: #E6DB74;
  --color-yellow-400: #FD971F;  /* orange */
  --color-yellow-500: #FD971F;
  --color-yellow-600: #FD971F;
  --color-yellow-700: #FD971F;
  
  --color-orange-50: #FD971F;   /* laranja vibrante */
  --color-orange-100: #FD971F;
  --color-orange-200: #FD971F;
  --color-orange-300: #FD971F;
  --color-orange-400: #FD971F;
  --color-orange-500: #FD971F;
  --color-orange-600: #FD971F;
  --color-orange-700: #FD971F;
  
  --color-purple-50: #AE81FF;   /* roxo vibrante */
  --color-purple-100: #AE81FF;
  --color-purple-200: #AE81FF;
  --color-purple-300: #AE81FF;
  --color-purple-400: #AE81FF;
  --color-purple-500: #AE81FF;
  --color-purple-600: #AE81FF;
  --color-purple-700: #AE81FF;
  
  --color-pink-50: #F92672;     /* rosa vibrante */
  --color-pink-100: #F92672;
  --color-pink-200: #F92672;
  --color-pink-300: #F92672;
  --color-pink-400: #F92672;
  --color-pink-500: #F92672;
  --color-pink-600: #F92672;
  --color-pink-700: #F92672;
}

/* ============================================================
   ESTILOS BASE
   ============================================================ */
body {
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
  height: 100%;
}
```

---

### Tauri (mcp-manager/src-tauri/)

#### Cargo (Cargo.toml)

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

#### Tauri Configuration (tauri.conf.json)

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

### Backend (mcp-manager/src-tauri/src/)

#### Libs (lib.rs)

```rs
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
```

#### Main Script (main.rs)

```rs
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    mcp_manager_lib::run();
}
```

#### MCP Server (mcp_server.rs)

```rs
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
            
            // Resolve path templates in args
            let resolved_args: Vec<String> = server.config.args.iter()
                .map(|arg| resolve_path_template(arg))
                .collect();
            cmd.args(&resolved_args);

            // Resolve path templates in work_dir
            if let Some(ref work_dir) = server.config.work_dir {
                let resolved_work_dir = resolve_path_template(work_dir);
                cmd.current_dir(&resolved_work_dir);
            }

            // Add environment variables with path resolution
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
```

#### Tray (tray.rs)

```rs
use tauri::{
    App, Manager,
    menu::{Menu, MenuItem},
    tray::{TrayIconBuilder, TrayIconEvent, MouseButton, MouseButtonState},
};

pub fn create_tray(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let show = MenuItem::with_id(app, "show", "Show Dashboard", true, None::<&str>)?;
    let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;

    let menu = Menu::with_items(app, &[&show, &quit])?;

    TrayIconBuilder::with_id("main")
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .on_menu_event(move |app, event| {
            match event.id.as_ref() {
                "show" => {
                    if let Some(window) = app.get_webview_window("main") {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                }
                "quit" => {
                    app.exit(0);
                }
                _ => {}
            }
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                let app = tray.app_handle();
                if let Some(window) = app.get_webview_window("main") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
        })
        .build(app)?;

    Ok(())
}
```

#### Autostart (autostart.rs)

```rs
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
```

---

## System Information

> *Generated dynamically - updates on each run*

### Environment

- **Hostname**: c-6a3ef8ef-01471659-130e4bf63191
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 26/06/2026, 22:21:53

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.3.148
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

*Este arquivo foi gerado automaticamente pelo MCP Manager. Para atualizar as informações, execute: `npm run mcp-info`*
