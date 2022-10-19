// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAje942FxwQjYHMjd5US3OLGw1KCSfGt-4",
  authDomain: "chat-app-69730.firebaseapp.com",
  projectId: "chat-app-69730",
  storageBucket: "chat-app-69730.appspot.com",
  messagingSenderId: "554441822234",
  appId: "1:554441822234:web:8b167c06b31df5520c41a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
