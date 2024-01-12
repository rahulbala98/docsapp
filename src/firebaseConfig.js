// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpIbO2ojhLeK83T7Ado27-gD7hGWaGdKM",
  authDomain: "docsapp-8a045.firebaseapp.com",
  projectId: "docsapp-8a045",
  storageBucket: "docsapp-8a045.appspot.com",
  messagingSenderId: "229174989462",
  appId: "1:229174989462:web:e177e274f835c81e8d68b7",
  measurementId: "G-625XV04YQ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database= getFirestore(app)
