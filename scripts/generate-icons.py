#!/usr/bin/env python3
"""
Script para gerar ícones PNG a partir do SVG para PWA
Gera os tamanhos necessários: 192x192, 512x512, apple-touch-icon (180x180)
"""

import os
import subprocess
import sys

def check_cairosvg():
    """Verifica se cairosvg está instalado"""
    try:
        import cairosvg
        return True
    except ImportError:
        return False

def install_cairosvg():
    """Instala cairosvg se não estiver disponível"""
    print("Instalando cairosvg...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "cairosvg"])
    print("cairosvg instalado com sucesso!")

def generate_icons():
    """Gera os ícones PNG a partir do SVG"""
    if not check_cairosvg():
        install_cairosvg()
    
    import cairosvg
    
    # Tamanhos necessários
    sizes = [
        (192, 192, "icon-192x192.png"),
        (512, 512, "icon-512x512.png"),
        (180, 180, "apple-touch-icon.png")
    ]
    
    svg_path = "public/icon.svg"
    
    if not os.path.exists(svg_path):
        print(f"Erro: Arquivo {svg_path} não encontrado!")
        return False
    
    print("Gerando ícones...")
    
    for width, height, filename in sizes:
        output_path = f"public/{filename}"
        try:
            cairosvg.svg2png(
                url=svg_path,
                write_to=output_path,
                output_width=width,
                output_height=height
            )
            print(f"Gerado: {output_path} ({width}x{height})")
        except Exception as e:
            print(f"Erro ao gerar {filename}: {e}")
            return False
    
    print("\nTodos os icones foram gerados com sucesso!")
    return True

if __name__ == "__main__":
    print("Gerador de Icones para Lista de Compras")
    print("=" * 50)
    
    if generate_icons():
        print("\nProximos passos:")
        print("1. Teste o app no iPhone")
        print("2. Adicione a tela inicial")
        print("3. Verifique se o icone aparece corretamente")
    else:
        print("\nFalha ao gerar icones")
        sys.exit(1)
