import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXaHkcCVjHJc9L8oe6iupr-tdtda8x1MU",
    authDomain: "twitter-clone-fa548.firebaseapp.com",
    projectId: "twitter-clone-fa548",
    storageBucket: "twitter-clone-fa548.appspot.com",
    messagingSenderId: "156094167864",
    appId: "1:156094167864:web:884091da4a3eac59745fcd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;