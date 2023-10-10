import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_qMc9G_nYSS59j3xWIDZrIn5p-MdJ4g4",
  authDomain: "cardealer-8e456.firebaseapp.com",
  projectId: "cardealer-8e456",
  storageBucket: "cardealer-8e456.appspot.com",
  messagingSenderId: "665729213010",
  appId: "1:665729213010:web:17e8f612320140c06ef58b",
  measurementId: "G-GVZ8DL44TV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);
