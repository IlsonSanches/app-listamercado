# 📋 Instruções Rápidas de Instalação

## Passo a Passo Simplificado

### 1️⃣ Instalar o Node.js
Se você ainda não tem o Node.js instalado:
- Baixe em: https://nodejs.org/
- Instale a versão LTS (recomendada)
- Verifique a instalação abrindo o terminal e digitando: `node --version`

### 2️⃣ Instalar Dependências do Projeto

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Aguarde a instalação terminar (pode demorar alguns minutos).

### 3️⃣ Configurar o Firebase

#### a) Criar conta no Firebase
1. Acesse: https://console.firebase.google.com/
2. Faça login com sua conta Google
3. Clique em "Adicionar projeto"
4. Dê um nome (ex: "lista-compras-familia")
5. Desabilite o Google Analytics (não é necessário)
6. Clique em "Criar projeto"

#### b) Ativar Realtime Database
1. No menu lateral, clique em "Realtime Database"
2. Clique em "Criar banco de dados"
3. Escolha uma localização (ex: us-central1)
4. Escolha "Iniciar no modo de teste"
5. Clique em "Ativar"

#### c) Configurar Regras (importante!)
1. Clique na aba "Regras"
2. Cole este código:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
3. Clique em "Publicar"

> ⚠️ **Nota de Segurança**: Essas regras permitem que qualquer pessoa com o link acesse a lista. Para uso familiar, compartilhe o link apenas com pessoas de confiança. Se quiser mais segurança, me avise que explico como adicionar senha.

#### d) Copiar Credenciais
1. Clique no ícone de engrenagem (⚙️) → "Configurações do projeto"
2. Role a página até "Seus aplicativos"
3. Clique no ícone da Web (`</>`)
4. Registre um apelido para o app (ex: "App Lista")
5. NÃO marque Firebase Hosting
6. Clique em "Registrar app"
7. Copie TODO o código do `firebaseConfig`

#### e) Colar no Projeto
1. Abra o arquivo: `src/firebase.js`
2. Substitua as credenciais de exemplo pelas suas:

```javascript
const firebaseConfig = {
  apiKey: "Cole-aqui-sua-apiKey",
  authDomain: "seu-projeto.firebaseapp.com",
  databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

3. Salve o arquivo (Ctrl+S ou Cmd+S)

### 4️⃣ Executar o App

No terminal, execute:

```bash
npm run dev
```

Você verá algo como:
```
  ➜  Local:   http://localhost:5173/
```

Abra este link no navegador!

### 5️⃣ Acessar no Celular

#### Método 1: Mesma Rede WiFi
1. No terminal, procure por "Network: http://192.168.x.x:5173"
2. Digite este endereço no navegador do celular
3. Adicione à tela inicial

#### Método 2: Deploy Online (Recomendado)

**Opção A - Netlify (Mais Fácil)**
1. Crie uma conta em: https://www.netlify.com/
2. Execute no terminal: `npm run build`
3. Arraste a pasta `dist` para https://app.netlify.com/drop
4. Pronto! Você terá um link tipo: `https://seu-app.netlify.app`

**Opção B - Vercel**
1. Crie uma conta em: https://vercel.com/
2. Instale o Vercel CLI: `npm install -g vercel`
3. Execute: `vercel`
4. Siga as instruções
5. Pronto! Você terá um link tipo: `https://seu-app.vercel.app`

### 6️⃣ Compartilhar com a Família

1. Envie o link do app para seus familiares
2. No celular, abra o link no navegador
3. No menu do navegador, selecione "Adicionar à tela inicial"
4. O app será instalado como um aplicativo!

## ❓ Problemas Comuns

### "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org/

### "Erro ao conectar com Firebase"
- Verifique se copiou TODAS as credenciais corretamente
- Confirme que o Realtime Database está ativado
- Verifique se as regras foram publicadas

### "Não consigo acessar do celular"
- Certifique-se que o celular está na mesma rede WiFi
- Use o endereço "Network" que aparece no terminal
- OU faça o deploy online (recomendado)

### "App está vazio"
- Aguarde alguns segundos para sincronizar
- Verifique sua conexão com internet
- Confirme que o Firebase está configurado

## 📞 Precisa de Ajuda?

Se tiver dúvidas, me avise qual erro está aparecendo!

## ✅ Checklist Final

- [ ] Node.js instalado
- [ ] `npm install` executado com sucesso
- [ ] Projeto Firebase criado
- [ ] Realtime Database ativado
- [ ] Regras publicadas
- [ ] Credenciais copiadas para `src/firebase.js`
- [ ] App rodando com `npm run dev`
- [ ] Testado no navegador
- [ ] Acessível no celular (via WiFi ou deploy)
- [ ] Link compartilhado com a família

---

🎉 **Parabéns!** Sua lista de compras familiar está pronta para usar!

