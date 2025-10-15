import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// ========================================
// CONFIGURAÇÃO DO FIREBASE
// ========================================
//
// PASSO A PASSO:
// 
// 1. Acesse: https://console.firebase.google.com/
// 2. Crie um novo projeto ou selecione um existente
// 3. No menu lateral, clique em "Realtime Database"
// 4. Clique em "Criar banco de dados"
// 5. Escolha uma localização (ex: us-central1)
// 6. Selecione "Iniciar em modo de teste"
// 7. Na aba "Regras", adicione:
//    {
//      "rules": {
//        ".read": true,
//        ".write": true
//      }
//    }
// 8. Clique em "Publicar"
// 9. Vá em Configurações do Projeto (ícone de engrenagem)
// 10. Role até "Seus aplicativos"
// 11. Clique no ícone da Web (</>)
// 12. Registre o app com um nome
// 13. Copie o objeto firebaseConfig
// 14. Cole abaixo substituindo os valores de exemplo
//
// ========================================

const firebaseConfig = {
  apiKey: "AIza...",                                    // Sua API Key
  authDomain: "seu-projeto.firebaseapp.com",            // Seu Auth Domain
  databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com", // Sua Database URL
  projectId: "seu-projeto",                             // Seu Project ID
  storageBucket: "seu-projeto.appspot.com",             // Seu Storage Bucket
  messagingSenderId: "123456789012",                    // Seu Messaging Sender ID
  appId: "1:123456789012:web:abc123def456"              // Seu App ID
};

// ========================================
// NÃO MODIFIQUE ABAIXO DESTA LINHA
// ========================================

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// ========================================
// TROUBLESHOOTING
// ========================================
//
// Erro: "Firebase: Error (auth/invalid-api-key)"
// → Verifique se copiou a apiKey corretamente
//
// Erro: "PERMISSION_DENIED"
// → Verifique as regras do Realtime Database
// → Elas devem permitir leitura e escrita pública
//
// Lista não sincroniza:
// → Verifique sua conexão com internet
// → Abra o Console do navegador (F12) para ver erros
// → Confirme que o databaseURL está correto
//
// ========================================

