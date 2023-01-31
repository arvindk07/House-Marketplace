import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlE4rsZbdSmKsBx7_tknoq3YnYnPhV5Bk",
  authDomain: "house-marketplace-app-2c749.firebaseapp.com",
  projectId: "house-marketplace-app-2c749",
  storageBucket: "house-marketplace-app-2c749.appspot.com",
  messagingSenderId: "251407518913",
  appId: "1:251407518913:web:6d8856ca02f08cb6935840",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
