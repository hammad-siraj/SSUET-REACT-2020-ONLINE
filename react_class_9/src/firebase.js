// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  // add your firebase project config
};

firebase.initializeApp(firebaseConfig);

export const Db = firebase.database().ref("articles");
