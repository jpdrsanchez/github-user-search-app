import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'

const Search = () => {
  return (
    <S.Search>
      <S.SearchIcon>
        <Image
          src="/images/icon-search.svg"
          width={25}
          height={24}
          alt="Icon of a magnifying glass"
        />
      </S.SearchIcon>
      <S.SearchInput type="text" placeholder="Search GitHub username…" />
      <Button>Search</Button>
    </S.Search>
  )
}

export default Search
