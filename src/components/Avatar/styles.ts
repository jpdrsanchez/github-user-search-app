import styled, { css } from 'styled-components'
import { AvatarSizes } from '.'

type AvatarProps = {
  size?: AvatarSizes
  rounded?: boolean
}

export const Avatar = styled.div<AvatarProps>`
  ${({ size = { sm: '4.375rem', md: '7.375rem' }, rounded = true }) => css`
    width: ${size.sm};
    height: ${size.sm};
    border-radius: ${rounded ? '50%' : ''};

    @media (min-width: 40em) {
      width: ${size.md};
      height: ${size.md};
    }
  `}
  overflow: hidden;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
