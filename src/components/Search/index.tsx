import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import { ChangeEvent, FormEvent } from 'react'
import Text from 'components/Text'

type SearchProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  setValue: (value: string) => void
  value: string
  error: boolean
  loading: boolean
}

const Search = ({ value, setValue, onSubmit, error, loading }: SearchProps) => {
  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }

  return (
    <S.Search onSubmit={onSubmit}>
      <S.SearchIcon>
        <Image
          src="/images/icon-search.svg"
          width={25}
          height={24}
          alt="Icon of a magnifying glass"
        />
      </S.SearchIcon>
      <S.SearchInput
        type="text"
        placeholder="Search GitHub username…"
        value={value}
        onChange={handleSearch}
      />
      <Button
        type="submit"
        disabled={!value.length || loading}
        isLoading={loading}
        loadingText="..."
      >
        Search
      </Button>
      {error && (
        <S.SearchError>
          <Text color="red" lineHeight={1.46}>
            No results
          </Text>
        </S.SearchError>
      )}
    </S.Search>
  )
}

export default Search
