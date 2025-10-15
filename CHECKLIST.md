# ✅ Checklist de Instalação e Deploy

Use este checklist para acompanhar seu progresso!

## 📋 FASE 1: Preparação (5 min)

- [ ] **Node.js instalado**
  - Teste: Abra o terminal e digite `node --version`
  - Se não aparecer a versão, baixe em: https://nodejs.org/
  
- [ ] **Terminal aberto na pasta do projeto**
  ```bash
  cd C:\Users\sanch\App_ListaMercado
  ```

- [ ] **Dependências instaladas**
  ```bash
  npm install
  ```
  Aguarde a mensagem de sucesso

## 🔥 FASE 2: Configuração do Firebase (10 min)

- [ ] **Conta Google criada/acessada**
  
- [ ] **Projeto Firebase criado**
  - Acesse: https://console.firebase.google.com/
  - Clique em "Adicionar projeto"
  - Nome: `lista-compras-familia`
  - Desative Google Analytics
  - Clique em "Criar projeto"

- [ ] **Realtime Database ativado**
  - Menu lateral: "Realtime Database"
  - Clique em "Criar banco de dados"
  - Localização: `us-central1` (ou mais próxima)
  - Modo: "Iniciar em modo de teste"
  - Clique em "Ativar"

- [ ] **Regras configuradas**
  - Vá na aba "Regras"
  - Cole:
    ```json
    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }
    ```
  - Clique em "Publicar"

- [ ] **Credenciais copiadas**
  - Ícone de engrenagem (⚙️) → "Configurações do projeto"
  - Role até "Seus aplicativos"
  - Clique no ícone Web (`</>`)
  - Apelido: "App Lista"
  - NÃO marque Firebase Hosting
  - Clique em "Registrar app"
  - Copie TODO o bloco `firebaseConfig`

- [ ] **Credenciais coladas no projeto**
  - Abra: `src/firebase.js`
  - Substitua o bloco `firebaseConfig` pelo que você copiou
  - Salve o arquivo (Ctrl+S)

## 🧪 FASE 3: Teste Local (5 min)

- [ ] **App executando**
  ```bash
  npm run dev
  ```
  Você verá algo como: `Local: http://localhost:5173/`

- [ ] **App aberto no navegador**
  - Abra: http://localhost:5173/
  - Você deve ver o cabeçalho "🛒 Lista de Compras"

- [ ] **Teste: Adicionar item**
  - Digite "Arroz" no campo
  - Quantidade: 2
  - Clique no botão verde "+"
  - O item deve aparecer na lista

- [ ] **Teste: Marcar como comprado**
  - Clique no item "Arroz"
  - Ele deve ficar riscado e ir para o fim

- [ ] **Teste: Excluir item**
  - Clique no "X" vermelho ao lado de "Arroz"
  - O item deve desaparecer

- [ ] **Teste: Sincronização (importante!)**
  - Abra http://localhost:5173/ em outra aba/janela
  - Adicione um item em uma janela
  - Verifique se aparece na outra
  - ✅ Se apareceu = Firebase configurado corretamente!
  - ❌ Se não apareceu = Revise as credenciais do Firebase

## 📱 FASE 4: Teste no Celular (Opcional - 5 min)

- [ ] **Celular na mesma rede WiFi**
  
- [ ] **Endereço de rede identificado**
  - No terminal, procure: `Network: http://192.168.x.x:5173`
  - Anote este endereço

- [ ] **App aberto no celular**
  - Abra o navegador do celular
  - Digite o endereço anotado
  - O app deve abrir

- [ ] **Teste de sincronização mobile**
  - Adicione um item no celular
  - Verifique se aparece no computador
  - E vice-versa

## 🎨 FASE 5: Ícones (Opcional - 5 min)

Escolha UMA das opções:

### Opção A: Python
- [ ] Python instalado
- [ ] Pillow instalado: `pip install pillow`
- [ ] Execute: `python scripts/create-icons.py`
- [ ] Verifique se os arquivos foram criados em `public/`

### Opção B: Navegador
- [ ] Abra `scripts/generate-icons.html` no navegador
- [ ] Clique em cada botão para baixar os ícones
- [ ] Mova os arquivos para a pasta `public/`

### Opção C: Online
- [ ] Acesse: https://realfavicongenerator.net/
- [ ] Faça upload de uma imagem com fundo verde e emoji 🛒
- [ ] Baixe os ícones gerados
- [ ] Coloque em `public/`

## 🚀 FASE 6: Deploy (10-15 min)

Escolha UMA das opções:

### Opção A: Netlify (Recomendado - Mais Fácil)

#### Método Drag & Drop
- [ ] Execute: `npm run build`
- [ ] Verifique se a pasta `dist` foi criada
- [ ] Acesse: https://app.netlify.com/drop
- [ ] Arraste a pasta `dist` para o site
- [ ] Aguarde o upload
- [ ] Copie o link gerado (ex: `https://random-name.netlify.app`)
- [ ] Teste o link no navegador
- [ ] (Opcional) Personalize o nome do site nas configurações

#### Método CLI
- [ ] Instale: `npm install -g netlify-cli`
- [ ] Execute: `npm run build`
- [ ] Execute: `netlify deploy --prod`
- [ ] Siga as instruções na tela
- [ ] Copie o link gerado

### Opção B: Vercel
- [ ] Instale: `npm install -g vercel`
- [ ] Execute: `vercel`
- [ ] Siga as instruções
- [ ] Execute: `vercel --prod`
- [ ] Copie o link gerado

### Opção C: Firebase Hosting
- [ ] Instale: `npm install -g firebase-tools`
- [ ] Execute: `firebase login`
- [ ] Execute: `firebase init hosting`
- [ ] Public directory: `dist`
- [ ] Single-page app: `Yes`
- [ ] Execute: `npm run build`
- [ ] Execute: `firebase deploy --only hosting`
- [ ] Copie o link gerado

## 👨‍👩‍👧‍👦 FASE 7: Compartilhar com Família (5 min)

- [ ] **Link salvo/anotado**
  - Exemplo: `https://lista-compras-familia.netlify.app`
  
- [ ] **Teste final do link**
  - Abra em modo anônimo/privado
  - Adicione um item
  - Verifique se salva

- [ ] **Link compartilhado**
  - WhatsApp
  - E-mail
  - SMS
  - Ou outro método

- [ ] **Instruções enviadas**
  - "Abra este link no celular"
  - "No navegador, vá em Menu → Adicionar à tela inicial"
  - "Use para criar nossa lista de compras!"

- [ ] **Confirmação de recebimento**
  - Pelo menos 1 familiar confirmou que conseguiu acessar

## 🎉 FASE 8: Teste em Produção (5 min)

- [ ] **Família testou o app**
  
- [ ] **Sincronização funcionando**
  - Você adiciona um item
  - Outra pessoa vê aparecer
  - E vice-versa

- [ ] **Instalado na tela inicial**
  - Você instalou
  - Pelo menos 1 familiar instalou

- [ ] **Funcionalidades testadas**
  - Adicionar item ✅
  - Marcar como comprado ✅
  - Excluir item ✅
  - Limpar comprados ✅

## 📊 Resumo Final

Total de tarefas: ~50
Tempo estimado: 45-60 minutos

### ✅ Sucesso quando:
- [ ] App funcionando localmente
- [ ] App online e acessível
- [ ] Família consegue usar
- [ ] Sincronização funcionando
- [ ] Instalado no celular

---

## 🆘 Se Algo Der Errado

### Problema: npm não funciona
→ Instale Node.js: https://nodejs.org/

### Problema: Firebase não sincroniza
→ Revise `src/firebase.js`
→ Verifique as regras do Realtime Database
→ Abra o Console do navegador (F12) para ver erros

### Problema: Deploy não funciona
→ Tente outro serviço (Netlify, Vercel, Firebase)
→ Verifique se executou `npm run build`
→ Confirme que a pasta `dist` existe

### Problema: App não abre no celular
→ Verifique a conexão com internet
→ Tente limpar o cache do navegador
→ Use outro navegador (Chrome, Safari)

---

## 🎯 Meta de Hoje

- [ ] ✅ Completar TODAS as fases acima
- [ ] 📱 App instalado no seu celular
- [ ] 👨‍👩‍👧‍👦 Família usando o app
- [ ] 🎉 Fazer a primeira compra usando o app!

---

## 📈 Próximos Passos (Opcional)

Depois que tudo estiver funcionando:

- [ ] Adicionar senha para mais segurança
- [ ] Personalizar cores/tema
- [ ] Criar múltiplas listas
- [ ] Adicionar categorias de produtos
- [ ] Exportar lista para PDF
- [ ] Adicionar preços dos itens

**Quer alguma dessas funcionalidades? É só pedir!**

---

🏆 **Parabéns por chegar até aqui!**

Imprima ou marque este checklist para acompanhar seu progresso.

Boa sorte! 🍀

