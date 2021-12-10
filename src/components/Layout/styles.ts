import styled, { keyframes } from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  padding: ${({ theme }) => `${theme.spacings.xlarge} ${theme.spacings.large}`};
`

const smoothShow = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.medium};
  margin: auto;

  @media (min-width: 40em) {
    max-width: ${({ theme }) => theme.container.medium};
  }

  @media (min-width: 62em) {
    max-width: ${({ theme }) => theme.container.large};
  }

  & > * {
    opacity: 0;
    transform: translateY(-1.25rem);
    animation: ${smoothShow} 0.5s forwards;
  }
`
