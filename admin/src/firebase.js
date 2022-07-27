// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKX5BAmmEuOIe96ozV3mxaE7tSTy0oLGs",
    authDomain: "shop-9147c.firebaseapp.com",
    projectId: "shop-9147c",
    storageBucket: "shop-9147c.appspot.com",
    messagingSenderId: "1034981818817",
    appId: "1:1034981818817:web:62a48558258c0207ee2f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app