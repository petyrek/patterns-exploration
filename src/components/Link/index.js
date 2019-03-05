import React from "react"
import { withRouter } from "react-router-dom"
import { LinkWrap } from "./styled"
import { Text } from "components/Text"
import { noop } from "common/functions"
import { compose, withHandlers, defaultProps } from "recompose"

const enhancer = compose(
  withRouter,
  defaultProps({
    onClick: noop,
  }),
  withHandlers({
    handleClick: p => () => {
      p.onClick()
      p.history.push(p.to)
    },
  }),
)

export const Link = enhancer(
  ({ text, handleClick, onClick, children, ...rest }) => (
    <LinkWrap onClick={handleClick}>
      {text && <Text {...rest}>{text}</Text>}
      {children}
    </LinkWrap>
  ),
)
