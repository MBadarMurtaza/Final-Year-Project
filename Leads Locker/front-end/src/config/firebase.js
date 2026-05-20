// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo5_ZxVnEWXy9fDaRnXzYJWUgrI8Dlqzo",
  authDomain: "leads-locker.firebaseapp.com",
  projectId: "leads-locker",
  storageBucket: "leads-locker.firebasestorage.app",
  messagingSenderId: "1075874618496",
  appId: "1:1075874618496:web:e49f4d9f94d517ead71a65",
  measurementId: "G-68ZL2XTLJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. Initialize and Export Auth Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
