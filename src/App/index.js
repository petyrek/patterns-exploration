import React from "react"
import { login, logout, user$ } from "data/auth/api"
import * as S from "sanctuary"
import { compose } from "recompose"
import { withOpen } from "hocs/withOpen"
import { withModal } from "hocs/withModal"
import { withSubscription } from "hocs/withSubscription"
import { BrandList } from "components/BrandList"

const MakesModal = withModal(BrandList)

const C = ({ state, isOpen, open, close }) =>
  state.map(
    S.maybe(<button onClick={login}>login</button>)(user => (
      <>
        <div>{user.name}</div>
        <BrandList />
        <button onClick={logout}>logout</button>
        <button onClick={open}>open</button>
        {isOpen && <MakesModal close={close} title="makes" />}
      </>
    )),
  )

export const App = compose(
  withOpen,
  withSubscription(user$),
)(C)
