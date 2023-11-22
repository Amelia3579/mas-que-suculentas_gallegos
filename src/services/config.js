import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mas-que-suculentas.firebaseapp.com",
  projectId: "mas-que-suculentas",
  storageBucket: "mas-que-suculentas.appspot.com",
  messagingSenderId: "1079617174279",
  appId: "1:1079617174279:web:c8893984bfbcb62282a3a2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// "AIzaSyBNbES-ycog2rOxqJmZ-cEa36wdjplU908"