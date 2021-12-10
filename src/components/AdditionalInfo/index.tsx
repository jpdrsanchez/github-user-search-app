import * as S from './styles'
import {
  IoLocationSharp,
  IoLinkSharp,
  IoLogoTwitter,
  IoBusinessSharp
} from 'react-icons/io5'

type AdditionalInfoProps = {
  data: {
    location?: string | null
    twitter?: string | null
    blog?: string | null
    org?: string | null
  }
}

const AdditionalInfo = ({ data }: AdditionalInfoProps) => {
  return (
    <S.AdditionalInfo>
      <S.AdditionalItem empty={!data.location}>
        <span>
          <IoLocationSharp />
        </span>
        <p>{data.location || 'Not Available'}</p>
      </S.AdditionalItem>
      <S.AdditionalItem empty={!data.twitter}>
        <span>
          <IoLogoTwitter />
        </span>
        {data?.twitter ? (
          <a
            href={`https://twitter.com/${data.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.twitter}
          </a>
        ) : (
          <p>Not Available</p>
        )}
      </S.AdditionalItem>
      <S.AdditionalItem empty={!data.blog}>
        <span>
          <IoLinkSharp />
        </span>
        {data?.blog ? (
          <a href={data.blog} target="_blank" rel="noreferrer">
            {data.blog}
          </a>
        ) : (
          <p>Not Available</p>
        )}
      </S.AdditionalItem>
      <S.AdditionalItem empty={!data.org}>
        <span>
          <IoBusinessSharp />
        </span>
        {data?.org && data.org.startsWith('@') ? (
          <a
            href={`https://github.com/${data.org
              .split(',')[0]
              .replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.org.split(',')[0]}
          </a>
        ) : (
          <p>{data?.org || 'Not Available'}</p>
        )}
      </S.AdditionalItem>
    </S.AdditionalInfo>
  )
}

export default AdditionalInfo
