// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "doc-subir.firebaseapp.com",
  projectId: "doc-subir",
  storageBucket: "doc-subir.appspot.com",
  messagingSenderId: "373596496050",
  appId: "1:373596496050:web:b3150f6eb29af94f44e9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;