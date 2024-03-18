// Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3WuslGyWt8fDZA1HDg4kRa6iZuVDDACY",
  authDomain: "hungry-hero-34f4e.firebaseapp.com",
  projectId: "hungry-hero-34f4e",
  storageBucket: "hungry-hero-34f4e.appspot.com",
  messagingSenderId: "193302581497",
  appId: "1:193302581497:web:a53c8774f5bbeaff335228"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { app, provider, auth }; // Export Firebase objects
