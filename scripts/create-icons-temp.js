import fs from 'fs';
import path from 'path';

// Função para criar um ícone PNG simples usando canvas (se disponível)
function createSimpleIcon(size, filename) {
  // Como não temos canvas disponível, vamos criar um arquivo SVG temporário
  // e depois você pode convertê-lo manualmente
  
  const svgContent = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#45a049;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Fundo circular -->
  <circle cx="${size/2}" cy="${size/2}" r="${size*0.4}" fill="url(#bgGradient)" stroke="#fff" stroke-width="${size*0.02}"/>
  
  <!-- Carrinho de compras -->
  <g transform="translate(${size/2}, ${size/2})">
    <!-- Base do carrinho -->
    <rect x="-60" y="-20" width="120" height="80" rx="8" fill="rgba(255,255,255,0.9)" stroke="#4CAF50" stroke-width="3"/>
    
    <!-- Rodas -->
    <circle cx="-40" cy="70" r="12" fill="#666"/>
    <circle cx="40" cy="70" r="12" fill="#666"/>
    
    <!-- Cabo do carrinho -->
    <rect x="60" y="-40" width="8" height="60" rx="4" fill="#4CAF50"/>
    <rect x="65" y="-45" width="20" height="8" rx="4" fill="#4CAF50"/>
    
    <!-- Itens no carrinho -->
    <circle cx="-30" cy="0" r="8" fill="#FF9800"/>
    <circle cx="0" cy="-10" r="6" fill="#2196F3"/>
    <circle cx="20" cy="5" r="7" fill="#E91E63"/>
    <circle cx="-10" cy="15" r="5" fill="#9C27B0"/>
    
    <!-- Lista de compras -->
    <rect x="-50" y="-60" width="100" height="20" rx="10" fill="#fff" stroke="#4CAF50" stroke-width="2"/>
    <rect x="-45" y="-55" width="90" height="2" fill="#4CAF50"/>
    <rect x="-40" y="-50" width="80" height="2" fill="#4CAF50"/>
    <rect x="-35" y="-45" width="70" height="2" fill="#4CAF50"/>
  </g>
  
  <!-- Texto "Lista" -->
  <text x="${size/2}" y="${size/2 + size*0.25}" font-family="Arial, sans-serif" font-size="${size*0.06}" font-weight="bold" text-anchor="middle" fill="#fff">Lista</text>
</svg>`;

  // Salvar como SVG temporário
  const tempSvgPath = path.join('public', filename.replace('.png', '-temp.svg'));
  fs.writeFileSync(tempSvgPath, svgContent);
  
  console.log(`✅ Criado: ${tempSvgPath}`);
  console.log(`📝 Converta para PNG usando: https://convertio.co/svg-png/ ou similar`);
}

// Criar os ícones
console.log('🎨 Criando ícones SVG temporários...');
createSimpleIcon(192, 'icon-192x192.png');
createSimpleIcon(512, 'icon-512x512.png');
createSimpleIcon(180, 'apple-touch-icon.png');

console.log('\n📋 Próximos passos:');
console.log('1. Converta os arquivos SVG temporários para PNG');
console.log('2. Renomeie os PNG para os nomes corretos');
console.log('3. Configure as variáveis de ambiente no Vercel');
console.log('4. Faça um novo deploy');
