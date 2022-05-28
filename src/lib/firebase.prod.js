import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCUDpB0Bccvql5CMfFCoqW0TYnMgPM3Bj8",
    authDomain: "netflix-demo-4ace2.firebaseapp.com",
    projectId: "netflix-demo-4ace2",
    storageBucket: "netflix-demo-4ace2.appspot.com",
    messagingSenderId: "904115073917",
    appId: "1:904115073917:web:bfeba728e0bfb314825214"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
