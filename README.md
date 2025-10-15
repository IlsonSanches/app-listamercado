# 🛒 Lista de Compras - App Familiar

Um aplicativo simples e funcional para criar e compartilhar listas de compras de mercado com a família em tempo real.

## 🌟 Status do Projeto

✅ **PROJETO EM PRODUÇÃO E FUNCIONANDO!**

- 🔗 **Repositório**: [github.com/IlsonSanches/app-listamercado](https://github.com/IlsonSanches/app-listamercado)
- 🚀 **Deploy**: Vercel (Em produção)
- 🔥 **Firebase**: Configurado e funcionando
- 📱 **PWA**: Pronto para instalação no celular

## 📱 Funcionalidades

- ✅ Adicionar itens com quantidade
- ✅ Marcar itens como comprados
- ✅ Excluir itens
- ✅ Sincronização em tempo real entre dispositivos
- ✅ Funciona offline
- ✅ Instalável no celular (PWA)
- ✅ Interface responsiva e moderna
- ✅ Sem necessidade de login

## 🚀 Como Configurar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative o **Realtime Database**:
   - Vá em "Realtime Database" no menu lateral
   - Clique em "Criar banco de dados"
   - Escolha a localização mais próxima
   - Inicie em modo de teste

4. Configure as regras de segurança:
   - No Realtime Database, vá em "Regras"
   - Adicione as seguintes regras (para uso familiar):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
   > ⚠️ **Atenção**: Estas regras permitem acesso total. Para uso familiar privado, você pode adicionar uma senha ou usar regras mais restritivas.

5. Pegue suas credenciais:
   - Vá em Configurações do Projeto (ícone de engrenagem) → Configurações do projeto
   - Role até "Seus aplicativos" e clique no ícone da web `</>`
   - Registre o app e copie as credenciais do Firebase

6. Cole as credenciais no arquivo `src/firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "sua-api-key",
     authDomain: "seu-projeto.firebaseapp.com",
     databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
     projectId: "seu-projeto",
     storageBucket: "seu-projeto.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```

### 3. Executar o App

```bash
npm run dev
```

O app estará disponível em `http://localhost:5173`

### 4. Instalar no Celular

1. Abra o app no navegador do celular
2. No Chrome/Safari, você verá a opção "Adicionar à tela inicial"
3. O app será instalado como um aplicativo nativo

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos prontos para deploy estarão na pasta `dist/`

## 🌐 Deploy

Você pode fazer deploy gratuito em:

- **Firebase Hosting**: `firebase deploy`
- **Vercel**: `vercel deploy`
- **Netlify**: Arraste a pasta `dist` para netlify.com/drop

## 🎨 Personalização

- **Cores**: Edite os arquivos CSS em `src/components/`
- **Título**: Modifique em `index.html` e `src/components/Header.jsx`
- **Ícone**: Substitua os arquivos em `public/`

## 💡 Dicas de Uso

1. **Compartilhar com a Família**: Todos acessam a mesma URL
2. **Funciona Offline**: O app continua funcionando sem internet
3. **Sincronização Automática**: Mudanças aparecem em tempo real em todos os dispositivos
4. **Limpar Lista**: Use o botão "Limpar itens comprados" após as compras

## 🔒 Segurança Opcional

Se quiser adicionar uma camada de segurança simples:

1. No Firebase Realtime Database, vá em "Regras"
2. Adicione uma senha:
   ```json
   {
     "rules": {
       ".read": "auth.uid != null || query.orderByKey == 'senha123'",
       ".write": "auth.uid != null || query.orderByKey == 'senha123'"
     }
   }
   ```

## 📱 Compatibilidade

- ✅ Android (Chrome, Firefox, Edge)
- ✅ iOS (Safari, Chrome)
- ✅ Desktop (todos os navegadores modernos)

## 🛠️ Tecnologias

- React 18
- Vite
- Firebase Realtime Database
- PWA (Progressive Web App)

## 📄 Licença

MIT - Livre para uso pessoal e familiar

---

Desenvolvido com ❤️ para facilitar as compras da família!

