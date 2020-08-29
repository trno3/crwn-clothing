import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyC7cZskz2aM1JhGKb1K2e0w6YZdI_XbQtQ',
    authDomain: 'crwm-db-82edf.firebaseapp.com',
    databaseURL: 'https://crwm-db-82edf.firebaseio.com',
    projectId: 'crwm-db-82edf',
    storageBucket: 'crwm-db-82edf.appspot.com',
    messagingSenderId: '804858374413',
    appId: '1:804858374413:web:5552ff43c948399a1f2844',
    measurementId: 'G-12BF8M6NWK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
