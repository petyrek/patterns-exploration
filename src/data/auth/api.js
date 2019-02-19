import app from "firebase/app"
import { firebaseApp } from "firebaseApp"
import * as S from "sanctuary"
import { map } from "rxjs/operators"
import { Observable } from "rxjs"

export const login = () => {
  const provider = new app.auth.GoogleAuthProvider()
  provider.addScope("https://www.googleapis.com/auth/plus.login")
  firebaseApp.auth().signInWithRedirect(provider)
}

export const logout = () => {
  firebaseApp.auth().signOut()
}

export const user$ = Observable.create(observer =>
  firebaseApp.auth().onAuthStateChanged(x => observer.next(x)),
).pipe(
  map(user => S.toMaybe(user)),
  map(user =>
    S.map(u => ({
      name: u.displayName,
      email: u.email,
      avatar: u.photoURL,
    }))(user),
  ),
)
