import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBuIPFfu-uVmsKOO37r1A0cgH9PI03CHyo",
  authDomain: "tasksauthvue2.firebaseapp.com",
  projectId: "tasksauthvue2",
  storageBucket: "tasksauthvue2.appspot.com",
  messagingSenderId: "636915057964",
  appId: "1:636915057964:web:f8c015bc8c35e4cae91889"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }