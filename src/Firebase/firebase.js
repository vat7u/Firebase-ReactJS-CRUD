// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlWqQNKeMxno2KpeliH5rgCc5VJgUcfOU",
  authDomain: "crud-react-2e455.firebaseapp.com",
  projectId: "crud-react-2e455",
  storageBucket: "crud-react-2e455.appspot.com",
  messagingSenderId: "222468342094",
  appId: "1:222468342094:web:1b8059b916087659f9de1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth();