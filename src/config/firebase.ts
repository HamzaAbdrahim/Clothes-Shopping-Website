// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqIMKIIIzN8r_AIvzK_R77B6RFIKzrpts",
  authDomain: "clothes-shopping-website.firebaseapp.com",
  projectId: "clothes-shopping-website",
  storageBucket: "clothes-shopping-website.appspot.com",
  messagingSenderId: "500615091335",
  appId: "1:500615091335:web:94a09e7d60ab3d6ea19422"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);