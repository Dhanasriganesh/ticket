import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyAWkua5fkeauCWeCXNjMG02-4Bu66Q5ILc",
  authDomain: "emp-login-3dd3c.firebaseapp.com",
  projectId: "emp-login-3dd3c",
  storageBucket: "emp-login-3dd3c.appspot.com",
  messagingSenderId: "679178333432",
  appId: "1:679178333432:web:f44efc4a6b5766154c1f0d",
  measurementId: "G-YGEVWRS83Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);