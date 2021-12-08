import * as S from './styles'
import Image from 'next/image'

export type AvatarSizes = {
  sm?: string
  md?: string
}

type AvatarProps = {
  size?: AvatarSizes
  rounded?: boolean
  src?: string
  alt?: string
}

const Avatar = ({
  src,
  alt = 'Github User Profile Image',
  ...props
}: AvatarProps) => {
  return (
    <S.Avatar {...props}>
      {src ? (
        <img loading="lazy" src={src} alt={alt} />
      ) : (
        <Image
          src="/images/placeholder.png"
          alt="Github User Profile Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      )}
    </S.Avatar>
  )
}

export default Avatar
