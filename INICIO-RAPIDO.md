# 🚀 Início Rápido

## Para Começar AGORA (5 minutos)

### 1. Abra o Terminal
- **Windows**: Pressione `Win + R`, digite `cmd` e Enter
- **Mac**: Pressione `Cmd + Espaço`, digite "Terminal" e Enter
- **VS Code**: Menu Terminal → New Terminal

### 2. Navegue até a pasta do projeto
```bash
cd C:\Users\sanch\App_ListaMercado
```

### 3. Instale as dependências
```bash
npm install
```
⏳ *Aguarde 1-2 minutos...*

### 4. Configure o Firebase

#### Opção A: Teste Local (sem sincronização)
Para testar rapidamente SEM sincronização entre dispositivos:

1. Edite `src/firebase.js`
2. Comente todo o código do Firebase
3. Adicione este código:

```javascript
// Versão local para testes
export const database = null;
```

4. Execute: `npm run dev`
5. Abra: http://localhost:5173

⚠️ **Limitação**: Dados não serão compartilhados entre dispositivos

#### Opção B: Firebase Real (recomendado)
Para ter sincronização real entre dispositivos:

1. Acesse: https://console.firebase.google.com/
2. Clique em "Adicionar projeto"
3. Nome: `lista-compras-familia`
4. Desative Analytics
5. Clique em "Criar projeto"
6. No menu lateral: "Realtime Database"
7. Clique em "Criar banco de dados"
8. Localização: `us-central1`
9. Modo: "Iniciar em modo de teste"
10. Na aba "Regras", cole:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
11. Clique em "Publicar"
12. Vá em ⚙️ Configurações → Configurações do projeto
13. Role até "Seus aplicativos"
14. Clique no ícone `</>`
15. Nome: "App Lista"
16. Copie o `firebaseConfig`
17. Cole em `src/firebase.js` substituindo os valores de exemplo

### 5. Execute o App
```bash
npm run dev
```

Você verá:
```
➜ Local: http://localhost:5173/
```

### 6. Teste no Navegador
Abra http://localhost:5173/

### 7. Teste no Celular

**Se estiver na mesma rede WiFi:**
1. No terminal, procure: `Network: http://192.168.x.x:5173`
2. Digite este endereço no navegador do celular

**Para compartilhar com a família:**
Faça o deploy (veja DEPLOY.md)

## ✅ Pronto!

Seu app está funcionando! 🎉

Agora você pode:
- ✅ Adicionar itens
- ✅ Definir quantidades
- ✅ Marcar como comprado
- ✅ Excluir itens
- ✅ Ver a lista em tempo real (se configurou Firebase)

## 📱 Próximos Passos

1. **Gerar Ícones**: Execute `python scripts/create-icons.py` ou use o `scripts/generate-icons.html`
2. **Deploy**: Siga as instruções em `DEPLOY.md`
3. **Compartilhar**: Envie o link para sua família

## ❓ Problemas?

### "npm não encontrado"
👉 Instale o Node.js: https://nodejs.org/

### "Erro ao executar npm install"
👉 Tente:
```bash
npm cache clean --force
npm install
```

### "Porta 5173 já em uso"
👉 O comando irá oferecer outra porta automaticamente

### "Lista não sincroniza"
👉 Verifique se configurou o Firebase corretamente

## 📞 Ajuda

Para mais detalhes, veja:
- `README.md` - Documentação completa
- `INSTRUCOES.md` - Passo a passo detalhado
- `DEPLOY.md` - Como colocar online

---

💡 **Dica**: Mantenha o terminal aberto enquanto usa o app!

