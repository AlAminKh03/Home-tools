// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAKZ5YR_1C1nd7ROEMsqy-vFLp1bjQNNI",
    authDomain: "home-tools-ee461.firebaseapp.com",
    projectId: "home-tools-ee461",
    storageBucket: "home-tools-ee461.appspot.com",
    messagingSenderId: "247908646326",
    appId: "1:247908646326:web:15f10cba2080008cfc1517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;