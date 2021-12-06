import { AppProps } from 'next/app'
import '@fontsource/kumbh-sans/400.css'
import '@fontsource/kumbh-sans/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
