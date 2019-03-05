import React from "react"
import * as S from "sanctuary"
import { loginE, logoutE } from "data/auth/api"
import { Button } from "components/Button"
import { Text } from "components/Text"
import { Link } from "components/Link"
import { HeaderWrap, Logo, Nav } from "./styled"
import { paths } from "pages/urls"

export const Header = ({ userM }) => (
  <HeaderWrap>
    <Link to={paths.home}>
      <Logo />
    </Link>
    {S.maybe(<Button secondary onClick={loginE} text="login" />)(user => (
      <Nav>
        <Link white to={paths.profile} text="Profile" />
        <Text white>{user.name}</Text>
        <Button secondary onClick={logoutE} text="logout" />
      </Nav>
    ))(userM)}
  </HeaderWrap>
)
