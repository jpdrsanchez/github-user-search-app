import { ReactNode } from 'react'
import * as S from './styles'

type HeadingInfoProps = {
  children: ReactNode
}

const HeadingInfo = ({ children }: HeadingInfoProps) => {
  return <S.HeadingInfo>{children}</S.HeadingInfo>
}

export default HeadingInfo
