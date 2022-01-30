import Image from "next/image";
import React, { useState } from "react";
import styles from "./../../styles/MyStories.module.css";
interface IStorie {
    nickname: string
    image: string,
    view: boolean
}

export const MyStories: React.FC<{}> = () => {
    const [stories, setStories] = useState<IStorie[]>([
        {
            nickname: "IPN",
            image: "/assets/story1.png",
            view: false
        },
        {
            nickname: "i dont know",
            image: "/assets/story2.jpg",
            view: false
        },
    ]);

    return (
        <div className={styles.container}>
            {stories.length > 0 && stories.map((storie: IStorie, index: number) => {
                return (
                    <div key={index}>
                        <div className={`${storie.view ? styles.imageViewed : styles.imageNotViewed}`} style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                            <Image src={storie.image} layout="fill" alt="home" />
                        </div>
                        <div className={styles.nickname}>{storie.nickname}</div>

                    </div>
                )
            })}

        </div>
    )
}