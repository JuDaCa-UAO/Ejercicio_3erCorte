// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3xHfL8s4TgbR2PovbW7l3dQ5hvJXNm5c",
  authDomain: "proyecto-2024.firebaseapp.com",
  projectId: "proyecto-2024",
  storageBucket: "proyecto-2024.appspot.com",
  messagingSenderId: "543210987654",
  appId: "1:543210987654:web:adfa0b2c4d5678e9012345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
