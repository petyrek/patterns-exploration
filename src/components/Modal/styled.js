import styled from "styled-components/macro"

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`

export const ModalWindow = styled.div`
  box-shadow: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
`
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`
export const ModalBody = styled.div`
  padding: 1rem 2rem;
`
