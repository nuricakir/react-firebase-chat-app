
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = { apiKey: "AIzaSyCI9HBWPXKj-DthhInHScMQa5SB6ujNsmk",
authDomain: "final-projesi-69d3b.firebaseapp.com",
projectId: "final-projesi-69d3b",
storageBucket: "final-projesi-69d3b.appspot.com",
messagingSenderId: "986927973092",
appId: "1:986927973092:web:a5228ce8991f3874f9a2f1"};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;