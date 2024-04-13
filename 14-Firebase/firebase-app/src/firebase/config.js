// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoi38QQBMsYLNBqPeU5gkVYk7qNg5AoX0",
  authDomain: "vue3-d5878.firebaseapp.com",
  projectId: "vue3-d5878",
  storageBucket: "vue3-d5878.appspot.com",
  messagingSenderId: "831082311708",
  appId: "1:831082311708:web:e2fd01950ceae726772fd9"
};

// Initialize Firebase
const FireBase = initializeApp(firebaseConfig);

export {FireBase};