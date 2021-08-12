import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // Put the firebase config here!!!
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const profileCollection = db.collection("profile");
const sheepCollection = db.collection("sheep");

export { db, auth, profileCollection, sheepCollection };
