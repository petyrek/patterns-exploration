import React from "react"
import * as S from "sanctuary"
import { loginE, logoutE } from "data/auth/api"
import { Button } from "components/Button"
import { Text } from "components/Text"
import { HeaderWrap } from "./styled"

export const Header = ({ userM }) => (
  <HeaderWrap>
    {S.maybe(<Button secondary onClick={loginE} text="login" />)(user => (
      <>
        <Text white>{user.name}</Text>
        <Button secondary onClick={logoutE} text="logout" />
      </>
    ))(userM)}
  </HeaderWrap>
)
