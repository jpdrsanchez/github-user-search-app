import styled, { css } from 'styled-components'

export const HeadingInfo = styled.div`
  & > div {
    flex: 1;

    @media (min-width: 48em) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    @media (min-width: 62em) {
      margin-bottom: 1.25rem;
    }

    a {
      ${({ theme }) => css`
        color: ${theme.colors.blue};
        font-size: ${theme.sizes.xsmall};
        font-weight: ${theme.font.weight.normal};
        line-height: 1.5;
        display: block;

        @media (max-width: 39.9375em) {
          margin-bottom: 0.375rem;
        }

        @media (min-width: 40em) and (max-width: 61.9375em) {
          margin-bottom: 0.25rem;
        }

        @media (min-width: 40em) {
          font-size: ${theme.sizes.medium};
        }
      `}
    }

    p {
      @media (min-width: 62em) {
        transform: translateY(50%);
      }
    }
  }

  @media (max-width: 61.9375em) {
    & > p {
      display: none;
    }
  }
`
