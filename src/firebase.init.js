// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMTL4v4JAd7_BlX1H_O2QIGMUg6NKO3nM",
  authDomain: "carsmoto-eefc3.firebaseapp.com",
  projectId: "carsmoto-eefc3",
  storageBucket: "carsmoto-eefc3.appspot.com",
  messagingSenderId: "869255409847",
  appId: "1:869255409847:web:bdd800a165c11c4dc01d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;