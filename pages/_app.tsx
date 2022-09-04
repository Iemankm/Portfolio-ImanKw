import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Heading1} from '../components/styleGuid/components/text'
import {Container} from '../components/styleGuid/components/Container'
import {Spacer} from '../components/styleGuid/components/Spacer'
import {MyImage} from "../components/styleGuid/components/image"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Component {...pageProps} />
  </div>

  );
}

export default MyApp
