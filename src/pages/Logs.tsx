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