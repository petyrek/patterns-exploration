import styled from "styled-components/macro"
import { theme } from "theme"
import logo from "assets/images/86.png"

export const HeaderWrap = styled.header`
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.primary};
  padding: 0 1rem;
`

export const Logo = styled.h1`
  background: url(${logo}) center center / contain no-repeat;
  height: 3rem;
  width: 3rem;
  margin: 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`
