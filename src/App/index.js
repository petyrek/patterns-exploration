import React from "react"
import { Loader } from "components/Loader"
import { login, logout, withSubscription, appState$, AppStates } from "./auth"

const C = ({ data }) => {
  if (AppStates.Init.is(data)) {
    return <Loader />
  }

  if (AppStates.SignedOut.is(data)) {
    return <button onClick={login}>login</button>
  }

  return (
    <>
      <div>{data.user.name}</div>

      <button onClick={logout}>logout</button>
    </>
  )
}

export const App = withSubscription(appState$)(C)
