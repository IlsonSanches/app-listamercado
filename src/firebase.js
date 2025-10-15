import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Configuração do Firebase
// IMPORTANTE: Substitua estas credenciais pelas suas próprias do Firebase Console
// 1. Acesse https://console.firebase.google.com/
// 2. Crie um novo projeto
// 3. Vá em "Realtime Database" e crie um database
// 4. Em "Regras", configure para permitir leitura/escrita (para uso familiar):
//    {
//      "rules": {
//        ".read": true,
//        ".write": true
//      }
//    }
// 5. Copie suas credenciais abaixo

const firebaseConfig = {
    apiKey: "AIzaSyAJPa6uS_20VTR6uKvdWQ1TxeCKQ4oW2uQ",
    authDomain: "lista-de-mercado-6ca8a.firebaseapp.com",
    databaseURL: "https://lista-de-mercado-6ca8a-default-rtdb.firebaseio.com",
    projectId: "lista-de-mercado-6ca8a",
    storageBucket: "lista-de-mercado-6ca8a.firebasestorage.app",
    messagingSenderId: "209414098689",
    appId: "1:209414098689:web:22389491d89b3729b71500",
    measurementId: "G-H3XXZWNXZP"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

