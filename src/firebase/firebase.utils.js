import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyClloj_-d4GMU60tE33PDA367MtoSSvlXA",
  authDomain: "crwn-clothing-db-14267.firebaseapp.com",
  projectId: "crwn-clothing-db-14267",
  storageBucket: "crwn-clothing-db-14267.appspot.com",
  messagingSenderId: "4581890051",
  appId: "1:4581890051:web:500b93553eac0b2421d636",
  measurementId: "G-KXVW20G512",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
