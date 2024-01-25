// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClLZqea1a_8BzZfqNGIgukk1yTxNrtl8U",
  authDomain: "quickeats-888d4.firebaseapp.com",
  projectId: "quickeats-888d4",
  storageBucket: "quickeats-888d4.appspot.com",
  messagingSenderId: "1041706339804",
  appId: "1:1041706339804:web:2b3b4b47c4592196791319",
  measurementId: "G-MXB364BG8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);