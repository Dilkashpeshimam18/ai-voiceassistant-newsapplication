import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEvJuwEz9kRqCR9vztLK68rPi-zsE_qDU",
  authDomain: "newsday-io-8bb7d.firebaseapp.com",
  projectId: "newsday-io-8bb7d",
  storageBucket: "newsday-io-8bb7d.appspot.com",
  messagingSenderId: "606730458191",
  appId: "1:606730458191:web:949faf4b34a1016c85063a",
  measurementId: "G-4156V82X1X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
