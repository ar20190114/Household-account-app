import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAQz4cnYskR4H89vCnGV16RiJGsjdSRiY",
  authDomain: "household-account-app.firebaseapp.com",
  projectId: "household-account-app",
  storageBucket: "household-account-app.appspot.com",
  messagingSenderId: "93978572597",
  appId: "1:93978572597:web:88ffdb1e70b454634dbe7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
