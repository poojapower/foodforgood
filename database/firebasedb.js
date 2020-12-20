import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYtWQRGEcq814SkzJnc-i1Empf9ICrmVw",
  authDomain: "foodforgood-d557f.firebaseapp.com",
  projectId: "foodforgood-d557f",
  storageBucket: "foodforgood-d557f.appspot.com",
  messagingSenderId: "69174458195",
  appId: "1:69174458195:web:c2f04ded3502a9f08513a6",
  measurementId: "G-GL6L1FJR7E"
};

// Initialize Firebase
const firebasedb= firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const appdb=firebasedb.database();

export default {
  firebasedb,
  db,
  appdb,
};