// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUgpm7j02KARUsGBsFEEWWId3EQD4x8y0",
  authDomain: "my-portfolio-8cdd6.firebaseapp.com",
  projectId: "my-portfolio-8cdd6",
  storageBucket: "my-portfolio-8cdd6.appspot.com",
  messagingSenderId: "602843083426",
  appId: "1:602843083426:web:19bb47e2c6946c21541dfb",
  measurementId: "G-QKFMX8KW31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);