# Scripts Auxiliares

## create-icons.py

Gera os ícones necessários para o PWA.

### Usar:

```bash
# Instalar dependência
pip install pillow

# Executar
python scripts/create-icons.py
```

## generate-icons.html

Alternativa para gerar ícones usando o navegador (não requer Python).

### Usar:

1. Abra `scripts/generate-icons.html` no navegador
2. Clique nos botões para baixar os ícones
3. Mova os arquivos para a pasta `public/`

## Ícones Necessários

- `icon-192x192.png` - Ícone pequeno do PWA
- `icon-512x512.png` - Ícone grande do PWA  
- `apple-touch-icon.png` - Ícone para iOS (180x180)

## Alternativa Online

Se preferir, use um gerador online:
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

Faça upload de uma imagem 512x512 com fundo verde (#4CAF50) e o emoji 🛒.

