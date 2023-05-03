// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiLIqrwaf2vdKw4__3YCiAofYWKLjgKLc",
  authDomain: "ema-john-69144.firebaseapp.com",
  projectId: "ema-john-69144",
  storageBucket: "ema-john-69144.appspot.com",
  messagingSenderId: "251430976796",
  appId: "1:251430976796:web:e4e3a19af64f23a8d30ed9",
  measurementId: "G-LXSW27S8CX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
