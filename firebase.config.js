// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA26DSGJ4ihgXBdqIQWU4MGK7nqwycg_6I",
  authDomain: "my-portfolio-f8f09.firebaseapp.com",
  projectId: "my-portfolio-f8f09",
  storageBucket: "my-portfolio-f8f09.appspot.com",
  messagingSenderId: "510995468034",
  appId: "1:510995468034:web:342e48e8431ce2caa33c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;