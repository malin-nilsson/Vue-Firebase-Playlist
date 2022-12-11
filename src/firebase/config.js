import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
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
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
