import firebase from 'firebase/app';


const config = {
    apiKey: "AIzaSyAdvwR_LALd6Ojo87yp4m0xDe5SXhVaBlk",
    authDomain: "febian-test.firebaseapp.com",
    projectId: "febian-test",
    storageBucket: "febian-test.appspot.com",
    messagingSenderId: "563458612068",
    appId: "1:563458612068:web:ead0e01769d6eabb347871"

  
};
firebase.initializeApp(config);

export default firebase;