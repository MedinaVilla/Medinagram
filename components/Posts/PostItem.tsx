import Image from "next/image";
import React from "react";
import styles from "./../../styles/PostItem.module.css";


interface IPost {
    idPost: string;
    user: {
        name: string,
        image: string
    };
    content: {
        media: {
            image?: string
            video?: string
        },
        description: string,
        date: Date
    };
}

export const PostItem: React.FC<IPost> = (post: IPost) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", overflow: 'hidden', position: 'relative' }}>
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
                <div style={{ width: "100%", height: "400px", position: 'relative' }}>
                    {post.content.media.image ? <Image src={post.content.media.image} layout="fill" alt="post" /> : ""}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.buttonGroup}>
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
                <p>
                    <strong>144 me gusta</strong>
                </p>
                <p>
                    <strong>{post.user.name}:</strong> {post.content.description}
                </p>
                <p>
                    <small>{post.content.date.toISOString()}:</small>
                </p>
            </div>
            <br />
        </div>
    )
}