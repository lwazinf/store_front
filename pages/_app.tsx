import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Layout_ from '../components/layout_'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout_>
      <Component {...pageProps} />
      </Layout_>
    </RecoilRoot>
  )
}

export default MyApp
