import type { NextPage } from 'next'
import Head from 'next/head'
import { FollowSuggest } from '../components/FollowSuggest/FollowSuggest'
import { Posts } from '../components/Posts/Posts'
import { Stories } from '../components/Stories/Stories'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Stories />
            <Posts />
          </div>
          <div className={styles.aside}>
            <FollowSuggest />
          </div>
        </div>
      </main>
  )
}

export default Home
