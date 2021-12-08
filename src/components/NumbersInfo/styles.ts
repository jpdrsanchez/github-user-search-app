import styled, { css } from 'styled-components'

export const NumbersInfo = styled.ul`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: ${theme.sizes.xxsmall};
    padding: 0.9375rem 2rem 1.0625rem;
    margin-top: 2rem;
    margin-bottom: 1.875rem;

    @media (max-width: 39.9375em) {
      text-align: center;
      padding-left: 0.9375rem;
      padding-right: 0.9375rem;

      h4 {
        font-size: 0.6875rem;
      }
    }

    @media (min-width: 62em) {
      margin-bottom: 2.3125rem;
    }
  `}
`
