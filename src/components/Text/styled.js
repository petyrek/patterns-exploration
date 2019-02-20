import styled, { css } from "styled-components/macro"
import { theme } from "theme"

const getColor = p => {
  if (p.white)
    return css`
      color: ${theme.colors.white};
    `

  return css`
    color: ${theme.colors.gray};
  `
}

export const TextWrap = styled.p`
  margin: 0;
  ${getColor};
`
