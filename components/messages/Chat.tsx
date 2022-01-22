import Image from "next/image";
import React from "react";
import styles from "./../../styles/Chat.module.css";

export const Chat: React.FC<any> = ({ chatWith }) => {
    if (chatWith)
        return (
            <div>
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
                    Mi chat con {chatWith.nickname}
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