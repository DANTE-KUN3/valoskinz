// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyDNroX4br8phD7S0STyFmD5k3qaRzqmeWo",
  authDomain: "original-mason-401414.firebaseapp.com",
  projectId: "original-mason-401414",
  storageBucket: "original-mason-401414.appspot.com",
  messagingSenderId: "340793844621",
  appId: "1:340793844621:web:9fe1f1e084e0b9fcf1d3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const google= new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage=getStorage(app);
