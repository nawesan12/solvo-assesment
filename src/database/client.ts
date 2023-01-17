import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCyHE0ruGi6WoAJ1sZxfqwpmd_NF1Drf9U",
  authDomain: "solvo-weather.firebaseapp.com",
  projectId: "solvo-weather",
  storageBucket: "solvo-weather.appspot.com",
  messagingSenderId: "73202642790",
  appId: "1:73202642790:web:cddfb55d89eb071e9662a7",
  measurementId: "G-1H18MTL0DC"
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)