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
