import { MouseEventHandler, ReactNode, ReactText } from 'react'
import { lightTheme } from 'styles/theme'
import * as S from './styles'

type ButtonProps = {
  children: ReactText
  color?: keyof typeof lightTheme.colors
  width?: number
  height?: number
  background?: keyof typeof lightTheme.colors
  hover?: keyof typeof lightTheme.colors
  colorHover?: keyof typeof lightTheme.colors
  radius?: keyof typeof lightTheme.sizes
  type?: 'button' | 'submit' | 'reset'
  size?: keyof typeof lightTheme.sizes
  icon?: ReactNode
  gap?: keyof typeof lightTheme.sizes
  spacing?: number
  weight?: keyof typeof lightTheme.font.weight
  onClick?: MouseEventHandler
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = ({ children, ...props }: ButtonProps) => {
  if (props.isLoading)
    return (
      <S.Button {...props}>
        {props.loadingText}
        {!!props.icon && <span>{props.icon}</span>}
      </S.Button>
    )

  return (
    <S.Button {...props}>
      {children}
      {!!props.icon && <span>{props.icon}</span>}
    </S.Button>
  )
}

export default Button
