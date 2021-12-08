import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    padding: ${`${theme.spacings.xlarge} ${theme.spacings.large} ${theme.spacings.xxxlarge}`};
    border-radius: ${theme.sizes.small};
    background: ${theme.colors.sectionBackground};
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.5625rem;
    align-items: center;
    box-shadow: 0 1rem 1.875rem -0.625rem ${theme.colors.shadow};

    & > * {
      &:nth-child(n + 3) {
        grid-column: span 2;
      }
    }

    & > p {
      margin-top: 1.5rem;
    }

    @media (min-width: 40em) {
      padding: ${theme.spacings.xxlarge};
    }

    @media (min-width: 62em) {
      padding: ${theme.spacings.xxxlarge};
      column-gap: 2.3125rem;

      & > p {
        display: none;
      }

      & > * {
        &:not(:first-child) {
          grid-column: 2;
        }
      }
    }
  `}
`
