// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Auth imports
import fs from "fs"; // File system module to read files
import path from "path"; // Path module for handling file paths
import { fileURLToPath } from "url"; // For getting the current module's URL
import { dirname } from "path"; // To get the directory name

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

// Get the current module's file name and directory name
const __filename = fileURLToPath(import.meta.url); // Gets the full path of the current file
const __dirname = dirname(__filename); // Gets the directory name from the file path

// Path to your JSON file
const jsonFilePath = path.join(__dirname, './disneyPlusMoviesData.json');

// Read and parse JSON file
fs.readFile(jsonFilePath, 'utf8', async (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        const movies = JSON.parse(data); // Parse JSON data

        // Loop through each movie and upload to Firestore
        for (const movie of movies) {
            await addDoc(collection(db, "movies"), movie);
            console.log("Uploaded:", movie);
        }

        console.log("All movies uploaded successfully.");
    } catch (error) {
        console.error("Error uploading movies:", error);
    }
});

// Export the services for use in your app
export { app, db, auth, provider };
