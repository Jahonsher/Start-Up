import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfGm1DXQU_tt7jHaOmukSKmLH24gstGg4",
  authDomain: "aqso-tour.firebaseapp.com",
  projectId: "aqso-tour",
  storageBucket: "aqso-tour.firebasestorage.ap",
  messagingSenderId: "945206371014",
  appId: "1:945206371014:web:de0b35c4b210e5b51badc7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);