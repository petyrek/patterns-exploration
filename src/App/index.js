import React from "react"
import { user$ } from "data/auth/api"
import { compose } from "recompose"
import { withOpen } from "hocs/withOpen"
import { withSubscription } from "hocs/withSubscription"
import { GlobalStyle, AppWrap } from "./styled"
import { Header } from "./Header"
import { Content } from "./Content"

const enhancer = compose(
  withOpen,
  withSubscription(user$),
)

export const App = enhancer(({ stateU, isOpen, open, close }) => (
  <>
    <GlobalStyle />
    {stateU.map(userM => (
      <AppWrap>
        <Header userM={userM} />
        <Content />
      </AppWrap>
    ))}
  </>
))
