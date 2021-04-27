import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7Jhck7fnk8S7v0wNE1TmKM5NHJ_m2V2I",
    authDomain: "forksgetter.firebaseapp.com",
    projectId: "forksgetter",
    storageBucket: "forksgetter.appspot.com",
    messagingSenderId: "712729073617",
    appId: "1:712729073617:web:30128af3f92f4c174ab2f0",
    measurementId: "G-2316H8C0QP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;