// firebase/firebase-config.js

import firebase from 'firebase/app';
import 'firebase/auth';  // Si vas a usar autenticación
import 'firebase/firestore';  // Si vas a usar Firestore
import 'firebase/storage';  // Si vas a usar Firebase Storage

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Inicializa Firebase solo si no ha sido inicializado antes
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
