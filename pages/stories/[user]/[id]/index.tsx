import React, { useEffect, useRef, useState } from "react";
import styles from "./../../../../styles/Storyline.module.css";
import type { NextPage } from 'next';
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slickNext from "react-slick";
import { Storieline } from "../../../../components/Stories/Storieline";


const Storyline: NextPage = () => {
    const [actualPage, setActualPage] = useState(0);
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
            id: "1623467437345743574",
            image: ["/assets/storyline3.jpg", "/assets/storyline2.png", "/assets/storyline1.jfif"]
        }
    ])

    var settings = {
        centerMode: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        focusOnSelect: true,

        centerPadding: '500px',
        draggable: false,
        variableWidth: true,
        adaptiveHeight: true,
        beforeChange: (pagePrev: number, pageNew: number) => { setActualPage(pageNew) }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src="/assets/logoMBlack.png" width="125" height="35" alt="logo" />
                X
            </div>
            <div>
                <div className={styles.body}>

                    <Slider ref={sliderRef}  {...settings}>
                        {storiesUser.length > 0 && storiesUser.map((story, index) => {
                            return <React.Fragment key={index}><Storieline goNextSlide={() => { sliderRef.current.slickNext() }} story={story} page={actualPage} index={index} /> </React.Fragment>
                        })}
                    </Slider>
                </div>
            </div>
        </div >
    )
}
export default Storyline;