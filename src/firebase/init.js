import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsr51G-tJtzF7DAMFCCZy5YmeXU_ogCpg",
    authDomain: "vuejs-firebase-chat-363d1.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-chat-363d1.firebaseio.com",
    projectId: "vuejs-firebase-chat-363d1",
    storageBucket: "vuejs-firebase-chat-363d1.appspot.com",
    messagingSenderId: "1016350755124"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()