import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-5oaQhZ6NbExcYe65m5BNdaJhPLOSV3w",
    authDomain: "react-todo-67ad5.firebaseapp.com",
    projectId: "react-todo-67ad5",
    storageBucket: "react-todo-67ad5.appspot.com",
    messagingSenderId: "62633775580",
    appId: "1:62633775580:web:ec6af04e3d378440fa3f19",
    measurementId: "G-WZ2BHE7KKV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;