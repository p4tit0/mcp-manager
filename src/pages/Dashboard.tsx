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

    // MCP Server Templates
    const mcpTemplates = [
        {
            id: 'memory',
            name: 'Memory Server',
            description: 'Persistent memory storage for AI context',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-memory"]',
            port: 3001,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'filesystem',
            name: 'Filesystem Server',
            description: 'Access local files and directories',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-filesystem", "/home/user/Projects"]',
            port: 3002,
            workDir: '/home/user/Projects',
            useDocker: false,
        },
        {
            id: 'shell',
            name: 'Shell Server',
            description: 'Execute shell commands securely',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-shell"]',
            port: 3003,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'adb',
            name: 'ADB Server',
            description: 'Android Debug Bridge integration',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-adb"]',
            port: 3004,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'sequential-thinking',
            name: 'Sequential Thinking Server',
            description: 'Chain of thought reasoning',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-sequential-thinking"]',
            port: 3005,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git',
            name: 'Git Server',
            description: 'Git repository operations',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-git"]',
            port: 3006,
            workDir: '/home/user/Projects',
            useDocker: false,
        },
        {
            id: 'playwright',
            name: 'Playwright Server',
            description: 'Browser automation and testing',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-playwright"]',
            port: 3007,
            workDir: '',
            useDocker: true,
            dockerImage: 'mcr.microsoft.com/playwright:v1.40.0-jammy',
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
            dockerVolumes: '',
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