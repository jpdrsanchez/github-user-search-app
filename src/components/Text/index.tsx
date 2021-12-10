import { ReactText } from 'react'
import { lightTheme } from 'styles/theme'
import * as S from './styles'

type TextProps = {
  children?: ReactText
  color?: keyof typeof lightTheme.colors
  size?: keyof typeof lightTheme.sizes
  lineHeight?: number
  align?: 'center' | 'left' | 'right'
  hasText?: boolean
}

const Text = ({ children, ...props }: TextProps) => {
  return <S.Text {...props}>{children}</S.Text>
}

export default Text
