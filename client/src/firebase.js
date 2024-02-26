// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatepro-49b7d.firebaseapp.com",
  projectId: "estatepro-49b7d",
  storageBucket: "estatepro-49b7d.appspot.com",
  messagingSenderId: "63101921173",
  appId: "1:63101921173:web:458afb0560b8f6c6c7f89c",
  measurementId: "G-3R6PR9DQH7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);