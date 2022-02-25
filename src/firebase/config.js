import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    
};

// Initialize firebase with above variable
firebase.initializeApp(firebaseConfig)

// Initialize services: firestore
const projectFirestore = firebase.firestore()

// Export db service
export { projectFirestore }