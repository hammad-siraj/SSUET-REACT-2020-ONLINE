// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC-puZEJvZqRw8z0wzog44DI34C_1qjfAw",
  authDomain: "module-b-crud.firebaseapp.com",
  databaseURL: "https://module-b-crud.firebaseio.com",
  projectId: "module-b-crud",
  storageBucket: "module-b-crud.appspot.com",
  messagingSenderId: "166128298776",
  appId: "1:166128298776:web:d2fdde825cdca1c05e0c6d",
  measurementId: "G-TQC2VJD0QH",
};

firebase.initializeApp(firebaseConfig);

export const Db = firebase.database().ref("articles");
