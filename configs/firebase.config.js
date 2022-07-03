import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDaOoJkzZzATTieRF5U5noLTchtKBGx5Ps',
    authDomain: 'desolify.firebaseapp.com',
    projectId: 'desolify',
    storageBucket: 'desolify.appspot.com',
    messagingSenderId: '861238228654',
    appId: '1:861238228654:web:33df662de58d34dba75f3f',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const firestore = getFirestore(app);
