
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWxcwmA0wBiAFyVwwJiAYuT4vg1PQZQSo",
  authDomain: "zera-coder.firebaseapp.com",
  projectId: "zera-coder",
  storageBucket: "zera-coder.appspot.com",
  messagingSenderId: "1001881213249",
  appId: "1:1001881213249:web:04cf6dba6747eb70dd69c0"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);