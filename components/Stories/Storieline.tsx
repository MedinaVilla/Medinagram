import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./../../styles/Storyline.module.css";


export const Storieline: React.FC<any> = ({ changeStory, goNextSlide, story, page, index, updateMiniStory }) => {

    const progress = useRef<any>();
    const [actualStory, setActualStory] = useState(0);
    const [play, setPlay] = useState(true);

    const intervalRef = useRef<any>();

    const useHasChanged = (val: any) => {
        const prevVal = usePrevious(val)
        if (prevVal === undefined) return null; else
            return prevVal! < val;
    }

    const usePrevious = (value: any) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const goToRightDirection = useHasChanged(changeStory)

    useEffect(() => {
        if (play === true && page == index && actualStory >= 0) {
            let a = setInterval(function () {
                if (actualStory < progress.current.length) {
                    progress.current[actualStory].value = progress.current[actualStory].value + 1;
                    if (progress.current[actualStory].value == 100) {
                        if (actualStory == progress.current.length - 1) {
                           
                            clearInterval(a);
                            goNextSlide(true);
                        } else {
                            updateMiniStory();
                            setActualStory(actualStory + 1);
                            clearInterval(a);
                        }
                    }
                }
            }, 50);
            intervalRef.current = a;
        } else clearInterval(intervalRef.current);
    }, [actualStory, index, page, play])


    useEffect(() => {
        if (page == index) { // Se encuentra activa la historia
            if (changeStory < progress.current.length && changeStory >= 0) {
                if (actualStory + 1 === progress.current.length) {
                    if (goToRightDirection) {
                        progress.current[actualStory].value = 0;
                    } else {
                        progress.current[actualStory].value = 0;
                        progress.current[actualStory - 1].value = 0;
                        clearInterval(intervalRef.current);
                        setActualStory(actualStory - 1)
                    }
                } else
                    if (goToRightDirection) {
                        progress.current[actualStory].value = 100;
                    } else {
                        if (actualStory > 0) {
                            progress.current[actualStory].value = 0;
                            progress.current[actualStory - 1].value = 0;
                            clearInterval(intervalRef.current);
                            setActualStory(actualStory - 1)
                        }
                    }
            } else {
                if (changeStory === progress.current.length) {
                    progress.current[actualStory].value = 100;
                    goNextSlide(true);
                } else {
                    progress.current[actualStory].value = 0;
                    clearInterval(intervalRef.current);
                    goNextSlide(false);

                }
            }

        }
    }, [changeStory, index, page,])


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
                    <div className={styles.progressContainer}>
                        {story.image.length > 0 && story.image.map((image: any, index: number) => {
                            progress.current = []
                            return <progress key={index} ref={el => el ? progress.current[index] = el : ""} className={`${styles.progress}`} value="0" max="100"></progress>
                        })}
                    </div>
                    <div className={styles.headerStory}>
                        <div className={styles.profile}>
                            <div style={{ width: "36px", height: "36px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
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
                                <Image onClick={() => storiesPausedPlay()} src="/assets/pause.png" width={24} height={24} alt="compass" />
                            </div>
                            <div>
                                <Image src="/assets/speaker.png" width={20} height={17} alt="compass" />
                            </div>
                            <div>
                                <Image src="/assets/three-points.png" width={24} height={24} alt="compass" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}