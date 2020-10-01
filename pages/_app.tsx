import { AppProps } from 'next/app'

import 'water.css/out/dark.min.css'

export default ({ Component, pageProps }: AppProps) => <>
  <Component {...pageProps} />
</>
