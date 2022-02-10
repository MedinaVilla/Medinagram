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
                            goNextSlide(true, progress.current.length);
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
                    console.log(goToRightDirection)
                    if (goToRightDirection || actualStory === 0) {
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
                    goNextSlide(true, progress.current.length);
                } else {
                    progress.current[actualStory].value = 0;
                    clearInterval(intervalRef.current);
                    goNextSlide(false, progress.current.length);

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
                                <Image src={story.user.image} layout="fill" alt="home" />
                            </div>
                            <div className={styles.nickname}>
                                {story.user.nickname}
                            </div>
                            <div className={styles.timeago}>
                                {story.timeago}
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