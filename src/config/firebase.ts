// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDNBGACzF08f2BnFUCWJS5xtgnHUNPSnOM',
  authDomain: 'goat-pad.firebaseapp.com',
  projectId: 'goat-pad',
  storageBucket: 'goat-pad.appspot.com',
  messagingSenderId: '390770819378',
  appId: '1:390770819378:web:c2b8561137a05807cb972b',
  measurementId: 'G-ZCX7K31E0W',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
}
