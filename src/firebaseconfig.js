import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBzeHJyLMDElQjJXR3IIejj5eg8oTs4s9g",
  authDomain: "slack-clone-c8ed3.firebaseapp.com",
  projectId: "slack-clone-c8ed3",
  storageBucket: "slack-clone-c8ed3.appspot.com",
  messagingSenderId: "744994941503",
  appId: "1:744994941503:web:df01295332f5905da0668a",
};
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase.firestore();
const firebaseAuth = firebase.auth();
const firebaseAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseAuth, firebaseDb, firebaseAuthProvider };
