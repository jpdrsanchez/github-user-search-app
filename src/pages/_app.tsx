import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'styles/theme'
import GlobalStyles from 'styles/global'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
