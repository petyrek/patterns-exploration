import styled, { css } from "styled-components"
import { darken } from "polished"
import { theme } from "theme"

const getColors = p => {
  if (p.secondary)
    return css`
      color: #fff;
      background: ${theme.colors.secondary};

      &:hover,
      &:active {
        background: ${darken(0.05, theme.colors.secondary)};
      }
    `

  return css`
    color: #fff;
    background: ${theme.colors.primary};

    &:hover,
    &:active {
      background: ${darken(0.05, theme.colors.primary)};
    }
  `
}

export const StyledButton = styled.button`
  ${getColors};
  font-size: 1.6rem;
  border: 0;
  height: 3rem;
  padding: 0 1.5rem;
  cursor: pointer;
`
