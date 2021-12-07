import styled, { css } from 'styled-components'
import { lightTheme } from 'styles/theme'

type TextProps = {
  color?: keyof typeof lightTheme.colors
  size?: keyof typeof lightTheme.sizes
  lineHeight?: number
  align?: 'center' | 'left' | 'right'
  weight?: keyof typeof lightTheme.font.weight
}

export const Text = styled.p<TextProps>`
  ${({
    theme,
    color = 'blueGray',
    size = 'small',
    lineHeight = '1.67',
    align = 'left',
    weight = 'normal'
  }) =>
    css`
      color: ${theme.colors[color]};
      font-size: ${theme.sizes[size]};
      font-weight: ${theme.font.weight[weight]};
      line-height: ${lineHeight};
      text-align: ${align};
    `}
`
