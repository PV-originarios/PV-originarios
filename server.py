#!/usr/bin/env python3
"""
Servidor HTTP simples que redireciona / para /index.html
"""
import http.server
import socketserver
import os
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Se a requisição for para /, redireciona para /index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()
    
    def end_headers(self):
        # Adiciona headers para evitar cache de JavaScript
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server(port=8000):
    os.chdir('/workspaces/PV-originarios')
    handler = CustomHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"""
╔══════════════════════════════════════════════════════════════╗
║          🌍 Servidor Local - PV Originários 🌍              ║
╚══════════════════════════════════════════════════════════════╝

✅ SERVIDOR ATIVO E RODANDO

🌐 Acesse em:  http://localhost:{port}
📍 Diretório:  /workspaces/PV-originarios
🔄 Redireção: / → /index.html automaticamente

📖 PÁGINAS:
   • http://localhost:{port}           (Mapa Principal)
   • http://localhost:{port}/about.html (Curiosidades)
   • http://localhost:{port}/quiz.html  (Quiz)

⏹️  Para parar o servidor: Pressione Ctrl+C

════════════════════════════════════════════════════════════════
        """)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor parado com sucesso!")

if __name__ == '__main__':
    run_server(8000)
