import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// INITIALIZE
export default firebase
  .initializeApp({
    apiKey: "AIzaSyALcqqu9aCOXsV5JfA_laL5xQjUp3j3rTI",
    authDomain: "master-clients.firebaseapp.com",
    databaseURL: "https://master-clients.firebaseio.com",
    projectId: "master-clients",
    storageBucket: "master-clients.appspot.com",
    messagingSenderId: "844618249232",
    appId: "1:844618249232:web:9efbd858b033224475c695",
    measurementId: "G-DXM1DW8BG3",
  })
  .analytics();

export const db = firebase.firestore();
