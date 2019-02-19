import { Observable } from "rxjs"
import { withSubscription } from "hocs/withSubscription"
import { firebaseApp } from "firebaseApp"

const getCollectionObservable = collectionKey =>
  Observable.create(observer =>
    firebaseApp
      .firestore()
      .collection(collectionKey)
      .get()
      .then(x =>
        observer.next(x.docs.map(doc => ({ id: doc.id, ...doc.data() }))),
      ),
  )

export const withCollection = collectionKey =>
  withSubscription(getCollectionObservable(collectionKey))
