import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  /* eslint @typescript-eslint/no-var-requires: "off" */
  const { worker } = require('../../mocks/browser')
  worker.start()
}

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea { 
    padding:0;
    margin:0;
    font-family: -apple-system,
    BlinkMacSystemFont,SegoeUI, Roboto, Oxygen, Ubuntu, Cantarell, FiraSans, DroidSans, HelveticaNeue, sansserif;
  }
  * {
    boxsizing: borderbox ;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: #000;
  }

  ol, ul {
    list-style: none;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
