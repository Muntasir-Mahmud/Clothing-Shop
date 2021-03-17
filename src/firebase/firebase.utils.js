import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLzeNe1m_1eV4-4pER_d74wW69Ty4KyFA",
  authDomain: "clothing-shop-2.firebaseapp.com",
  projectId: "clothing-shop-2",
  storageBucket: "clothing-shop-2.appspot.com",
  messagingSenderId: "232245028126",
  appId: "1:232245028126:web:ad833523e3be3af835150f",
  measurementId: "G-CY6YRW89PJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
