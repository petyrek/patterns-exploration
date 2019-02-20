import React from "react"
import { StyledButton } from "./styled"

export const Button = ({ text, ...rest }) => (
  <StyledButton {...rest}>{text}</StyledButton>
)
