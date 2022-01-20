import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medinagram</title>
        <meta name="description" content="Simple Social app based on Instagram web application using Next JS, Typescript, Node JS, Socket.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
    
      </main>

    </div>
  )
}

export default Home
