// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhPYYTGYlYriAOEIHmdtrCEI9TcRv9sYk",
  authDomain: "luggagedb.firebaseapp.com",
  projectId: "luggagedb",
  storageBucket: "luggagedb.appspot.com",
  messagingSenderId: "196897417847",
  appId: "1:196897417847:web:17b714053def08c41f7472",
  measurementId: "G-HE0J6HHGLL",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
