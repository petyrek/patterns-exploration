import React from "react"
import { ModalWrap, ModalWindow, ModalHeader, ModalBody } from "./styled"

export const Modal = ({ title, children, close }) => (
  <ModalWrap>
    <ModalWindow>
      <ModalHeader onClick={close}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalWindow>
  </ModalWrap>
)
