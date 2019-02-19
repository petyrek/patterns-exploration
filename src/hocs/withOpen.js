import { withState, compose, withHandlers } from "recompose"

export const withOpen = compose(
  withState("isOpen", "setIsOpen", false),
  withHandlers({
    open: p => () => p.setIsOpen(true),
    close: p => () => p.setIsOpen(false),
    toggle: p => () => p.setIsOpen(!p.isOpen),
  }),
)
