import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLsXAb5wTlbKzGEhdpW31yRDPCcuggHoc",
  authDomain: "social-tut-1a6e5.firebaseapp.com",
  projectId: "social-tut-1a6e5",
  storageBucket: "social-tut-1a6e5.appspot.com",
  messagingSenderId: "496884592213",
  appId: "1:496884592213:web:c27681e36db58ec4e8aedc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// db
export const db = getFirestore();
export const storage = getStorage();
