import React from "react"
import { ContentWrap } from "./styled"
import { urls } from "pages/urls"
import { S } from "sanct"
import { Switch, Route, withRouter } from "react-router-dom"

const enhancer = withRouter

export const Content = enhancer(() => (
  <ContentWrap>
    <Switch>
      {S.map(x => console.log(x) || <Route key={x.path} exact {...x} />)(
        S.values(urls),
      )}
    </Switch>
  </ContentWrap>
))
