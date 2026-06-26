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