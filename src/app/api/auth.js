
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOfSo2b8yYfbNKWC-twrMw58fLfp2YkU",
  authDomain: "savi-9ff5d.firebaseapp.com",
  projectId: "savi-9ff5d",
  storageBucket: "savi-9ff5d.firebasestorage.app",
  messagingSenderId: "1012970602630",
  appId: "1:1012970602630:web:d3df16f30908eddd371107",
  measurementId: "G-HX0EF10DFT"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
