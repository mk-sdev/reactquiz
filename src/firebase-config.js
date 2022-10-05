import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyANeMv5FWs9uROGUfp8LN_aSebEWRTbTBU",
    authDomain: "webpack-f77ac.firebaseapp.com",
    projectId: "webpack-f77ac",
    storageBucket: "webpack-f77ac.appspot.com",
    messagingSenderId: "863248034407",
    appId: "1:863248034407:web:854af43df21feb9a4f82c2"
  };

  const app = initializeApp(firebaseConfig)
  export const db=getFirestore(app)
