import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | GitHub user search app</title>
        <meta name="description" content="Search for any github user" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
