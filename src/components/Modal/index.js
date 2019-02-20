import React from "react"
import { ModalWrap, ModalWindow, ModalHeader, ModalBody } from "./styled"
import { Icon } from "components/Icon"
import { Text } from "components/Text"

export const Modal = ({ title, children, close }) => (
  <ModalWrap>
    <ModalWindow>
      <ModalHeader>
        <Text>{title}</Text>
        <Icon onClick={close} char="╳" />
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalWindow>
  </ModalWrap>
)
