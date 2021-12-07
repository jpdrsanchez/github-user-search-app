import styled, { css } from 'styled-components'

export const Search = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.sectionBackground};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.sizes.small};
    margin-bottom: ${theme.spacings.medium};

    @media (min-width: 40em) {
      padding: ${theme.spacings.xsmall};
      margin-bottom: ${theme.spacings.large};
    }
  `}
  box-shadow: 0 1rem 1.875rem -.625rem rgba(70, 96, 187, 0.198567);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
`

export const SearchIcon = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.sizes.xxsmall};
    margin-right: ${theme.sizes.xxsmall};

    @media (max-width: 39.9375em) {
      width: 1.25rem;
    }

    @media (min-width: 40em) {
      margin-left: ${theme.sizes.xlarge};
      margin-right: ${theme.spacings.large};
    }
  `}
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.logo};
    font-size: ${theme.sizes.xsmall};

    &::placeholder {
      color: ${theme.colors.blueGray};
    }

    @media (min-width: 40em) {
      font-size: ${theme.sizes.large};
    }
  `}

  line-height: 1.5625rem;
  border: none;
  outline: 0;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`
