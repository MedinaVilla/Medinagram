import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Medinagram</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <div id="modal-root"></div>
    <Footer />
  </>
}

export default MyApp
