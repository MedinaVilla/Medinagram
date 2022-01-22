import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { Chat } from '../../components/messages/Chat';
import { MessagesList } from '../../components/messages/MessagesList';
import styles from "./../../styles/Messages.module.css";

interface ISelectedChat {
    nickname: string,
    image: string
}

const Messages: NextPage = () => {
    const [selectedChat, setSelectedChat] = useState<ISelectedChat>();


    const changeSelectedChat = (nickname: string, image:string) => {
        let selectedChat = {
            nickname: nickname,
            image:image
        }
        setSelectedChat(selectedChat);
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div>
                    <MessagesList onSelect={(nickname: string, image:string) => { changeSelectedChat(nickname, image) }} />
                </div>
                <div>
                    <Chat chatWith={selectedChat} />
                </div>
            </div>
        </main>
    )
}
export default Messages