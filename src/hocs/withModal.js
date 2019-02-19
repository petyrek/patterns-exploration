import React from "react"
import { Modal } from "components/Modal"

export const withModal = Component => ({ title, close, rest }) => (
  <Modal title={title} close={close}>
    <Component {...rest} close={close} />
  </Modal>
)
