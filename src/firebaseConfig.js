import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIO4iIvFsqhV7RWyAhQfCat1zmIsY3N10",
    authDomain: "iq-testing-system.firebaseapp.com",
    projectId: "iq-testing-system",
    storageBucket: "iq-testing-system.firebasestorage.app",
    messagingSenderId: "1063268893949",
    appId: "1:1063268893949:web:9519a93eb087406c362a94"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

export { db };