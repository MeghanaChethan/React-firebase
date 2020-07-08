import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

var firebaseConfig = {
  apiKey: "AIzaSyAO9mj9INQeR9O4N6kUktlqmgC9s3_wrYI",
  authDomain: "sample-react-31edc.firebaseapp.com",
  databaseURL: "https://sample-react-31edc.firebaseio.com",
  projectId: "sample-react-31edc",
  storageBucket: "sample-react-31edc.appspot.com",
  messagingSenderId: "660807972293"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
