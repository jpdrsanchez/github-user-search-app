import styled, { css } from 'styled-components'
import { lightTheme } from 'styles/theme'

type ButtonProps = {
  color?: keyof typeof lightTheme.colors
  width?: number
  height?: number
  background?: keyof typeof lightTheme.colors
  hover?: keyof typeof lightTheme.colors
  colorHover?: keyof typeof lightTheme.colors
  radius?: keyof typeof lightTheme.sizes
  type?: 'button' | 'submit' | 'reset'
  size?: keyof typeof lightTheme.sizes
  gap?: keyof typeof lightTheme.sizes
  spacing?: number
  weight?: keyof typeof lightTheme.font.weight
}

export const Button = styled.button.attrs<ButtonProps>(({ type }) => ({
  type: type || 'button'
}))<ButtonProps>`
  ${({
    color = 'white',
    background = 'blue',
    hover = 'blueHover',
    colorHover = 'white',
    width = 106,
    height = 50,
    radius = 'xxsmall',
    size = 'medium',
    gap = 'medium',
    spacing = 0,
    weight = 'normal',
    theme
  }) => css`
    background: ${theme.colors[background]};
    color: ${theme.colors[color]};
    width: ${`${width / 16}rem`};
    height: ${`${height / 16}rem`};
    border-radius: ${theme.sizes[radius]};
    font-size: ${theme.sizes[size]};
    font-weight: ${theme.font.weight[weight]};
    gap: ${theme.sizes[gap]};
    letter-spacing: ${`${spacing}px`};

    &:hover {
      background: ${theme.colors[hover]};
      color: ${theme.colors[colorHover]};
    }
  `}

  border: none;
  cursor: pointer;
  padding: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;

  span {
    font-size: 1.25rem;
  }
`
