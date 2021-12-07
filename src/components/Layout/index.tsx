import { ReactNode } from 'react'
import * as S from './styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Layout>
  )
}

export default Layout
