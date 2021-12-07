import styled, { css } from 'styled-components'
import { lightTheme } from 'styles/theme'

type HeadingProps = {
  color?: keyof typeof lightTheme.colors
  level?: 1 | 2 | 3 | 4
  size?: keyof typeof lightTheme.sizes
}

export const Heading = styled.h1.attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = 'black', level = 1, theme }) => {
    switch (level) {
      case 1:
        return css`
          color: ${theme.colors[color]};
          font-size: ${theme.sizes.xxlarge};
          font-weight: ${theme.font.weight.bold};
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
          font-size: ${theme.sizes.medium};
          font-weight: ${theme.font.weight.normal};
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
