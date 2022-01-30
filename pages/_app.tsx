import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <br /> <br /> <br />
    <Component {...pageProps} />
    <div id="modal-root"></div>
    <Footer />
  </>
}

export default MyApp
