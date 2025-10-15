# ❓ Perguntas Frequentes (FAQ)

## 🔧 Instalação e Configuração

### Preciso saber programar para usar?
Não! Basta seguir o passo a passo do arquivo `INICIO-RAPIDO.md`. Você só precisa copiar e colar alguns comandos.

### Quanto custa?
**Totalmente gratuito!** 
- Node.js: Grátis
- Firebase: Grátis até 100 conexões simultâneas e 1GB de dados
- Hospedagem (Netlify/Vercel): Grátis

Para uso familiar, você nunca precisará pagar nada.

### Preciso de um servidor?
Não! O Firebase já é seu "servidor na nuvem". Você só precisa fazer o deploy do app.

### Funciona no iPhone e Android?
Sim! Funciona em qualquer celular com navegador web moderno.

### Precisa de internet?
- **Para adicionar/editar**: Sim (mas o app tenta sincronizar quando voltar online)
- **Para visualizar**: Não (o app salva os dados localmente)

## 📱 Uso do App

### Como adiciono um item?
1. Digite o nome do item no campo "Digite o item..."
2. Ajuste a quantidade (padrão é 1)
3. Clique no botão verde com "+"

### Como marco como comprado?
Basta clicar no item ou no checkbox. Ele ficará riscado e irá para o fim da lista.

### Como excluo um item?
Clique no "X" vermelho ao lado do item.

### Como limpo a lista após as compras?
Clique no botão "🗑️ Limpar itens comprados" no final da lista.

### Posso adicionar o mesmo item duas vezes?
Sim! Mas é melhor aumentar a quantidade do item existente.

### Posso editar um item depois de adicionar?
Não diretamente. Você precisa excluir e adicionar novamente. (Posso adicionar essa funcionalidade se quiser!)

## 👨‍👩‍👧‍👦 Compartilhamento Familiar

### Como compartilho com minha família?
1. Faça o deploy do app (veja `DEPLOY.md`)
2. Copie o link (ex: `https://seu-app.netlify.app`)
3. Envie via WhatsApp/Email para seus familiares

### Todos veem as mesmas informações?
Sim! Quando alguém adiciona, edita ou remove um item, todos veem instantaneamente.

### Quantas pessoas podem usar ao mesmo tempo?
Até 100 pessoas simultâneas (mais que suficiente para família!)

### E se duas pessoas adicionarem o mesmo item?
Ambos os itens serão adicionados. Alguém pode excluir a duplicata depois.

### Posso criar várias listas (ex: supermercado, feira, farmácia)?
Na versão atual, há apenas uma lista compartilhada. Se quiser múltiplas listas, posso modificar o código!

## 🔒 Segurança e Privacidade

### Meus dados estão seguros?
Os dados ficam no Firebase (Google), que é muito seguro. Porém, qualquer pessoa com o link pode acessar.

### Outras pessoas podem ver minha lista?
Somente quem tiver o link do app. Não compartilhe publicamente.

### Como adiciono senha?
Veja a seção "Segurança Opcional" no `README.md` ou me avise que configuro para você.

### Posso ter uma lista privada só minha?
Sim! Você pode criar outro projeto Firebase só seu, ou posso adicionar suporte a múltiplas listas com senhas.

## 🚀 Deploy e Hospedagem

### Qual serviço de hospedagem é melhor?
**Recomendo Netlify** pela facilidade. Mas Vercel e Firebase Hosting também são ótimos.

### Posso mudar o nome do link?
Sim! Na maioria dos serviços, você pode personalizar o nome do site nas configurações.

### Preciso pagar hospedagem?
Não! Netlify, Vercel e Firebase Hosting têm planos gratuitos mais que suficientes.

### Como atualizo o app depois de fazer mudanças?
Execute `npm run build` e faça novo deploy. Veja detalhes em `DEPLOY.md`.

## 🛠️ Problemas Técnicos

### "npm não é reconhecido"
→ Instale o Node.js: https://nodejs.org/

### "PERMISSION_DENIED" no Firebase
→ Verifique as regras do Realtime Database. Elas devem estar como:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Lista não sincroniza entre dispositivos
→ Verifique se:
- Configurou o Firebase corretamente
- Todos estão acessando o mesmo link
- Tem conexão com internet
- Não há erros no Console do navegador (F12)

### App não carrega no celular
→ Verifique se:
- O link está correto
- Tem internet no celular
- O navegador é atualizado
- Tente limpar o cache do navegador

### Itens desaparecem sozinhos
→ Verifique se outra pessoa não está excluindo
→ Veja se há erros no Console (F12)

### App está lento
→ Pode ser conexão com internet lenta
→ O Firebase tem limite de leitura/escrita (improvável em uso familiar)

## 💡 Personalizações

### Posso mudar as cores?
Sim! Edite os arquivos CSS em `src/components/`. O verde principal é `#4CAF50`.

### Posso mudar o nome "Lista de Compras"?
Sim! Edite:
- `index.html` (tag `<title>`)
- `src/components/Header.jsx` (tag `<h1>`)
- `vite.config.js` (manifest.name)

### Posso adicionar categorias aos itens?
Sim! Mas precisaria modificar o código. Me avise se quiser!

### Posso adicionar fotos aos itens?
Sim! Mas precisaria adicionar Firebase Storage. Me avise se quiser!

### Posso exportar a lista para PDF?
Não na versão atual, mas posso adicionar essa funcionalidade!

## 📊 Funcionalidades Extras (posso adicionar!)

Quer alguma dessas funcionalidades? É só pedir!

- [ ] Múltiplas listas (supermercado, feira, farmácia)
- [ ] Categorias de produtos
- [ ] Histórico de compras
- [ ] Exportar lista (PDF, texto)
- [ ] Sugestões de itens frequentes
- [ ] Preço dos itens
- [ ] Total da compra
- [ ] Modo escuro
- [ ] Autenticação com senha
- [ ] Notificações push
- [ ] Listas recorrentes (toda semana)

## 📞 Ainda tem dúvidas?

Se sua pergunta não está aqui, pode me perguntar diretamente!

Inclua:
- O que você tentou fazer
- O que aconteceu
- Mensagem de erro (se houver)
- Prints de tela (se possível)

---

📚 **Mais informações**:
- `INICIO-RAPIDO.md` - Como começar
- `README.md` - Documentação completa
- `DEPLOY.md` - Como colocar online

