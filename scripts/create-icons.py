#!/usr/bin/env python3
"""
Script para gerar ícones do PWA
Requer: pip install pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("❌ Erro: Pillow não está instalado")
    print("Execute: pip install pillow")
    exit(1)

def create_icon(size, filename):
    """Cria um ícone com fundo verde e emoji de carrinho"""
    # Criar imagem com fundo verde
    img = Image.new('RGB', (size, size), color='#4CAF50')
    draw = ImageDraw.Draw(img)
    
    # Tentar adicionar texto (emoji pode não funcionar bem)
    try:
        # Tamanho da fonte proporcional ao tamanho do ícone
        font_size = int(size * 0.6)
        font = ImageFont.truetype("arial.ttf", font_size)
        
        # Desenhar emoji no centro
        text = "🛒"
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        position = ((size - text_width) // 2, (size - text_height) // 2 - int(size * 0.05))
        draw.text(position, text, fill='white', font=font)
    except Exception as e:
        print(f"⚠️ Aviso: Não foi possível adicionar emoji - {e}")
        # Desenhar um carrinho simples com formas geométricas
        draw_simple_cart(draw, size)
    
    # Salvar imagem
    img.save(f"public/{filename}")
    print(f"✅ Criado: public/{filename} ({size}x{size})")

def draw_simple_cart(draw, size):
    """Desenha um carrinho simplificado se emoji não funcionar"""
    # Cor branca para o carrinho
    color = 'white'
    line_width = max(3, size // 50)
    
    # Coordenadas proporcionais
    s = size / 10  # Unidade base
    
    # Corpo do carrinho
    draw.rectangle([(2*s, 3*s), (8*s, 7*s)], outline=color, width=line_width)
    
    # Rodas
    draw.ellipse([(3*s, 7*s), (4*s, 8*s)], outline=color, width=line_width)
    draw.ellipse([(6*s, 7*s), (7*s, 8*s)], outline=color, width=line_width)
    
    # Alça
    draw.line([(8*s, 3*s), (9*s, 2*s)], fill=color, width=line_width)

def main():
    print("🎨 Gerando ícones do PWA...")
    print()
    
    # Criar diretório public se não existir
    import os
    os.makedirs("public", exist_ok=True)
    
    # Gerar ícones nos tamanhos necessários
    sizes = [192, 512]
    
    for size in sizes:
        create_icon(size, f"icon-{size}x{size}.png")
    
    # Criar apple-touch-icon (180x180)
    create_icon(180, "apple-touch-icon.png")
    
    print()
    print("✅ Todos os ícones foram gerados com sucesso!")
    print()
    print("📱 Os ícones estão em: public/")
    print("   - icon-192x192.png")
    print("   - icon-512x512.png")
    print("   - apple-touch-icon.png")

if __name__ == "__main__":
    main()

