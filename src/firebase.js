import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsBSkO0fN62SGF2k9Zz7J7Yb6uJNy1LxY",
  authDomain: "linkedin-clone-89a01.firebaseapp.com",
  projectId: "linkedin-clone-89a01",
  storageBucket: "linkedin-clone-89a01.appspot.com",
  messagingSenderId: "209682849440",
  appId: "1:209682849440:web:a170f6078811dcb1cdb3c5",
  measurementId: "G-1M2QVZQXHR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
