import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvnOOKmP1mdp07vrgSqM1W0FVaslX1ac4",
    authDomain: "abigtech-c2f76.firebaseapp.com",
    projectId: "abigtech-c2f76",
    storageBucket: "abigtech-c2f76.firebasestorage.app",
    messagingSenderId: "980839140417",
    appId: "1:980839140417:web:8811e7e421486bf8578ac0",
    measurementId: "G-SMYH828BH3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
