import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiq180UR9KOZ_LskDKRsn7h5HJQDB-E5E",
    authDomain: "clone-15c19.firebaseapp.com",
    projectId: "clone-15c19",
    storageBucket: "clone-15c19.appspot.com",
    messagingSenderId: "539534749766",
    appId: "1:539534749766:web:6b3bb414bb6b0fbd045a47",
    measurementId: "G-DVEQQVXQ1P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
