// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgu2gKQVlDoY_v4CrRIyiDMS4bEnFAQuk",
    authDomain: "tps-project-ce38f.firebaseapp.com",
    projectId: "tps-project-ce38f",
    storageBucket: "tps-project-ce38f.firebasestorage.app",
    messagingSenderId: "822156354151",
    appId: "1:822156354151:web:ea1644f792cdc0d7f4eac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;