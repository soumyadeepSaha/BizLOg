// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

authDomain: "mern-blog-e1f2f.firebaseapp.com",
  projectId: "mern-blog-e1f2f",
  storageBucket: "mern-blog-e1f2f.appspot.com",
  messagingSenderId: "581478987948",
  appId: "1:581478987948:web:85766756d98ca49bd48709",
  measurementId: "G-2FNL8Q96BM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

