import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKnVHMXtbNcAGrHxeubMrJEAMyaI6y7po",
  authDomain: "chat-react-8994e.firebaseapp.com",
  projectId: "chat-react-8994e",
  storageBucket: "chat-react-8994e.appspot.com",
  messagingSenderId: "203304865600",
  appId: "1:203304865600:web:c0113089a841ee21c5b4a5",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
