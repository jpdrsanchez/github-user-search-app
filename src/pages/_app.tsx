import { AppProps } from 'next/app'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
