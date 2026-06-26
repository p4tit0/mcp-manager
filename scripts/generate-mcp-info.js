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

// Função para executar comandos e capturar output
function runCommand(cmd, fallback = 'N/A') {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
  } catch (error) {
    return fallback;
  }
}

// Função para obter informações do sistema
function getSystemInfo() {
  const info = {
    // Informações Gerais
    GENERATION_DATE: new Date().toLocaleString('pt-BR'),
    HOSTNAME: runCommand('hostname'),
    USERNAME: runCommand('whoami'),
    HOME_DIR: process.env.HOME || runCommand('echo $HOME'),
    
    // Ambiente de Execução
    OS_NAME: runCommand('uname -s'),
    KERNEL_VERSION: runCommand('uname -r'),
    ARCHITECTURE: runCommand('uname -m'),
    NODE_VERSION: runCommand('node --version', 'Não instalado'),
    NPM_VERSION: runCommand('npm --version', 'Não instalado'),
    RUST_VERSION: runCommand('rustc --version', 'Não instalado').replace('rustc ', ''),
    CARGO_VERSION: runCommand('cargo --version', 'Não instalado', 'Não instalado').replace('cargo ', ''),
    
    // Rede e Conectividade
    TAILSCALE_STATUS: runCommand('systemctl is-active tailscaled 2>/dev/null || echo "Verificando..."', 'Não verificado'),
    TAILSCALE_IP: runCommand('tailscale ip 2>/dev/null | head -1', 'Não disponível'),
    LOCAL_IP: runCommand('hostname -I 2>/dev/null | awk \'{print $1}\'', 'Não disponível'),
    USED_PORTS: runCommand('ss -tlnp 2>/dev/null | grep -E ":(300[0-9]|5037)" | awk \'{print $4}\' | sort -u | tr "\\n" ", " | sed "s/, $//" || echo "Nenhuma porta MCP"', 'Nenhuma porta detectada'),
    
    // Docker
    DOCKER_VERSION: runCommand('docker --version 2>/dev/null | cut -d" " -f3', 'Não instalado'),
    DOCKER_STATUS: runCommand('systemctl is-active docker 2>/dev/null || (docker info >/dev/null 2>&1 && echo "active") || echo "inactive"', 'Não verificado'),
    ACTIVE_MCP_CONTAINERS: runCommand('docker ps 2>/dev/null --filter "name=mcp" --format "{{.Names}}" | tr "\\n" ", " | sed "s/, $//" || echo "Nenhum container ativo"', 'Docker não disponível'),
    
    // Diretórios
    PROJECTS_DIR: `${process.env.HOME || '/home/user'}/Projects`,
    READ_PERMISSIONS: runCommand(`test -r ${process.env.HOME || '/home/user'}/Projects && echo "Sim" || echo "Não"`, 'Não verificado'),
    WRITE_PERMISSIONS: runCommand(`test -w ${process.env.HOME || '/home/user'}/Projects && echo "Sim" || echo "Não"`, 'Não verificado'),
    MOUNTED_VOLUMES: runCommand('docker ps 2>/dev/null --format "{{.Mounts}}" | grep -E "Projects|mnt" | head -5 | tr "\\n" "; " || echo "Nenhum volume montado"', 'Docker não disponível'),
    
    // Open WebUI
    OPEN_WEBUI_URL: process.env.OPEN_WEBUI_URL || 'http://localhost:8080',
    CONNECTION_STATUS: 'A verificar',
    MCPO_ENABLED: 'Sim',
    
    // Placeholders para preenchimento manual/dinâmico
    ACTIVE_SERVERS_LIST: '*Memory Server*\n*Sequential Thinking Server*\n*Git Server*',
    SERVER_CONFIGS: 'Consulte o dashboard para configurações detalhadas de cada servidor.',
    KNOWN_ISSUES: '- Filesystem Server: Erro de resolução de caminho $HOME\n- Shell Server: Requer permissões elevadas para alguns comandos',
    RECENT_LOGS: 'Verifique logs em tempo real no dashboard do MCP Manager.',
    DIAGNOSTIC_INFO: 'Execute `npm run mcp-diagnose` para diagnóstico detalhado.'
  };
  
  return info;
}

// Função para substituir placeholders no template
function replacePlaceholders(template, info) {
  let content = template;
  
  for (const [key, value] of Object.entries(info)) {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    content = content.replace(placeholder, value);
  }
  
  return content;
}

// Função para extrair seções manuais do arquivo existente
function extractManualSections(existingContent) {
  const sections = {};
  
  // Extrair conteúdo entre marcadores específicos se existirem
  const markers = [
    'KNOWN_ISSUES',
    'RECENT_LOGS', 
    'DIAGNOSTIC_INFO',
    'ACTIVE_SERVERS_LIST',
    'SERVER_CONFIGS'
  ];
  
  // Se o arquivo já tem conteúdo formatado, tentar preservar
  if (existingContent.includes('## ⚠️ Problemas Conhecidos')) {
    const issuesMatch = existingContent.match(/## ⚠️ Problemas Conhecidos\n([\s\S]*?)(?=##|\Z)/);
    if (issuesMatch && issuesMatch[1].trim()) {
      sections.KNOWN_ISSUES = issuesMatch[1].trim();
    }
  }
  
  if (existingContent.includes('## 📝 Logs Recentes')) {
    const logsMatch = existingContent.match(/## 📝 Logs Recentes\n([\s\S]*?)(?=##|\Z)/);
    if (logsMatch && logsMatch[1].trim()) {
      sections.RECENT_LOGS = logsMatch[1].trim();
    }
  }
  
  if (existingContent.includes('## 🛠️ Diagnóstico')) {
    const diagMatch = existingContent.match(/## 🛠️ Diagnóstico[\s\S]*?\n([\s\S]*?)(?=##|\Z)/);
    if (diagMatch && diagMatch[1].trim()) {
      sections.DIAGNOSTIC_INFO = diagMatch[1].trim();
    }
  }
  
  if (existingContent.includes('### Servidores Ativos')) {
    const serversMatch = existingContent.match(/### Servidores Ativos\n([\s\S]*?)(?=###|\Z)/);
    if (serversMatch && serversMatch[1].trim()) {
      sections.ACTIVE_SERVERS_LIST = serversMatch[1].trim();
    }
  }
  
  if (existingContent.includes('### Configurações por Servidor')) {
    const configMatch = existingContent.match(/### Configurações por Servidor\n([\s\S]*?)(?=##|\Z)/);
    if (configMatch && configMatch[1].trim()) {
      sections.SERVER_CONFIGS = configMatch[1].trim();
    }
  }
  
  return sections;
}

// Função principal
async function main() {
  console.log('🔍 Coletando informações do sistema...');
  
  const templatePath = path.join(__dirname, '..', 'MCP Manager - info.md [TEMPLATE]');
  const outputPath = path.join(__dirname, '..', 'MCP Manager - info.md');
  
  // Verificar se o template existe
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Template não encontrado:', templatePath);
    process.exit(1);
  }
  
  // Ler template
  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // Obter informações do sistema
  let info = getSystemInfo();
  
  // Se o arquivo de saída já existe, extrair seções manuais para preservar
  if (fs.existsSync(outputPath)) {
    console.log('📄 Arquivo existente detectado, preservando conteúdo manual...');
    const existingContent = fs.readFileSync(outputPath, 'utf-8');
    const manualSections = extractManualSections(existingContent);
    
    // Sobrescrever apenas as seções que foram extraídas do arquivo existente
    Object.assign(info, manualSections);
  }
  
  // Substituir placeholders
  const content = replacePlaceholders(template, info);
  
  // Escrever arquivo de saída
  fs.writeFileSync(outputPath, content, 'utf-8');
  
  console.log('✅ Arquivo gerado/atualizado com sucesso:', outputPath);
  console.log('\n📋 Resumo das informações:');
  console.log(`   Hostname: ${info.HOSTNAME}`);
  console.log(`   Usuário: ${info.USERNAME}`);
  console.log(`   Node.js: ${info.NODE_VERSION}`);
  console.log(`   Rust: ${info.RUST_VERSION}`);
  console.log(`   Docker: ${info.DOCKER_VERSION || 'Não instalado'}`);
  console.log(`   Tailscale IP: ${info.TAILSCALE_IP}`);
  console.log('\n📝 Para visualizar: cat "MCP Manager - info.md"');
}

main().catch(console.error);
