import type { NextPage } from 'next'
import Head from 'next/head'
import { Chat } from '../../components/messages/Chat';
import { MessagesList } from '../../components/messages/MessagesList';
import styles from "./../../styles/Messages.module.css";

const Messages: NextPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div>
                    <MessagesList/>
                </div>
                <div>
                    <Chat/>
                </div>
            </div>
        </main>
    )
}
export default Messages