import styled, { keyframes } from "styled-components/macro"
import { theme } from "theme"

const BounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(1rem) }
  100% { transform: translateY(0) }
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 5rem;
  height: 2rem;
  margin: 20px auto;
`
export const Dot = styled.div`
  background: ${theme.colors.primary};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`
