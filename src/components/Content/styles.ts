import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    padding: ${`${theme.spacings.xlarge} ${theme.spacings.large} ${theme.spacings.xxxlarge}`};
    border-radius: ${theme.sizes.small};
    background: ${theme.colors.sectionBackground};

    @media (min-width: 40em) {
      padding: ${theme.spacings.xxlarge};
    }

    @media (min-width: 62em) {
      padding: ${theme.spacings.xxxlarge};
    }
  `}

  box-shadow: 0 1rem 1.875rem -.625rem rgba(70, 96, 187, 0.198567);
`
