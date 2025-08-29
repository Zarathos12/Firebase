import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDDX8WjQqbiix2QZYq5T6koiJsTOymZl4",
  authDomain: "etecprojeto-e3477.firebaseapp.com",
  projectId: "etecprojeto-e3477",
  storageBucket: "etecprojeto-e3477.firebasestorage.app",
  messagingSenderId: "373636307961",
  appId: "1:373636307961:web:14dd876f5efe4858463b28",
  measurementId: "G-DTXRS4R6SG"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);