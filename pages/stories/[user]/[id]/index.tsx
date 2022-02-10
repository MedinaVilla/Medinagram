import React, { useEffect, useRef, useState } from "react";
import styles from "./../../../../styles/Storyline.module.css";
import type { NextPage } from 'next';
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Storieline } from "../../../../components/Stories/Storieline";


const Storyline: NextPage = () => {
    const [actualPage, setActualPage] = useState(0);
    const [miniStoryPosition, setMiniStoryPosition] = useState<number>(0);

    const sliderRef = useRef<any>();

    const [storiesUser, setStoriesUser] = useState([
        {
            id: "2767297324739821285",
            image: ["/assets/storyline1.jfif", "/assets/storyline2.png", "/assets/storyline3.jpg"]
        }, {
            id: "3865835735675674285",
            image: ["/assets/storyline2.png", "/assets/storyline1.jfif", "/assets/storyline3.jpg"]
        },
        {
            id: "162346743734d5743574",
            image: ["/assets/storyline3.jpg", "/assets/storyline2.png", "/assets/storyline1.jfif"]
        },
       
    ])

    var settings = {
        centerMode: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        // focusOnSelect: true,
        arrows: false,
        draggable: false,
        variableWidth: true,
        adaptiveHeight: true,
    };

    const beforeChange = (rightDirection: boolean) => {
        if (rightDirection) {
            setMiniStoryPosition(0);
            setActualPage(actualPage + 1)
            sliderRef.current.slickNext()
        } else {
            setMiniStoryPosition(storiesUser.length - 1);
            sliderRef.current.slickPrev();
            setActualPage(actualPage - 1)
        }
    }

    const updateMiniStory = () => {
            setMiniStoryPosition(miniStoryPosition + 1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image className={styles.logo} src="/assets/logoMBlack.png" width="125" height="35" alt="logo" />
                <div style={{ cursor: "pointer" }}>X</div>
            </div>
            <div>
                <div className={styles.body}>
                    <Slider ref={sliderRef}  {...settings}>
                        {storiesUser.length > 0 && storiesUser.map((story, index) => {
                            return <React.Fragment key={index}
                            ><Storieline changeStory={miniStoryPosition} goNextSlide={(value: boolean) => { beforeChange(value) }} story={story} page={actualPage} index={index} updateMiniStory={updateMiniStory} />
                            </React.Fragment>
                        })}
                    </Slider>
                </div>
                <div style={{ textAlign: "center" }}>
                    {actualPage === 0 && miniStoryPosition === 0 ? "" :
                        <div onClick={() => { setMiniStoryPosition(miniStoryPosition - 1) }} style={{ cursor: "pointer", width: 30, height: 30, position: "absolute", top: "400px", left: "540px" }}>
                            <Image src="/assets/left.png" layout="fill" alt="right" />
                        </div>
                    }
                    {actualPage === storiesUser.length - 1 && miniStoryPosition === storiesUser[storiesUser.length - 1].image.length - 1 ? "" :
                        <div onClick={() => { setMiniStoryPosition(miniStoryPosition + 1) }} style={{ cursor: "pointer", width: 30, height: 30, position: "absolute", top: "400px", right: "540px" }}>
                            <Image src="/assets/right.jpg" layout="fill" alt="right" />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
export default Storyline;