import Image from "next/image";
import React, { useState } from "react";
import styles from "./../../styles/Stories.module.css";
interface IStorie {
    nickname: string
    image: string,
    view: boolean
}

export const Stories: React.FC<{}> = () => {
    const [stories, setStories] = useState<IStorie[]>([
        {
            nickname: "medinavilla",
            image: "/assets/profile.jpg",
            view: false
        },
        {
            nickname: "luciip23",
            image: "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
            view: false
        },
        {
            nickname: "bennyIbarraOfficial",
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            view: false
        },
        {
            nickname: "andreePuig",
            image: "https://random.imagecdn.app/200/200",
            view: true
        },
        {
            nickname: "frases_de_motivacion",
            image: "https://random.imagecdn.app/201/200",
            view: true
        },
        {
            nickname: "andreac.toledo",
            image: "https://random.imagecdn.app/202/201",
            view: true
        },
        {
            nickname: "lahoradelapapa",
            image: "https://random.imagecdn.app/202/202",
            view: true
        },
        {
            nickname: "anonymous",
            image: "https://random.imagecdn.app/204/203",
            view: true
        }
    ]);

    return (
        <div className={styles.container}>
            {stories.length > 0 && stories.map((storie: IStorie, index: number) => {
                return (
                    <div key={index}>
                        <div className={`${storie.view ? styles.imageViewed : styles.imageNotViewed}`} style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                            <Image src={storie.image} layout="fill" alt="home" />
                        </div>
                        <div className={styles.nickname}>{storie.nickname}</div>

                    </div>
                )
            })}

        </div>
    )
}