import { createGlobalStyle, css } from 'styled-components'
import normalize from 'styled-normalize'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ${({ theme }) => css`
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.blueGray};
      font-family: ${theme.font.family};
      font-size: ${theme.sizes.medium};
      font-weight: ${theme.font.weight.normal};
    }

    a {
      color: ${theme.colors.blueGray};
      text-decoration: none;
    }
  `}
`

export default GlobalStyles
