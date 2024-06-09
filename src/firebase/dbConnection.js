// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHtzehJsL8HKRJJ7CJpoYQa4GXOweheZs",
  authDomain: "villarashop-ce55b.firebaseapp.com",
  projectId: "villarashop-ce55b",
  storageBucket: "villarashop-ce55b.appspot.com",
  messagingSenderId: "566196320330",
  appId: "1:566196320330:web:faa117b61fb89d06938eb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)