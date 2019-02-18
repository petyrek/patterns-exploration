import React from "react"
import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import * as S from "sanctuary"
import daggy from "daggy"
import { startWith, map } from "rxjs/operators"
import { Observable } from "rxjs"

const firebaseApp = app.initializeApp({
  apiKey: "AIzaSyDfV83rAIybHINBg98OLZo-MIkgkwEsT4E",
  authDomain: "auto-351b1.firebaseapp.com",
  databaseURL: "https://auto-351b1.firebaseio.com",
  projectId: "auto-351b1",
  storageBucket: "auto-351b1.appspot.com",
  messagingSenderId: "881438286618",
})

export const login = () => {
  const provider = new app.auth.GoogleAuthProvider()
  provider.addScope("https://www.googleapis.com/auth/plus.login")
  firebaseApp.auth().signInWithRedirect(provider)
}

export const logout = () => {
  firebaseApp.auth().signOut()
}

const firebaseUserToUser = u => ({
  name: u.displayName,
  email: u.email,
  avatar: u.photoURL,
})

export const AppStates = daggy.taggedSum("AppStates", {
  Init: [],
  SignedIn: ["user"],
  SignedOut: [],
})

export const firebaseUser$ = Observable.create(observer =>
  firebaseApp.auth().onAuthStateChanged(x => observer.next(x)),
).pipe(
  startWith(firebaseApp.auth().currentUser),
  map(user => S.toMaybe(user)),
  map(user => S.map(firebaseUserToUser)(user)),
)

export const appState$ = firebaseUser$.pipe(
  map(user =>
    S.isNothing(user)
      ? AppStates.SignedOut
      : AppStates.SignedIn(S.maybeToNullable(user)),
  ),
)

export const withSubscription = stream$ => Component =>
  class extends React.Component {
    state = {
      data: undefined,
    }

    componentWillMount() {
      this.subscription = stream$.subscribe(value =>
        this.setState({
          data: value,
        }),
      )
    }

    componentWillUnmount() {
      this.subscription.unsubscribe()
    }

    render() {
      return <Component {...this.props} data={this.state.data} />
    }
  }

export const withCollection = key =>
  firebaseApp
    .firestore()
    .collection(key)
    .get()
    .then(x => x.map(doc => ({ id: doc.id, ...doc.data() })))

appState$.subscribe(console.warn, console.error)
