import styled, { css } from 'styled-components'
import { lightTheme } from 'styles/theme'

type TextProps = {
  color?: keyof typeof lightTheme.colors
  size?: keyof typeof lightTheme.sizes
  lineHeight?: number
  align?: 'center' | 'left' | 'right'
  weight?: keyof typeof lightTheme.font.weight
  hasText?: boolean
}

export const Text = styled.p<TextProps>`
  ${({
    theme,
    color = 'blueGray',
    size = 'small',
    lineHeight = '1.67',
    align = 'left',
    weight = 'normal',
    hasText = true
  }) =>
    css`
      color: ${hasText ? theme.colors[color] : theme.colors.grayOpacity};
      font-size: ${theme.sizes.xsmall};
      font-weight: ${theme.font.weight[weight]};
      line-height: ${lineHeight};
      text-align: ${align};

      @media (min-width: 40em) {
        font-size: ${theme.sizes[size]};
      }
    `}
`
