# 🚀 Guia de Deploy

Este guia mostra como colocar seu app online para que seus familiares possam acessá-lo de qualquer lugar.

## Opção 1: Netlify (Mais Fácil) ⭐

### Método Drag & Drop
1. Execute: `npm run build`
2. Acesse: https://app.netlify.com/drop
3. Arraste a pasta `dist` para o site
4. Pronto! Você receberá um link como: `https://random-name-12345.netlify.app`
5. Você pode personalizar o nome em Site Settings

### Método CLI (Recomendado)
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build do projeto
npm run build

# Deploy
netlify deploy --prod
```

Siga as instruções:
- Authorize via navegador
- Create & configure a new site
- Site name: `lista-compras-familia` (ou outro nome)
- Publish directory: `dist`

## Opção 2: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Para produção
vercel --prod
```

## Opção 3: Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Configurações:
# - Use existing project: selecione seu projeto
# - Public directory: dist
# - Single-page app: Yes
# - Overwrite index.html: No

# Build
npm run build

# Deploy
firebase deploy --only hosting
```

Seu app estará em: `https://seu-projeto.web.app`

## Opção 4: GitHub Pages

1. Crie um repositório no GitHub
2. Instale gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Adicione no `package.json`:
```json
{
  "homepage": "https://seu-usuario.github.io/lista-compras",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Adicione no `vite.config.js`:
```javascript
export default defineConfig({
  base: '/lista-compras/',
  // ... resto da config
})
```

5. Deploy:
```bash
npm run deploy
```

## ⚙️ Após o Deploy

### 1. Teste o App
- Abra o link no navegador
- Adicione alguns itens
- Teste em outro dispositivo/navegador
- Confirme que a sincronização funciona

### 2. Compartilhe com a Família
- Envie o link via WhatsApp/Email
- Oriente a instalar na tela inicial:
  - **Android**: Menu → "Adicionar à tela inicial"
  - **iOS**: Compartilhar → "Adicionar à Tela de Início"

### 3. Salve o Link
- Anote o link do app
- Marque como favorito
- Você pode criar um QR Code para facilitar o compartilhamento

## 🔄 Atualizações

Quando fizer mudanças no código:

```bash
# Rebuildar
npm run build

# Fazer novo deploy
# Netlify:
netlify deploy --prod

# Vercel:
vercel --prod

# Firebase:
firebase deploy --only hosting
```

## 🌐 Domínio Personalizado (Opcional)

Todos os serviços acima permitem adicionar um domínio personalizado:
- Exemplo: `lista.familia.com.br`
- Configure nas configurações do serviço
- Você precisará comprar um domínio (R$ 40/ano em média)

## 📊 Monitoramento

### Netlify
- Analytics embutido
- Logs de deploy
- Formulários de erro

### Vercel
- Analytics de velocidade
- Logs em tempo real

### Firebase
- Google Analytics (se habilitado)
- Crashlytics para erros

## 💡 Dicas

1. **URL Curta**: Use um encurtador de URL se o link for muito longo
2. **QR Code**: Gere um QR Code do link para facilitar instalação
3. **Backup**: Mantenha o link do Firebase Console salvo
4. **Teste**: Sempre teste após cada deploy

## ⚠️ Importante

- O Firebase Realtime Database está configurado para permitir acesso público
- Para uso familiar, isso é OK, mas não compartilhe o link publicamente
- Se quiser mais segurança, me avise que configuro autenticação

## 🆘 Solução de Problemas

### "Site não carrega"
- Verifique se o build foi feito: `npm run build`
- Confirme que a pasta `dist` existe
- Tente limpar o cache do navegador

### "Lista vazia após deploy"
- Normal! Os dados estão no Firebase
- Adicione novos itens para testar

### "Não sincroniza"
- Verifique as credenciais do Firebase em `src/firebase.js`
- Confirme que o Realtime Database está ativo
- Veja o console do navegador (F12) para erros

---

🎉 **Pronto!** Seu app está online e acessível para toda a família!

