import styled from "styled-components/macro"
import { theme } from "theme"

export const IconWrap = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray};
  cursor: pointer;
  svg {
    fill: ${theme.colors.gray};
  }

  &:hover {
    color: ${theme.colors.primary};
    svg {
      fill: ${theme.colors.primary};
    }
  }
`
