import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Loading = styled.div`
  margin: auto;
  font-size: 3rem;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blueGray};
  display: flex;

  & > * {
    animation: ${loadingAnimation} 0.5s infinite;
  }
`
