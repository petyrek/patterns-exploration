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

Observable.prototype["fantasy-land/map"] = function(f) {
  return this.pipe(map(f))
}

const auth$ = Observable.create(observer =>
  firebaseApp.auth().onAuthStateChanged(x => observer.next(x)),
)

export const user$ = S.unchecked.pipe([
  S.unchecked.map(S.unchecked.toMaybe),
  S.unchecked.map(
    S.unchecked.map(u => ({
      name: u.displayName,
      email: u.email,
      avatar: u.photoURL,
    })),
  ),
])(auth$)
