import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyANP5AfrrMRQ9Z3K3BO3H6_hvrPXnMpHy0',
  authDomain: 'vue-playlist-6ef86.firebaseapp.com',
  projectId: 'vue-playlist-6ef86',
  storageBucket: 'vue-playlist-6ef86.appspot.com',
  messagingSenderId: '1076309278569',
  appId: '1:1076309278569:web:2b5986378a0e2b589b87f8',
}

// init firestore
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
