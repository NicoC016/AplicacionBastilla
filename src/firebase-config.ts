
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDocOUxFQAxtCDxAtfGgzxAyVrrVAX25vw",
    authDomain: "aplicacionbastilla.firebaseapp.com",
    projectId: "aplicacionbastilla",
    storageBucket: "aplicacionbastilla.appspot.com",
    messagingSenderId: "96797717558",
    appId: "1:96797717558:web:0f5cae9be65b9ce1e15497",
    measurementId: "G-0HB6LQ4L92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app);