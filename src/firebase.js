// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore import
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Auth imports

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8aqAIEr74yLSmrUtuELUUb62taobie5Q",
    authDomain: "disney-plus-e1786.firebaseapp.com",
    projectId: "disney-plus-e1786",
    storageBucket: "disney-plus-e1786.appspot.com",
    messagingSenderId: "141901220072",
    appId: "1:141901220072:web:805791258cf7653ecfe15d",
    measurementId: "G-VDBMTDZ4R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Auth instance
const provider = new GoogleAuthProvider(); // Google Auth provider

// Export the services for use in your app
export { app, db, auth, provider };







