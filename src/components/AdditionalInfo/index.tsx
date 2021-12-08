import * as S from './styles'
import {
  IoLocationSharp,
  IoLinkSharp,
  IoLogoTwitter,
  IoBusinessSharp
} from 'react-icons/io5'

const AdditionalInfo = () => {
  return (
    <S.AdditionalInfo>
      <S.AdditionalItem>
        <span>
          <IoLocationSharp />
        </span>
        <p>San Francisco</p>
      </S.AdditionalItem>
      <S.AdditionalItem empty={true}>
        <span>
          <IoLogoTwitter />
        </span>
        <p>Not Available</p>
      </S.AdditionalItem>
      <S.AdditionalItem>
        <span>
          <IoLinkSharp />
        </span>
        <a href="https://https://github.blog">https://github.blog</a>
      </S.AdditionalItem>
      <S.AdditionalItem empty={true}>
        <span>
          <IoBusinessSharp />
        </span>
        <p>Not Available</p>
      </S.AdditionalItem>
    </S.AdditionalInfo>
  )
}

export default AdditionalInfo
