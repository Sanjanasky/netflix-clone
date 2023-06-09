
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Updated import statement for 'firestore'
import { getStorage } from 'firebase/storage'; // Updated import statement for 'storage'

const firebaseConfig = {
  apiKey: "AIzaSyDM8VM2FZ1DjWyyQKh7-OpRTj_-Qhn87bU",
  authDomain: "disneycolone.firebaseapp.com",
  projectId: "disneycolone",
  storageBucket: "disneycolone.appspot.com",
  messagingSenderId: "1078202439559",
  appId: "1:1078202439559:web:4f09b3021ddf8bf0156522",
  measurementId: "G-S70QMMF1ST"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storageRef = getStorage(app); 

export { firebaseConfig, auth, db, storageRef };



