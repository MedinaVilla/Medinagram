import React, { useEffect, useRef, useState } from "react";
import styles from "./../../../../styles/Storyline.module.css";
import type { NextPage } from 'next';
import Image from "next/image";

const Storyline: NextPage = () => {
    const progressContainer = useRef<HTMLDivElement>(null);
    const status = useRef<HTMLDivElement>(null);
    const [storiesUser, setStoriesUser] = useState([
        {
            id: "2767297324739821285",
        }, {
            id: "3865835735675674285"
        },
        {
            id: "1623467437345743574"
        }
    ])

    const progress = useRef<any>();
    const [actualStory, setActualStory] = useState(0);
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
        if (play === true) {
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
        }
    }, [actualStory, play])


    const storiesPausedPlay = () => {
        if (play === true) {
            setPlay(false);
            clearInterval(intervalRef.current);
        } else {
            setPlay(true);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src="/assets/logoMBlack.png" width="125" height="35" alt="logo" />
                X
            </div>
            <div>
                <div className={styles.pause}>
                    <div ref={progressContainer} className={styles.progressContainer}>
                        {storiesUser.length > 0 && storiesUser.map((story, index) => {
                            progress.current = []
                            if (index === 0)
                                return <progress ref={el => el ? progress.current[index] = el : ""} className={`${styles.progress}`} value="5" max="100"></progress>
                            else return <progress ref={el => el ? progress.current[index] = el : ""} className={`${styles.progress}`} value="0" max="100"></progress>
                        })}

                    </div>
                    <br />
                    <button onClick={() => storiesPausedPlay()}>Pausar</button>
                    <div ref={status} className={styles.status}></div>

                </div>
            </div>
        </div >
    )
}
export default Storyline;