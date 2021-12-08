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
import { useEffect, useState } from 'react'
import { get, set } from 'services/mode'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/theme'

export type ModeProps = 'light' | 'dark'

const toggleMode = (mode: string) => (mode === 'light' ? 'dark' : 'light')

const Home = () => {
  const [mode, setMode] = useState<string>('light')

  useEffect(() => {
    const modeValue = get()
    console.log(modeValue)
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
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="Profile Image of Tom Preston-Werner"
          />
          <HeadingInfo>
            <div>
              <div>
                <Heading color="black">The Octocat</Heading>
                <a href="#">@octocat</a>
              </div>
              <Text lineHeight={1.46}>Joined 25 Jan 2011</Text>
            </div>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </Text>
          </HeadingInfo>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </Text>
          <NumbersInfo numbers={{ repos: 8, followers: 3938, following: 9 }} />
          <AdditionalInfo />
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
