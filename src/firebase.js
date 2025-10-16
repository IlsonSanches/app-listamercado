import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuração do Firebase usando variáveis de ambiente
// As credenciais ficam seguras no arquivo .env (que não é commitado no Git)
// Para configurar:
// 1. Crie um arquivo .env na raiz do projeto
// 2. Acesse https://console.firebase.google.com/
// 3. Obtenha suas credenciais do Firebase Console
// 4. Cole as credenciais no arquivo .env (use .env.example como referência)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Validação para garantir que as variáveis foram configuradas
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  throw new Error(
    "Configuração do Firebase não encontrada! " +
      "Certifique-se de ter criado o arquivo .env com suas credenciais. " +
      "Use o arquivo .env.example como referência."
  );
}

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
