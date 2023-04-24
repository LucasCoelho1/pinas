import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHpjGk-WOcqUrT3lVYCMzVYMoA6MmuYrI",
  authDomain: "pinas-60a33.firebaseapp.com",
  projectId: "pinas-60a33",
  storageBucket: "pinas-60a33.appspot.com",
  messagingSenderId: "87405383413",
  appId: "1:87405383413:web:39603867786062ea657fbc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app }
