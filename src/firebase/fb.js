// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4zfVE92mcx0yMCbHl0shrU3cg9pzzG5c",
  authDomain: "ega-website-f3bbe.firebaseapp.com",
  projectId: "ega-website-f3bbe",
  storageBucket: "ega-website-f3bbe.appspot.com",
  messagingSenderId: "484385613908",
  appId: "1:484385613908:web:7f38bfca47844e0cf5a5c1",
  measurementId: "G-8MW7BM0D1B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});