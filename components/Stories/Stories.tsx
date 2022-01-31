import Image from "next/image";
import React, { useRef, useState } from "react";
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
            nickname: "AB",
            image: "https://random.imagecdn.app/204/203",
            view: true
        },
        {
            nickname: "BL",
            image: "https://random.imagecdn.app/208/207",
            view: true
        },
        {
            nickname: "always",
            image: "https://random.imagecdn.app/209/207",
            view: true
        },
        {
            nickname: "abril974",
            image: "https://random.imagecdn.app/202/199",
            view: true
        },
        {
            nickname: "madribd",
            image: "https://random.imagecdn.app/201/199",
            view: true
        },
        {
            nickname: "medina_fans",
            image: "https://random.imagecdn.app/201/206",
            view: true
        }
    ]);
    const ref = useRef<any>(null); 

    const scroll = (scrollOffset:number) => {
        console.log("scrolling")
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <div>
            <div onClick={()=>{scroll(-160)}}  className={styles.leftArrow}>
                <Image src="/assets/left.png" width={20} height={20} alt="right" />
            </div>
            <div className={styles.container} ref={ref}>
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
            <div onClick={()=>{scroll(160)}} className={styles.rightArrow}>
                <Image src="/assets/right.png" layout="fill" alt="right" />
            </div>
        </div>
    )
}