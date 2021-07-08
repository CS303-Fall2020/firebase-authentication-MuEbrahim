 import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEQdvRGLVEKb3wS3YQHya-m2BgMEhzimw",
    authDomain: "todolist-3e8ab.firebaseapp.com",
    databaseURL: "https://todolist-3e8ab.firebaseio.com",
    projectId: "todolist-3e8ab",
    storageBucket: "todolist-3e8ab.appspot.com",
    messagingSenderId: "539159995216",
    appId: "1:539159995216:web:f38ac2521a0aa4dbcdc255",
    measurementId: "G-7WCL2C8PKH"
}

firebase.initializeApp(firebaseConfig);

const database = firebase.auth()

export default database;