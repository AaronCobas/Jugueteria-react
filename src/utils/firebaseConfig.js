// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW970yhMmmkr0OBPUfNGckPn_pTL_PUK0",
  authDomain: "jugueteria-d415e.firebaseapp.com",
  projectId: "jugueteria-d415e",
  storageBucket: "jugueteria-d415e.appspot.com",
  messagingSenderId: "956252971349",
  appId: "1:956252971349:web:2b8cbbc65604e61de20fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);