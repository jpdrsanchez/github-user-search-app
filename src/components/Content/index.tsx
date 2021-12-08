import { ReactNode } from 'react'
import * as S from './styles'

type ContentType = {
  children: ReactNode
}

const Content = ({ children }: ContentType) => {
  return <S.Content>{children}</S.Content>
}

export default Content
