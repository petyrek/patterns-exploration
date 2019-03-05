import { Observable, BehaviorSubject } from "rxjs"
import { withSubscription } from "hocs/withSubscription"
import { firebaseApp } from "firebaseApp"

const cache = {}

const getCollectionSubject = collectionKey => {
  // if possible to retrieve from cache then do it
  if (cache[collectionKey]) return cache[collectionKey]

  // otherwise create an observable and subject
  const collection$ = Observable.create(observer =>
    firebaseApp
      .firestore()
      .collection(collectionKey)
      .get()
      .then(x =>
        observer.next(x.docs.map(doc => ({ id: doc.id, ...doc.data() }))),
      ),
  )
  const subject$ = new BehaviorSubject()
  collection$.subscribe(subject$)
  cache[collectionKey] = subject$

  return subject$
}

export const withCollection = collectionKey =>
  withSubscription(getCollectionSubject(collectionKey))
