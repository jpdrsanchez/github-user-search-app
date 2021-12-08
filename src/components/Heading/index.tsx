import { ReactText } from 'react'
import { lightTheme } from 'styles/theme'
import * as S from './styles'

type HeadingProps = {
  children: ReactText
  level?: 1 | 2 | 3 | 4
  color?: keyof typeof lightTheme.colors
  size?: keyof typeof lightTheme.sizes
  as?: keyof JSX.IntrinsicElements
}

const Heading = ({ children, ...props }: HeadingProps) => {
  return <S.Heading {...props}>{children}</S.Heading>
}

export default Heading
