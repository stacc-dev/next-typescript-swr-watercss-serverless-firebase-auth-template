import { AppProps } from 'next/app'
// import Head from 'next/head'

import 'water.css/out/dark.min.css'

export default ({ Component, pageProps }: AppProps) => <>
  <Component {...pageProps} />
</>