import firebase from "firebase";

const Config = {
    apiKey: "AIzaSyAARYq-wSDNI0V5ftNwAyCkYC2KrF-DSpQ",
    authDomain: "fb-clone-e7e2b.firebaseapp.com",
    databaseURL: "https://fb-clone-e7e2b.firebaseio.com",
    projectId: "fb-clone-e7e2b",
    storageBucket: "fb-clone-e7e2b.appspot.com",
    messagingSenderId: "508569741892",
    appId: "1:508569741892:web:d849d7706570abdb9aea11",
    measurementId: "G-3ZX3152DGH"
  };

  const firebaseApp = firebase.initializeApp(Config);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;
