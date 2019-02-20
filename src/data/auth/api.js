import app from "firebase/app"
import { firebaseApp } from "firebaseApp"
import { S } from "sanct"
import { Observable } from "rxjs"

export const loginE = () => {
  const provider = new app.auth.GoogleAuthProvider()
  provider.addScope("https://www.googleapis.com/auth/plus.login")
  firebaseApp.auth().signInWithRedirect(provider)
}

export const logoutE = () => {
  firebaseApp.auth().signOut()
}

const auth$ = Observable.create(observer =>
  firebaseApp.auth().onAuthStateChanged(x => observer.next(S.toMaybe(x))),
)

export const user$ = S.map(
  S.map(u => ({
    name: u.displayName,
    email: u.email,
    avatar: u.photoURL,
  })),
)(auth$)
