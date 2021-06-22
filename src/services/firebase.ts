import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APIID
 
};

firebase.initializeApp(firebaseConfig)
 const auth = firebase.auth();
 const database = firebase.database();

 export{firebase,auth,database}
