import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAszZZHOr2StmQgEN8KohtQUZVwECfYxs0",
  authDomain: "readinglist-25ce9.firebaseapp.com",
  projectId: "readinglist-25ce9",
  storageBucket: "readinglist-25ce9.appspot.com",
  messagingSenderId: "542365530943",
  appId: "1:542365530943:web:08f2ae555ddcef060eb18a"
};
// init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

export {db}
