import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import admin from "firebase-admin/app"

const firebaseConfig = {
  apiKey: "AIzaSyCyHE0ruGi6WoAJ1sZxfqwpmd_NF1Drf9U",
  authDomain: "solvo-weather.firebaseapp.com",
  projectId: "solvo-weather",
  storageBucket: "solvo-weather.appspot.com",
  messagingSenderId: "73202642790",
  appId: "1:73202642790:web:cddfb55d89eb071e9662a7",
  measurementId: "G-1H18MTL0DC"
}

const adminConfig = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)