import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU7pPoeRbp01gkCa0G53UHo5mE6s7q8XU",
  authDomain: "resume-builder-7c9a7.firebaseapp.com",
  projectId: "resume-builder-7c9a7",
  storageBucket: "resume-builder-7c9a7.appspot.com",
  messagingSenderId: "943023233634",
  appId: "1:943023233634:web:4ce66548994d09a9518f3b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
