// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6EJ5vCZobIXDM6BUCIq3lxCvP0RoxV6k",
  authDomain: "crypto-pwa-151b7.firebaseapp.com",
  projectId: "crypto-pwa-151b7",
  storageBucket: "crypto-pwa-151b7.appspot.com",
  messagingSenderId: "412192815150",
  appId: "1:412192815150:web:3cf3ebb61f5554f1b047bf",
  measurementId: "G-E21Z4T6SP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);