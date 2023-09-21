// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB3DnqQP6RBawSi6wv5fBrw4Lgq15EmUZg',
    authDomain: 'bestchoice-clone-project.firebaseapp.com',
    projectId: 'bestchoice-clone-project',
    storageBucket: 'bestchoice-clone-project.appspot.com',
    messagingSenderId: '62634673959',
    appId: '1:62634673959:web:7f6ab8abf5b8cc61a44b02',
    measurementId: 'G-FJECRENW4X',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
