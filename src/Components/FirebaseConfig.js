import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk_p49WouBvTfSLv-I3v9Lw8JSeMf04mU",
  authDomain: "navana-real-estate-965a9.firebaseapp.com",
  projectId: "navana-real-estate-965a9",
  storageBucket: "navana-real-estate-965a9.appspot.com",
  messagingSenderId: "475158999709",
  appId: "1:475158999709:web:d99cbe87b50396ba475a74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
