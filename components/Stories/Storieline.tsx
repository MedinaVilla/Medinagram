import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./../../styles/Storyline.module.css";


export const Storieline: React.FC<any> = ({ goNextSlide, story, page, index }) => {

    const progressContainer = useRef<HTMLDivElement>(null);
    const status = useRef<HTMLDivElement>(null);
    const progress = useRef<any>();
    const [actualStory, setActualStory] = useState(0);
    const [view, setView] = useState(false);
    const [play, setPlay] = useState(true);

    const clickHandler = (e: any) => {
        if (progressContainer && progressContainer.current) {
            const index = Math.floor(e.offsetX / (progressContainer.current.clientWidth / 3));
            if (status && status.current) {
                status.current.innerText = "Clicked " + index;
            }
        }
    }

    useEffect(() => {
        if (progressContainer && progressContainer.current)
            progressContainer.current.addEventListener("click", clickHandler, false);
    })

    const intervalRef = useRef<any>();

    useEffect(() => {
        if (play === true && page == index) {
            let a = setInterval(function () {
                if (actualStory < progress.current.length) {
                    progress.current[actualStory].value = progress.current[actualStory].value + 1;
                    if (progress.current[actualStory].value == 100) {
                        setActualStory(actualStory + 1);
                        clearInterval(a);
                    }
                }
            }, 50);
            intervalRef.current = a;
        } else clearInterval(intervalRef.current);
    }, [actualStory, index, page, play])

    useEffect(() => {
        if (page == index)
            setView(true)
        else
            setView(false);
    }, [index, page])

    useEffect(() => {
        if (actualStory == story.image.length){
            progress.current[actualStory-1].value = 0;
            setActualStory(actualStory-1);
            goNextSlide();

        }
    }, [actualStory, goNextSlide, story.image.length])

    const storiesPausedPlay = () => {
        if (play === true) {
            setPlay(false);
            clearInterval(intervalRef.current);
        } else {
            setPlay(true);
        }
    }

    return (
        <div className={styles.itemCarousel}>
            <div style={{ backgroundImage: `url(${story.image[actualStory]})`, height: "500px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                {/* <Image src="/assets/storyline1.jfif" width={500} height={500} alt="as" /> */}
                <div className={styles.backgroundHeader}>
                    <div ref={progressContainer} className={styles.progressContainer}>
                        {story.image.length > 0 && story.image.map((image: any, index: number) => {
                            progress.current = []
                            return <progress key={index} ref={el => el ? progress.current[index] = el : ""} className={`${styles.progress}`} value="0" max="100"></progress>
                        })}
                    </div>
                    <div className={styles.headerStory}>
                        <div className={styles.profile}>
                            <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                                <Image src="https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s320x320/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ZIEVOGYpSUIAX8hTrTa&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT96lC7REFqnj90RLh8_mq-LG5AkxwwYq9QZMleCvQQrzQ&oe=6207EABA&_nc_sid=7bff83" layout="fill" alt="home" />
                            </div>
                            <div className={styles.nickname}>
                                medinavilla
                            </div>
                            <div className={styles.timeago}>
                                6h
                            </div>
                        </div>
                        <div className={styles.icons}>
                            <div>
                                <Image onClick={() => storiesPausedPlay()} src="/assets/pause.png" width={28} height={28} alt="compass" />
                            </div>
                            <div>
                                <Image src="/assets/speaker.png" width={24} height={22} alt="compass" />
                            </div>
                            <div>
                                <Image src="/assets/three-points.png" width={28} height={28} alt="compass" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}