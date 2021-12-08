import styled from 'styled-components'

export const AdditionalInfo = styled.ul`
  display: grid;
  gap: 1rem;

  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
    gap: 1.1875rem 1rem;
  }
`

type AdditionalItemProps = {
  empty?: boolean
}

export const AdditionalItem = styled.li.attrs<AdditionalItemProps>(
  ({ empty }) => ({ empty: empty || false })
)<AdditionalItemProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme, empty }) =>
    empty ? theme.colors.blueGrayOpacity : theme.colors.blueGray};

  span {
    width: 1.25rem;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a,
  p {
    color: ${({ theme, empty }) =>
      empty ? theme.colors.blueGrayOpacity : theme.colors.blueGray};
    font-size: 0.8125rem;
    line-height: 1.46;

    @media (min-width: 40em) {
      font-size: 0.9375rem;
      line-height: 1.375rem;
    }
  }
`
