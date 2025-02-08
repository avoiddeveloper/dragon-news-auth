// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgbB0kmxzbpCv8Hu4PdF4y0l2srzRPch8",
  authDomain: "dragon-news-auth-f13a7.firebaseapp.com",
  projectId: "dragon-news-auth-f13a7",
  storageBucket: "dragon-news-auth-f13a7.firebasestorage.app",
  messagingSenderId: "740479378756",
  appId: "1:740479378756:web:b345e10b322da2432a2311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;