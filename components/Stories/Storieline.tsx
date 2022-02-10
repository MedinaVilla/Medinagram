import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./../../styles/Storyline.module.css";


interface IProps {
    id: string,
    user: {
        image: string,
        nickname: string
    },
    timeago: string,
    image: string[]

}

export const Storieline: React.FC<any> = ({ childFunc, goNextSlide, story, page, index, updateMiniStory, prevStory, cleanPrevStory }) => {
    const progress = useRef<any>();
    const [actualStory, setActualStory] = useState(0);
    const [play, setPlay] = useState(true);

    const intervalRef = useRef<any>();

    useEffect(() => {
        function changeRightStory() {
            if (actualStory + 1 === progress.current.length - 1) {
                progress.current[actualStory].value = 100;
            } else {
                progress.current[actualStory].value = 100;
            }
        }

        function changeLeftStory() {
            if (actualStory === 0) {
                progress.current[actualStory].value = 0;
                clearInterval(intervalRef.current);
                goNextSlide(false, progress.current.length);

            } else {
                if (actualStory > 0) {
                    progress.current[actualStory].value = 0;
                    progress.current[actualStory - 1].value = 0;
                    clearInterval(intervalRef.current);
                    setActualStory(actualStory - 1)
                }
            }
        }
        childFunc(changeLeftStory, changeRightStory);
    }, [childFunc, goNextSlide, actualStory])

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualStory, index, page, play])

    useEffect(() => {
        if (page == index) {
            if (prevStory) {
                progress.current[actualStory].value = 0;
                cleanPrevStory();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cleanPrevStory, prevStory, page, index])


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
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
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
                                <Image onClick={() => storiesPausedPlay()} src="/assets/pause.png" width={24} height={24} alt="pause" />
                            </div>
                            <div>
                                <Image src="/assets/speaker.png" width={15} height={18} alt="speaker" />
                            </div>
                            <div>
                                <Image src="/assets/more.png" width={24} height={24} alt="more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}