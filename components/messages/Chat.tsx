import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./../../styles/Chat.module.css";
interface IChat {
    messageDay: {
        date: string
        messages:
        {
            me: boolean
            message: string
        }[]

    }[]
}

export const Chat: React.FC<any> = ({ chatWith }) => {
    const [chat, setChat] = useState<IChat>();
    const [input, setInput] = useState<string>("")

    useEffect(() => {
        setChat({
            messageDay: [
                {
                    date: "6 de Enero de 2022",
                    messages: [{
                        me: true,
                        message: "Oye y como has estado brother"
                    },
                    {
                        me: false,
                        message: "Bien aquí con la familia ya sabes, y tú como has estado???"
                    },
                    {
                        me: false,
                        message: "Por cierto, feliz año nuevo 2022"
                    },
                    {
                        me: true,
                        message: "Muy bien, gracias!!! Igualmente"
                    }]
                },
                {
                    date: "8 de Enero de 2022",
                    messages: [{
                        me: false,
                        message: "Te quiero mucho, y lo sabes"
                    },
                    {
                        me: true,
                        message: "Jajajaja si, si lo sé :3"
                    }
                    ]
                }
            ]

        })

    }, [])

    if (chatWith)
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.userInfo}>
                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", overflow: 'hidden', position: 'relative' }}>
                                <Image src={chatWith.image} className={styles.icon} layout="fill" alt="post" />
                            </div>
                            <div style={{ paddingLeft: "10px" }}>
                                {chatWith.nickname}
                            </div>
                        </div>
                        <div>
                            <Image src="/assets/info.png" width={22} height={22} alt="home" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.containerChat}>
                    {
                        chat && chat.messageDay.length > 0 && chat.messageDay.map((messagesDay, index: number) => {
                            return <div key={index}>
                                <p className={styles.dateChat}><small>{messagesDay.date}</small></p>
                                {
                                    messagesDay.messages.length > 0 && messagesDay.messages.map((message, index: number) => {
                                        return <div className={styles.messageContainer} key={index}>
                                            <div className={`${styles.messageChat} ${message.me ? styles.messageMe : styles.messageFriend}`}>
                                                {message.message}
                                            </div> 
                                        </div>
                                    })
                                }
                            </div>
                        })

                    }
                    <div className={styles.inputContainer}>
                        <div style={{ cursor: "pointer" }}>
                            <Image src="/assets/smile.png" width={28} height={28} alt="home" />
                        </div>
                        <input className={styles.input} placeholder="Enviar un mensaje..." value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }} />
                        <div className={styles.iconInput}>
                            <div>
                                <Image src="/assets/image.png" width={32} height={32} alt="home" />
                            </div>
                            <div>
                                <Image src="/assets/heart.png" width={32} height={32} alt="home" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); else {
        return <div className={styles.containerChat}>
            <div className={styles.centerContent}>
                <Image src="/assets/message.png" width={32} height={32} alt="home" />
                <h2>Tus mensajes</h2>
                <p>Envía fotos y mensajes privados a un amigo o un grupo.</p>
            </div>
        </div>
    }
}