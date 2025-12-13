// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfGm1DXQU_tt7jHaOmukSKmLH24gstGg4",
  authDomain: "aqso-tour.firebaseapp.com",
  projectId: "aqso-tour",
  storageBucket: "aqso-tour.firebasestorage.app",
  messagingSenderId: "945206371014",
  appId: "1:945206371014:web:de0b35c4b210e5b51badc7",
  measurementId: "G-10NZHGMKZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);