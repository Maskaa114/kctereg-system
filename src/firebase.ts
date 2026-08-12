import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBETTGDjHl9d_RzzVi6H8cuN1-13pWks38",
  authDomain: "kcte-grades.firebaseapp.com",
  projectId: "kcte-grades",
  storageBucket: "kcte-grades.firebasestorage.app",
  messagingSenderId: "307467646627",
  appId: "1:307467646627:web:fde5b539f3e8e0229ab116"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
