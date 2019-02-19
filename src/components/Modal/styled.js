import styled from "styled-components"
import { theme } from "theme"

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalWindow = styled.div`
  border: 1px solid ${theme.colors.gray};
  background: #fff;
  overflow-y: auto;
  overflow-x: auto;
`
export const ModalHeader = styled.div``
export const ModalBody = styled.div``
