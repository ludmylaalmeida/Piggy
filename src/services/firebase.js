<<<<<<< HEAD
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAILEXXJDxpleQtCC_pxri-ymjFp8v7JM4",
  authDomain: "piggy-react.firebaseapp.com",
  databaseURL: "https://piggy-react-default-rtdb.firebaseio.com",
  projectId: "piggy-react",
  storageBucket: "piggy-react.appspot.com",
  messagingSenderId: "187545494731",
  appId: "1:187545494731:web:1faebaf1e15d0802d2a74e",
  measurementId: "G-1Q0YZ1QLCM"
})

// authentication instants
export const auth = app.auth()
export default app
=======
import dotenv from "dotenv"
dotenv.config()
import * as firebase from "firebase/app"
import "firebase/auth"

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})
>>>>>>> 1e0749cfa37544992b62cee0c3c44b2fad6ea8f2
