#!/usr/bin/env node

/**
 * Script para gerar/atualizar arquivo MCP Manager - info.md com informações do sistema
 * Gera dinamicamente: File Structure, Features, Temas, Templates e Source Code
 * Lê dados de arquivos JSON para features, temas e templates
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const TAURI_DIR = path.join(ROOT_DIR, 'src-tauri');
const DATA_DIR = path.join(SRC_DIR, 'data');

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

// Função para gerar árvore de diretórios recursivamente
function generateFileTree(dir, prefix = '', isLast = true, depth = 0) {
  if (depth > 10) return ''; // Limite de profundidade
  
  const items = [];
  const currentPath = path.join(dir.replace(/^[├───└───│\s]*/, '').replace(/^\s*/, ''));
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    // Separar diretórios e arquivos, ordenando alfabeticamente
    const directories = entries.filter(e => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
    const files = entries.filter(e => e.isFile() && !e.name.startsWith('.')).sort((a, b) => a.name.localeCompare(b.name));
    
    const allItems = [...directories, ...files];
    
    allItems.forEach((entry, index) => {
      const isLastItem = index === allItems.length - 1;
      const connector = isLastItem ? '└───' : '├───';
      const extension = isLastItem ? '    ' : '│   ';
      
      let icon = '📁 ';
      if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        icon = getIconForExtension(ext);
      }
      
      items.push(`${prefix}${connector} ${icon}${entry.name}`);
      
      // Se for diretório, recurse
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const newPath = path.join(dir, entry.name);
        items.push(generateFileTree(newPath, prefix + extension, isLastItem, depth + 1));
      }
    });
  } catch (error) {
    // Ignorar erros de permissão
  }
  
  return items.filter(i => i).join('\n');
}

// Função para obter ícone baseado na extensão do arquivo
function getIconForExtension(ext) {
  const icons = {
    '.tsx': '📄 ',
    '.ts': '📄 ',
    '.js': '📄 ',
    '.jsx': '📄 ',
    '.css': '🎨 ',
    '.json': '📋 ',
    '.toml': '⚙️ ',
    '.rs': '🦀 ',
    '.html': '🌐 ',
    '.md': '📝 ',
    '.png': '🖼️ ',
    '.ico': '🖼️ ',
    '.icns': '🖼️ ',
    '.svg': '🖼️ '
  };
  return icons[ext] || '📄 ';
}

// Função para obter estrutura de arquivos dinâmica
function getFileStructure() {
  const rootName = 'mcp-manager/';
  const srcTree = generateFileTree(SRC_DIR, '├─── ', false);
  const tauriTree = generateFileTree(TAURI_DIR, '└─── ', true);
  
  // Adicionar arquivos da raiz
  const rootFiles = [];
  try {
    const rootEntries = fs.readdirSync(ROOT_DIR, { withFileTypes: true });
    const files = rootEntries
      .filter(e => e.isFile() && !e.name.startsWith('.') && 
                   (e.name.endsWith('.json') || e.name.endsWith('.ts') || 
                    e.name.endsWith('.tsx') || e.name.endsWith('.css') ||
                    e.name.endsWith('.md')))
      .sort((a, b) => a.name.localeCompare(b.name));
    
    files.forEach(file => {
      const icon = getIconForExtension(path.extname(file.name));
      rootFiles.push(`├─── ${icon}${file.name}`);
    });
  } catch (error) {
    // Ignorar
  }
  
  return `📁 ${rootName}\n${srcTree}\n${tauriTree}\n${rootFiles.join('\n')}`;
}

// Função para carregar dados de JSON
function loadJsonData(fileName) {
  const filePath = path.join(DATA_DIR, fileName);
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch (error) {
    console.warn(`⚠️  Não foi possível carregar ${fileName}:`, error.message);
  }
  return null;
}

// Função para obter lista de features dos JSONs
function getFeaturesList() {
  const featuresData = loadJsonData('features.json');
  
  if (featuresData && featuresData.features) {
    return featuresData.features
      .map(f => `- **${f.name}:** ${f.description}`)
      .join('\n');
  }
  
  // Fallback para lista estática se JSON não existir
  return `- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- Window minimizes to tray on close (doesn't exit)
- DevTools enabled in release`;
}

// Função para obter lista de temas dos JSONs
function getThemesList() {
  const themesData = loadJsonData('themes.json');
  
  if (themesData && themesData.themes) {
    return themesData.themes
      .map(t => `- ${t.name}`)
      .join('\n');
  }
  
  // Fallback para lista estática se JSON não existir
  return `- Light
- Dark
- System (auto)
- Nord
- Dracula
- Monokai`;
}

// Função para obter lista de templates dos JSONs
function getTemplatesList() {
  const templatesData = loadJsonData('templates.json');
  
  if (templatesData && templatesData.templates) {
    return templatesData.templates
      .map(t => `- **${t.name}:** ${t.description}`)
      .join('\n');
  }
  
  return '- No templates available';
}

// Função para coletar todos os arquivos de código fonte
function collectSourceFiles() {
  const sourceFiles = {};
  
  // Arquivos da raiz
  const rootFiles = ['vite.config.ts', 'package.json', 'tsconfig.json', 'tsconfig.node.json'];
  rootFiles.forEach(file => {
    const filePath = path.join(ROOT_DIR, file);
    if (fs.existsSync(filePath)) {
      sourceFiles[`root_${file.replace(/\./g, '_')}`] = {
        path: file,
        content: safeReadFile(filePath),
        language: getLanguageFromExtension(path.extname(file))
      };
    }
  });
  
  // Arquivos frontend (src/)
  collectFilesRecursively(SRC_DIR, 'frontend_', sourceFiles);
  
  // Arquivos Tauri (src-tauri/)
  const tauriConfigFiles = ['Cargo.toml', 'tauri.conf.json'];
  tauriConfigFiles.forEach(file => {
    const filePath = path.join(TAURI_DIR, file);
    if (fs.existsSync(filePath)) {
      sourceFiles[`tauri_${file.replace(/\./g, '_')}`] = {
        path: `src-tauri/${file}`,
        content: safeReadFile(filePath),
        language: getLanguageFromExtension(path.extname(file))
      };
    }
  });
  
  // Arquivos Rust (src-tauri/src/)
  collectFilesRecursively(path.join(TAURI_DIR, 'src'), 'backend_', sourceFiles, ['.rs']);
  
  return sourceFiles;
}

// Função para coletar arquivos recursivamente
function collectFilesRecursively(dir, prefix, sourceFiles, extensions = null) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    entries.forEach(entry => {
      if (entry.name.startsWith('.')) return;
      
      const fullPath = path.join(dir, entry.path || path.join(dir, entry.name));
      
      if (entry.isDirectory()) {
        collectFilesRecursively(fullPath, prefix, sourceFiles, extensions);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        
        // Filtrar por extensões se especificado
        if (extensions && !extensions.includes(ext)) return;
        
        // Ignorar certos tipos de arquivo
        if (['.d.ts'].includes(ext)) return;
        
        const relativePath = path.relative(ROOT_DIR, fullPath);
        const key = `${prefix}${relativePath.replace(/[\/\\\.]/g, '_')}`;
        
        sourceFiles[key] = {
          path: relativePath,
          content: safeReadFile(fullPath),
          language: getLanguageFromExtension(ext)
        };
      }
    });
  } catch (error) {
    // Ignorar erros
  }
}

// Função para determinar linguagem baseada na extensão
function getLanguageFromExtension(ext) {
  const languages = {
    '.ts': 'typescript',
    '.tsx': 'typescript',
    '.js': 'javascript',
    '.jsx': 'javascript',
    '.css': 'css',
    '.json': 'json',
    '.toml': 'toml',
    '.rs': 'rust',
    '.html': 'html',
    '.md': 'markdown'
  };
  return languages[ext] || 'text';
}

// Função para gerar seção de código fonte
function generateSourceCodeSection(sourceFiles) {
  let section = '';
  
  // Agrupar por categoria
  const rootFiles = Object.entries(sourceFiles).filter(([key]) => key.startsWith('root_'));
  const frontendFiles = Object.entries(sourceFiles).filter(([key]) => key.startsWith('frontend_'));
  const tauriFiles = Object.entries(sourceFiles).filter(([key]) => key.startsWith('tauri_'));
  const backendFiles = Object.entries(sourceFiles).filter(([key]) => key.startsWith('backend_'));
  
  // Project Settings
  if (rootFiles.length > 0) {
    section += `\n### Project Settings\n\n`;
    rootFiles.forEach(([key, file]) => {
      const fileName = file.path.split('/').pop();
      section += `#### ${fileName}\n\n`;
      section += `\`\`\`${file.language}\n${file.content}\n\`\`\`\n\n`;
    });
  }
  
  // Frontend
  if (frontendFiles.length > 0) {
    section += `\n---\n\n### Frontend (src/)\n\n`;
    
    // Agrupar por subdiretório
    const frontendGroups = {};
    frontendFiles.forEach(([key, file]) => {
      const parts = file.path.split('/');
      const dir = parts.length > 2 ? parts[1] : 'root';
      if (!frontendGroups[dir]) frontendGroups[dir] = [];
      frontendGroups[dir].push(file);
    });
    
    Object.entries(frontendGroups).forEach(([dir, files]) => {
      if (dir !== 'root') {
        section += `#### ${capitalizeFirst(dir)}\n\n`;
      }
      files.forEach(file => {
        const fileName = file.path.split('/').pop();
        section += `##### ${fileName}\n\n`;
        section += `\`\`\`${file.language}\n${file.content}\n\`\`\`\n\n`;
      });
    });
  }
  
  // Tauri Config
  if (tauriFiles.length > 0) {
    section += `\n---\n\n### Tauri Configuration (src-tauri/)\n\n`;
    tauriFiles.forEach(([key, file]) => {
      const fileName = file.path.split('/').pop();
      section += `#### ${fileName}\n\n`;
      section += `\`\`\`${file.language}\n${file.content}\n\`\`\`\n\n`;
    });
  }
  
  // Backend (Rust)
  if (backendFiles.length > 0) {
    section += `\n---\n\n### Backend (src-tauri/src/)\n\n`;
    backendFiles.forEach(([key, file]) => {
      const fileName = file.path.split('/').pop();
      section += `#### ${fileName}\n\n`;
      section += `\`\`\`${file.language}\n${file.content}\n\`\`\`\n\n`;
    });
  }
  
  return section;
}

// Função auxiliar para capitalizar primeira letra
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para obter informações do sistema
function getSystemInfo() {
  const sourceFiles = collectSourceFiles();
  const sourceCodeSection = generateSourceCodeSection(sourceFiles);
  
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
    TEMPLATES_LIST: getTemplatesList(),
    FILE_STRUCTURE: getFileStructure(),
    SOURCE_CODE: sourceCodeSection,
    
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
  console.log('📂 Gerando estrutura de arquivos dinamicamente...');
  console.log('📋 Carregando features, temas e templates dos JSONs...');
  console.log('📝 Coletando códigos fonte automaticamente...');
  
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
  console.log('\n📋 Resumo das informações:');
  console.log(`   Última atualização: ${info.LAST_UPDATED}`);
  console.log(`   Hostname: ${info.HOSTNAME}`);
  console.log(`   Usuário: ${info.CURRENT_USER}`);
  console.log(`   Node.js: ${info.NODE_VERSION}`);
  console.log(`   Rust: ${info.RUST_VERSION}`);
  console.log(`   Docker: ${info.DOCKER_VERSION || 'Não instalado'}`);
  console.log(`   Tailscale IP: ${info.TAILSCALE_IP}`);
  console.log('\n📝 Para visualizar: cat "MCP Manager - info.md"');
}

main().catch(console.error);
