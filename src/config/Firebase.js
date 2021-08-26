import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjH33kB65ED1JttkxJHrS_p6FT1ex4Bh0',
  authDomain: 'listwae-d007b.firebaseapp.com',
  projectId: 'listwae-d007b',
  storageBucket: 'listwae-d007b.appspot.com',
  messagingSenderId: '1000647298195',
  appId: '1:1000647298195:web:144e09d88cb2a4b7ca9166',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
