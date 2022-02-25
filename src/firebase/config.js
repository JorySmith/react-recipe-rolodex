import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB2Mxi4s12tLUSra7ZnP1CasDMGxuvqLDo",
    authDomain: "react-recipe-rolodex.firebaseapp.com",
    projectId: "react-recipe-rolodex",
    storageBucket: "react-recipe-rolodex.appspot.com",
    messagingSenderId: "498877834555",
    appId: "1:498877834555:web:9334a9ece65a14f867431e"
};

// Initialize firebase with above variable
firebase.initializeApp(firebaseConfig)

// Initialize services: firestore
const projectFirestore = firebase.firestore()

// Export db service
export { projectFirestore }