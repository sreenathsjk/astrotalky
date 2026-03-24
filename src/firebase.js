import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyCMcu_iTxeweljHGn5EiZTwms0eH_iLj3Y",
  authDomain: "astrotalki-a75ea.firebaseapp.com",
  projectId: "astrotalki-a75ea",
  storageBucket: "astrotalki-a75ea.firebasestorage.app",
  messagingSenderId: "849861088684",
  appId: "1:849861088684:web:9b3e0d6540478f2121d609"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
