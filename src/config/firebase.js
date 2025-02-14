
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdICwnI1RftEQ-EoTTB7wVOioYZuyzDS4",
    authDomain: "proyecto-final-react-8dff4.firebaseapp.com",
    projectId: "proyecto-final-react-8dff4",
    storageBucket: "proyecto-final-react-8dff4.firebasestorage.app",
    messagingSenderId: "602233298308",
    appId: "1:602233298308:web:b127b45f96dd21676dd1d1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);