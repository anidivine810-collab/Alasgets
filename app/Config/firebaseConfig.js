// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuzW2la86JIGrjc8SWbH4owkYXmfuoE5g",
  authDomain: "alasgets-e8c23.firebaseapp.com",
  projectId: "alasgets-e8c23",
  storageBucket: "alasgets-e8c23.firebasestorage.app",
  messagingSenderId: "374925079933",
  appId: "1:374925079933:web:51c360a8c1689be9690814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}