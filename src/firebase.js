import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDh_lKI12pyxCrwRqytp_gXQIASEhqXEDY",
  authDomain: "facebook-clone-5cc75.firebaseapp.com",
  projectId: "facebook-clone-5cc75",
  storageBucket: "facebook-clone-5cc75.appspot.com",
  messagingSenderId: "262264933063",
  appId: "1:262264933063:web:f7d2b233958b069d8e0ce2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db