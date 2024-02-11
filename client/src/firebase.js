// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-15060.firebaseapp.com",
  projectId: "mern-blog-15060",
  storageBucket: "mern-blog-15060.appspot.com",
  messagingSenderId: "436783050837",
  appId: "1:436783050837:web:91346e11e6e1887c86a4dc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
