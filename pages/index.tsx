import type { NextPage } from 'next'
import Head from 'next/head'
import { FollowSuggest } from '../components/FollowSuggest/FollowSuggest'
import { Posts } from '../components/Posts/Posts'
import { Stories } from '../components/Stories/Stories'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div >
            <Stories />
            <Posts />
          </div>
          <div >
            <FollowSuggest />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
