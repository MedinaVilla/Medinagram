import type { NextPage } from 'next'
import Image from 'next/image';
import { useEffect, useState } from 'react';

import 'react-responsive-modal/styles.css';
import styles from "./../../../styles/Post.module.css";


const Post: NextPage = () => {
    const [viewPost, setViewPost] = useState<string>("");

    let post = {
        idPost: "1",
        user: {
            name: "bennyIbarraOfficial",
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            storyStatus: 1
        },
        content: {
            media: {
                image: "https://1frase.com/fotos/d3/d3d9446802a44259755d38e6d163e820.jpg"
            },
            description: "La verdad es que sí vale la pena esta frase. Atentos amigos",
            date: "HACE 23 MINUTOS"
        }
    }

    useEffect(() => {
        const view_postImage = localStorage.getItem("view_post");
        if (view_postImage) {
            setViewPost(view_postImage);
        }

    }, [])

    return (
        <div className={styles.card}>
            <div style={{ width: "500px", height: "500px", position: 'relative' }}>
                {viewPost ? <Image src={viewPost} layout="fill" alt="post" /> : post.content.media.image ? <Image src={post.content.media.image} layout="fill" alt="post" /> : ""}
            </div>
            <div className={styles.bottom}>
                <div>
                    <div className={styles.header}>
                        <div className={post.user.storyStatus === 1 ? styles.imageNotViewed : post.user.storyStatus === 2 ? styles.imageViewed : ""} style={{ width: "28px", height: "28px", borderRadius: "50%", overflow: 'hidden', position: 'relative' }}>
                            <Image src={post.user.image} className={styles.icon} layout="fill" alt="post" />
                        </div>
                        <div className={styles.nameUser}>
                            {post.user.name} • <span className={styles.link}> Seguir </span>
                        </div>
                        <div>
                            <Image src="/assets/three-points.png" className={styles.icon} height={24} width={24} alt="threepoints" />
                        </div>
                    </div>
                    <hr style={{    border: "0.5px solid rgb(231, 231, 231)",backgroundColor: "rgb(231, 231, 231"}} /><br />
                    {/* Description content*/}
                    <div className={styles.descriptionContainer}>
                        <div className={post.user.storyStatus === 1 ? styles.imageNotViewed : post.user.storyStatus === 2 ? styles.imageViewed : ""} style={{ width: "28px", height: "28px", borderRadius: "50%", overflow: 'hidden', position: 'relative', paddingRight: "28px" }}>
                            <Image src={post.user.image} className={styles.icon} layout="fill" alt="post" />
                        </div>

                        <div className={styles.description}>
                            <span className={styles.nameUser}>{post.user.name} </span> La verdad es que sí vale la pena esta frase. Atentos amigos
                        </div>
                    </div>
                </div>
                <div>
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
        </div>
    )
}
export default Post;