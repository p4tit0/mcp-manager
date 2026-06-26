#!/usr/bin/env node

/**
 * Script para gerar/atualizar arquivo MCP Manager - info.md com informações do sistema
 * Preserva o conteúdo existente e atualiza apenas as seções dinâmicas
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// Função para executar comandos e capturar output
function runCommand(cmd, fallback = 'N/A') {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: ROOT_DIR }).trim();
  } catch (error) {
    return fallback;
  }
}

// Função para ler arquivo de forma segura
function safeReadFile(filePath, fallback = '') {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8').trim();
    }
    return fallback;
  } catch (error) {
    return fallback;
  }
}

// Função para obter data formatada
function getLastUpdated() {
  const now = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

// Função para obter estrutura de arquivos
function getFileStructure() {
  const structure = `📁 mcp-manager/
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
└── 📄 tsconfig.json`;
  return structure;
}

// Função para obter lista de features
function getFeaturesList() {
  return `- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- Window minimizes to tray on close (doesn't exit)
- DevTools enabled in release`;
}

// Função para obter lista de temas
function getThemesList() {
  return `- Light
- Dark
- System (auto)
- Nord
- Dracula
- Monokai`;
}

// Função para obter informações do sistema
function getSystemInfo() {
  const info = {
    // Informações do Projeto
    LAST_UPDATED: getLastUpdated(),
    DESCRIPTION: 'Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale',
    PROJECT_LOCATION: '~/Projects/mcp-manager',
    FRAMEWORK: 'Tauri v2 + React + TypeScript',
    CSS_FRAMEWORK: 'Tailwind CSS v4 (@tailwindcss/vite)',
    APP_IDENTIFIER: 'com.birblabs.mcp-manager',
    ICONS_PATH: 'src-tauri/icons/',
    
    FEATURES_LIST: getFeaturesList(),
    THEMES_LIST: getThemesList(),
    FILE_STRUCTURE: getFileStructure(),
    
    // Conteúdo dos arquivos de código
    VITE_CONFIG: safeReadFile(path.join(ROOT_DIR, 'vite.config.ts')),
    PACKAGE_JSON: safeReadFile(path.join(ROOT_DIR, 'package.json')),
    SIDEBAR_TSX: safeReadFile(path.join(ROOT_DIR, 'src/components/Sidebar.tsx')),
    DASHBOARD_TSX: safeReadFile(path.join(ROOT_DIR, 'src/pages/Dashboard.tsx')),
    LOGS_TSX: safeReadFile(path.join(ROOT_DIR, 'src/pages/Logs.tsx')),
    SETTINGS_TSX: safeReadFile(path.join(ROOT_DIR, 'src/pages/Settings.tsx')),
    THEME_CONTEXT_TSX: safeReadFile(path.join(ROOT_DIR, 'src/contexts/ThemeContext.tsx')),
    APP_TSX: safeReadFile(path.join(ROOT_DIR, 'src/App.tsx')),
    APP_CSS: safeReadFile(path.join(ROOT_DIR, 'src/App.css')),
    CARGO_TOML: safeReadFile(path.join(ROOT_DIR, 'src-tauri/Cargo.toml')),
    TAURI_CONFIG: safeReadFile(path.join(ROOT_DIR, 'src-tauri/tauri.conf.json')),
    LIB_RS: safeReadFile(path.join(ROOT_DIR, 'src-tauri/src/lib.rs')),
    MAIN_RS: safeReadFile(path.join(ROOT_DIR, 'src-tauri/src/main.rs')),
    MCP_SERVER_RS: safeReadFile(path.join(ROOT_DIR, 'src-tauri/src/mcp_server.rs')),
    TRAY_RS: safeReadFile(path.join(ROOT_DIR, 'src-tauri/src/tray.rs')),
    AUTOSTART_RS: safeReadFile(path.join(ROOT_DIR, 'src-tauri/src/autostart.rs')),
    
    // Informações Gerais do Sistema
    GENERATION_DATE: new Date().toLocaleString('pt-BR'),
    HOSTNAME: runCommand('hostname'),
    CURRENT_USER: runCommand('whoami'),
    HOME_DIR: process.env.HOME || runCommand('echo $HOME'),
    
    // Ambiente de Execução
    OS_NAME: runCommand('uname -s'),
    KERNEL_VERSION: runCommand('uname -r'),
    ARCHITECTURE: runCommand('uname -m'),
    NODE_VERSION: runCommand('node --version', 'Não instalado'),
    NPM_VERSION: runCommand('npm --version', 'Não instalado'),
    RUST_VERSION: runCommand('rustc --version', 'Não instalado').replace('rustc ', ''),
    CARGO_VERSION: runCommand('cargo --version', 'Não instalado').replace('cargo ', ''),
    
    // Rede e Conectividade
    TAILSCALE_STATUS: runCommand('systemctl is-active tailscaled 2>/dev/null || echo "Verificando..."', 'Não verificado'),
    TAILSCALE_IP: runCommand('tailscale ip 2>/dev/null | head -1', 'Não disponível'),
    LOCAL_IP: runCommand('hostname -I 2>/dev/null | awk \'{print $1}\'', 'Não disponível'),
    
    // Docker
    DOCKER_VERSION: runCommand('docker --version 2>/dev/null | cut -d" " -f3', 'Não instalado'),
    DOCKER_STATUS: runCommand('systemctl is-active docker 2>/dev/null || (docker info >/dev/null 2>&1 && echo "active") || echo "inactive"', 'Não verificado')
  };
  
  return info;
}

// Função para substituir placeholders no template
function replacePlaceholders(template, info) {
  let content = template;
  
  // Ordenar chaves por tamanho (maiores primeiro) para evitar substituições parciais
  const sortedKeys = Object.keys(info).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const value = info[key];
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    content = content.replace(placeholder, value);
  }
  
  return content;
}

// Função principal
async function main() {
  console.log('🔍 Coletando informações do sistema e do projeto...');
  
  const templatePath = path.join(__dirname, '..', 'MCP Manager - info.md [TEMPLATE]');
  const outputPath = path.join(__dirname, '..', 'MCP Manager - info.md');
  
  // Verificar se o template existe
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Template não encontrado:', templatePath);
    process.exit(1);
  }
  
  // Ler template
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Obter informações do sistema
  const info = getSystemInfo();
  
  // Substituir placeholders
  const content = replacePlaceholders(template, info);
  
  // Escrever arquivo de saída
  fs.writeFileSync(outputPath, content, 'utf-8');
  
  console.log('✅ Arquivo gerado/atualizado com sucesso:', outputPath);
  console.log('\\n📋 Resumo das informações:');
  console.log(`   Última atualização: ${info.LAST_UPDATED}`);
  console.log(`   Hostname: ${info.HOSTNAME}`);
  console.log(`   Usuário: ${info.CURRENT_USER}`);
  console.log(`   Node.js: ${info.NODE_VERSION}`);
  console.log(`   Rust: ${info.RUST_VERSION}`);
  console.log(`   Docker: ${info.DOCKER_VERSION || 'Não instalado'}`);
  console.log(`   Tailscale IP: ${info.TAILSCALE_IP}`);
  console.log('\\n📝 Para visualizar: cat "MCP Manager - info.md"');
}

main().catch(console.error);
