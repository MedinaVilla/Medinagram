import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./../../styles/MessagesList.module.css";

interface IMessages {
    idUser: string,
    nickname: string,
    image: string,
    message: string,
    age: string
}
interface IProps {
    onSelect: (nickname: string, image: string) => void
}

export const MessagesList: React.FC<IProps> = ({ onSelect }) => {
    const [messages, setMessages] = useState<IMessages[]>([]);
    const [selected, setSelected] = useState<string>("");

    useEffect((): void => {
        //API call
        setMessages([
            {
                idUser: "1",
                nickname: "Stephen Grider",
                image: "https://avatars.githubusercontent.com/u/5003903?v=4",
                message: "La vida es sencilla, pero es fácil porque",
                age: "2h"
            },
            {
                idUser: "2",
                nickname: "Luis Fonsi",
                image: "https://pbs.twimg.com/profile_images/1362559130284810252/wMZICYXZ_400x400.jpg",
                message: "No te des por vencido, juro que vale la pena esperar",
                age: "1d"
            },
            {
                idUser: "3",
                nickname: "Camilo",
                image: "https://i.scdn.co/image/ab6761610000e5eb4afae4c45be4b6e04e28874d",
                message: "Oye, préstamos unos 500 varos, es que Evaluna me tomó prestado mi tarjeta de crédito",
                age: "4d"
            },
            {
                idUser: "4",
                nickname: "Elon Musk",
                image: "https://emprendedoresnews.com/wp-content/uploads/2020/06/elon-musk-1100x733-1-883x666.jpg",
                message: "Hi, have you heard about Avengers Iniciative?",
                age: "5d"
            }, {
                idUser: "5",
                nickname: "Crush",
                image: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg?ver=6",
                message: "Ya déjame en paz, te dije que noooo",
                age: "12d"
            }
        ])

    }, [])

    const showMessage = (nickname: string, image: string) => {
        setSelected(nickname);
        onSelect(nickname, image);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                MedinaVilla
            </div>
            <div>
                {
                    messages.length > 0 && messages.map((message: IMessages, index: number) => {
                        return <div onClick={() => { showMessage(message.nickname, message.image) }} className={`${styles.flexMessage} ${selected === message.nickname && styles.selectedMessage}`} key={index}>
                            <div>
                                <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: 'hidden', position: 'relative' }}>
                                    <Image src={message.image} className={styles.icon} layout="fill" alt="post" />
                                </div>
                            </div>
                            <div className={styles.messageSection}>
                                <p className={styles.message}><strong>{message.nickname}</strong> <br /> <small>{message.message}</small></p>
                            </div>
                            <div>
                                <small className={styles.age}>{message.age}</small>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}