import Image from "next/image";
import React from "react";
import styles from "./../../styles/PostItem.module.css";
interface IPost {
    idPost: string;
    user: {
        name: string,
        image: string,
        storyStatus: number
    };
    content: {
        media: {
            image?: string
            video?: string
        },
        description: string,
        date: string
    };
}

export const PostItem: React.FC<IPost> = (post: IPost) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header}>
                    <div className={post.user.storyStatus === 1 ? styles.imageNotViewed : post.user.storyStatus === 2 ? styles.imageViewed : ""} style={{ width: "28px", height: "28px", borderRadius: "50%", overflow: 'hidden', position: 'relative' }}>
                        <Image src={post.user.image} className={styles.icon} layout="fill" alt="post" />
                    </div>
                    <span className={styles.nameUser}>
                        {post.user.name}
                    </span>
                </div>
                <div>
                    <Image src="/assets/three-points.png" className={styles.icon} height={24} width={24} alt="threepoints" />
                </div>
            </div>
            <div>
                <div className={styles.postImage}>
                    {post.content.media.image ? <Image src={post.content.media.image} layout="fill" objectFit="cover" alt="post" /> : ""}
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <div className={styles.buttonGroup}>
                        <div className={styles.buttonGroupLeft}>
                            <div>
                                <Image src="/assets/heart.png" width={24} height={24} alt="home" />
                            </div>
                            <div>
                                <Image src="/assets/comment.png" width={24} height={24} alt="home" />
                            </div>
                            <div>
                                <Image src="/assets/message.png" width={24} height={24} alt="home" />
                            </div>
                        </div>
                        <div>
                            <Image src="/assets/save.png" width={26} height={24} alt="home" />
                        </div>
                    </div>
                    <p>
                        <strong>144 me gusta</strong>
                    </p>
                    <p>
                        <strong>{post.user.name}:</strong> {post.content.description}
                    </p>
                    <p>
                        <small>{post.content.date}</small>
                    </p>
                </div>
                <div className={styles.inputGroup}>
                    <div style={{ cursor: "pointer" }}>
                        <Image src="/assets/smile.png" width={24} height={24} alt="home" />
                    </div>
                    <input className={styles.input} placeholder="Enviar un mensaje..." value={""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }} />
                    <div className={styles.link}>
                        Publicar
                    </div>
                </div>
            </div>
        </div>
    )
}