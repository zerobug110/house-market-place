// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFZSXJdY7I5HYrtWq211io467pOnuA94Q",
  authDomain: "house-marketplace-75685.firebaseapp.com",
  projectId: "house-marketplace-75685",
  storageBucket: "house-marketplace-75685.appspot.com",
  messagingSenderId: "62386318970",
  appId: "1:62386318970:web:b9d1ca3d81711107b055c3",
  measurementId: "G-X0DY5EQH8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
// const analytics = getAnalytics(app);