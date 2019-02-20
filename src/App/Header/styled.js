import styled from "styled-components/macro"
import { theme } from "theme"

export const HeaderWrap = styled.header`
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${theme.colors.primary};
  padding: 0 10px;
`
