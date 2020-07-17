import { AppProps } from 'next/app'
import Head from 'next/head'

export default ({ Component, pageProps }: AppProps) => <>
  <Head>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css' />
  </Head>

  <Component {...pageProps} />
</>