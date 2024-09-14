import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0eb0OZDVRTUm7PHE0o3UYQKilut1Yv4o",
  authDomain: "slack-2-6f567.firebaseapp.com",
  projectId: "slack-2-6f567",
  storageBucket: "slack-2-6f567.appspot.com",
  messagingSenderId: "64084639194",
  appId: "1:64084639194:web:2b6bab1f3f10aee31e54e3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
