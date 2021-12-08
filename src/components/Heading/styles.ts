import styled, { css } from 'styled-components'
import { lightTheme } from 'styles/theme'

type HeadingProps = {
  color?: keyof typeof lightTheme.colors
  level?: 1 | 2 | 3 | 4
  size?: keyof typeof lightTheme.sizes
  responsive?: boolean
  as?: keyof JSX.IntrinsicElements
}

export const Heading = styled.h1.attrs<HeadingProps>(({ level = 1, as }) => ({
  as: as ? as : `h${level}`
}))<HeadingProps>`
  ${({ color = 'black', level = 1, responsive = true, theme }) => {
    switch (level) {
      case 1:
        return css`
          color: ${theme.colors[color]};
          font-size: ${responsive ? theme.sizes.medium : theme.sizes.xxlarge};
          font-weight: ${theme.font.weight.bold};

          @media (min-width: 40em) {
            font-size: ${theme.sizes.xxlarge};
          }
        `
      case 2:
        return css`
          color: ${theme.colors[color]};
          font-size: ${theme.sizes.xlarge};
          font-weight: ${theme.font.weight.bold};
        `
      case 3:
        css`
          color: ${theme.colors[color]};
          font-size: ${responsive ? theme.sizes.xsmall : theme.sizes.medium};
          font-weight: ${theme.font.weight.normal};

          @media (min-width: 40em) {
            font-size: ${theme.sizes.medium};
          }
        `
        break
      case 4:
        return css`
          color: ${theme.colors[color]};
          font-size: ${theme.sizes.xsmall};
          font-weight: ${theme.font.weight.normal};
        `
    }
  }}

  line-height: 1.5;
`
