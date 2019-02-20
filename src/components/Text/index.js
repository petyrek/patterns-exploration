import React from "react"
import { TextWrap } from "./styled"

export const Text = ({ children, ...rest }) => (
  <TextWrap {...rest}>{children}</TextWrap>
)
