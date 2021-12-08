import Heading from 'components/Heading'
import * as S from './styles'

type NumbersInfoProps = {
  numbers: {
    repos: number
    followers: number
    following: number
  }
}

const NumbersInfo = ({ numbers }: NumbersInfoProps) => {
  return (
    <S.NumbersInfo>
      <li>
        <Heading level={4} color="blueGray">
          Repos
        </Heading>
        <Heading>{numbers.repos}</Heading>
      </li>
      <li>
        <Heading level={4} color="blueGray">
          Followers
        </Heading>
        <Heading>{numbers.followers}</Heading>
      </li>
      <li>
        <Heading level={4} color="blueGray">
          Following
        </Heading>
        <Heading>{numbers.following}</Heading>
      </li>
    </S.NumbersInfo>
  )
}

export default NumbersInfo
