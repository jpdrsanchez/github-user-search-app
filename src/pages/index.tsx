import AdditionalInfo from 'components/AdditionalInfo'
import Avatar from 'components/Avatar'
import Content from 'components/Content'
import Header from 'components/Header'
import Heading from 'components/Heading'
import HeadingInfo from 'components/HeadingInfo'
import Layout from 'components/Layout'
import NumbersInfo from 'components/NumbersInfo'
import Search from 'components/Search'
import Text from 'components/Text'
import ToggleMode from 'components/ToggleMode'
import { format } from 'date-fns'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { getUser } from 'services/api'
import { clientGet, get, set } from 'services/mode'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/theme'

export type ModeProps = 'light' | 'dark'

type UserDataType = {
  avatar_url: string
  name: string | null
  login: string
  created_at: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
  location: string | null
  blog: string | null
  twitter_username: string | null
  company: string | null
}

type PageProps = {
  data: UserDataType
  color_mode: ModeProps
}

const toggleMode = (mode: string) => (mode === 'light' ? 'dark' : 'light')

const Home = ({ data, color_mode }: PageProps) => {
  const [mode, setMode] = useState(color_mode)
  const [userData, setUserData] = useState<UserDataType>(data)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState('')

  const getUserData = useCallback(async (name = 'octocat') => {
    setLoading(true)
    setError(false)
    try {
      const response: UserDataType = await getUser(name)
      setUserData(response)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  useEffect(() => {
    if (!clientGet()) {
      setMode(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      )
      set(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      )
    } else set(mode)
  }, [mode])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getUserData(name)
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        <Header>
          <Heading color="logo">devfinder</Heading>
          <ToggleMode
            mode={mode}
            changeMode={() => {
              setMode(prevMode => toggleMode(prevMode))
            }}
          />
        </Header>
        <Search
          value={name}
          setValue={setName}
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
        />
        <Content>
          <Avatar
            src={userData.avatar_url}
            alt={`${userData?.name || userData.login} profile avatar`}
          />
          <HeadingInfo>
            <div>
              <div>
                <Heading color="black">
                  {userData?.name || userData.login}
                </Heading>
                <a
                  href={`https://github.com/${userData.login}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{userData.login}
                </a>
              </div>
              <Text lineHeight={1.46}>
                {format(
                  new Date(userData.created_at || ''),
                  "'Joined' dd MMM yyyy"
                )}
              </Text>
            </div>
            <Text hasText={!!userData?.bio}>
              {userData?.bio || 'This profile has no bio'}
            </Text>
          </HeadingInfo>
          <Text hasText={!!userData?.bio}>
            {userData?.bio || 'This profile has no bio'}
          </Text>
          <NumbersInfo
            numbers={{
              repos: userData.public_repos,
              followers: userData.followers,
              following: userData.following
            }}
          />
          <AdditionalInfo
            data={{
              blog: userData?.blog,
              location: userData?.location,
              org: userData?.company,
              twitter: userData?.twitter_username
            }}
          />
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const color_mode = get(context)

  try {
    const data: UserDataType = await getUser('octocat')
    return {
      props: {
        data,
        color_mode: color_mode
      }
    }
  } catch {
    return {
      redirect: {
        destination: '/404',
        permanent: true
      }
    }
  }
}

export default Home
