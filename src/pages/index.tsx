import AdditionalInfo from 'components/AdditionalInfo'
import Avatar from 'components/Avatar'
import Content from 'components/Content'
import Header from 'components/Header'
import Heading from 'components/Heading'
import HeadingInfo from 'components/HeadingInfo'
import Layout from 'components/Layout'
import Loading from 'components/Loading'
import NumbersInfo from 'components/NumbersInfo'
import Search from 'components/Search'
import Text from 'components/Text'
import ToggleMode from 'components/ToggleMode'
import { format } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'
import { getUser } from 'services/api'
import { get, set } from 'services/mode'
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

const toggleMode = (mode: string) => (mode === 'light' ? 'dark' : 'light')

const Home = () => {
  const [mode, setMode] = useState('')
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getUserData = useCallback(async (name = 'octocat') => {
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
    console.log(error)
  }, [error])

  useEffect(() => {
    const modeValue = get()
    if (!modeValue) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        setMode('dark')
      else setMode('light')
    } else setMode(get())
  }, [])

  useEffect(() => {
    set(mode)
  }, [mode])

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header>
              <Heading color="logo">devfinder</Heading>
              <ToggleMode
                mode={mode}
                changeMode={() => {
                  setMode(prevMode => toggleMode(prevMode))
                }}
              />
            </Header>
            <Search />
            <Content>
              <Avatar
                src={userData?.avatar_url}
                alt={`${userData?.name || userData?.login} profile avatar`}
              />
              <HeadingInfo>
                <div>
                  <div>
                    <Heading color="black">
                      {userData?.name || userData?.login}
                    </Heading>
                    <a
                      href={`https://github.com/${userData?.login}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{userData?.login}
                    </a>
                  </div>
                  <Text lineHeight={1.46}>
                    {format(
                      new Date(userData?.created_at || ''),
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
                  repos: userData?.public_repos || 0,
                  followers: userData?.followers || 0,
                  following: userData?.following || 0
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
          </>
        )}
      </Layout>
    </ThemeProvider>
  )
}

export default Home
