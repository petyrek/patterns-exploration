import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { firebaseConfig } from "config"

export const firebaseApp = app.initializeApp(firebaseConfig)
