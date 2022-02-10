import React, { useEffect, useRef, useState } from "react";
import styles from "./../../../../styles/Storyline.module.css";
import type { NextPage } from 'next';
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Storieline } from "../../../../components/Stories/Storieline";
import Link from "next/link";
import { useRouter } from "next/router";


interface IStory {
    id: string,
    user:{
        image:string,
        nickname: string
    }, 
    timeago:string,
    image: string[]

}

const Storyline: NextPage = () => {
    const [actualPage, setActualPage] = useState(0);
    const [miniStoryPosition, setMiniStoryPosition] = useState<number>(0);

    const sliderRef = useRef<any>();

    const router = useRouter();
    const { user } = router.query;
    const [loading, setLoading] = useState(true);
    const [prevStory, setPrevStory] = useState(false);

    const [storiesUser, setStoriesUser] = useState<IStory[]>([
        {
            id: "2767297324739821285",
            user: {
                image: "/assets/profile.jpg",
                nickname: "medinavilla"
            },
            timeago: "15m",
            image: ["/assets/storyline4.jpg", "/assets/storyline5.jpg"]
        }, {
            id: "3865835735675674285",
            user: {
                image: "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
                nickname: "luciip23"
            },
            timeago: "38m",
            image: ["/assets/storyline2.png", "/assets/storyline1.jfif", "/assets/storyline3.jpg"]
        },
        {
            id: "112346743734d5743574",
            user: {
                image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
                nickname: "bennyIbarraOfficial"
            },
            timeago: "1h",
            image: ["/assets/storyline6.jpg"]
        },
        {
            id: "21431234232432432",
            user: {
                image: "https://random.imagecdn.app/200/200",
                nickname: "andreePuig"
            },
            timeago: "4h",
            image: ["/assets/storyline7.jpg"]
        },
        {
            id: "122241243734d5743574",
            user: {
                image: "https://random.imagecdn.app/201/200",
                nickname: "frases_de_motivacion"
            },
            timeago: "6h",
            image: ["/assets/storyline3.jpg", "/assets/storyline2.png", "/assets/storyline1.jfif"]
        },

    ])

    useEffect(() => {
        let index = -1;
        storiesUser.find(function (story, i) {
            if (story.user.nickname === user) {
                index = i;
                return i;
            }
        });
        if (index >= 0) {
            setActualPage(index);
            setLoading(false);
        } else{
            setLoading(false);
        }

    }, [storiesUser, user])

    var settings = {
        centerMode: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        // focusOnSelect: true,
        initialSlide: actualPage,
        arrows: false,
        draggable: false,
        variableWidth: true,
        adaptiveHeight: true,
    };

    const beforeChange = (rightDirection: boolean, lastIndex: number) => {
        if (rightDirection && sliderRef.current) {
            setMiniStoryPosition(0);
            sliderRef.current.slickGoTo(actualPage + 1)
            setActualPage(actualPage + 1)
        } else {
            if (sliderRef.current) {
                
                setMiniStoryPosition(lastIndex - 1);
                sliderRef.current.slickGoTo(actualPage - 1)
                setActualPage(actualPage - 1)
                setPrevStory(true);
            }

        }
    }

    const updateMiniStory = () => {
        setMiniStoryPosition(miniStoryPosition + 1);
    }

    const childFunc = React.useRef<any[]>([]);

    if (!loading) {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/" passHref={true}><Image className={styles.logo} src="/assets/logoMBlack.png" width="125" height="35" alt="logo" /></Link>
                    <Link href="/" passHref={true}><div style={{ cursor: "pointer", zIndex: "9999" }}>X</div></Link>
                </div>
                <div>
                    <div className={styles.body}>
                        <Slider ref={sliderRef}  {...settings}>
                            {storiesUser.length > 0 && storiesUser.map((story, index) => {
                                return <React.Fragment key={index}
                                ><Storieline childFunc={(firstCallback: Function, secondCallback: Function) => { childFunc.current[index] = {}; childFunc.current[index].leftClick = firstCallback; childFunc.current[index].rightClick = secondCallback; }} goNextSlide={(value: boolean, lastIndex: number) => { beforeChange(value, lastIndex) }} story={story} page={actualPage} index={index} updateMiniStory={updateMiniStory} prevStory={prevStory} cleanPrevStory={()=>setPrevStory(false)}  />
                                </React.Fragment>
                            })}
                        </Slider>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        {actualPage === 0 && miniStoryPosition === 0 ? "" :
                            <div onClick={() => { childFunc.current ? childFunc.current[actualPage].leftClick() : "" }} style={{ cursor: "pointer", width: 30, height: 30, position: "fixed", top: "400px", left: "540px" }}>
                                <Image src="/assets/left2.png" layout="fill" alt="right" />
                            </div>
                        }
                        {actualPage === storiesUser.length - 1 && miniStoryPosition === storiesUser[storiesUser.length - 1].image.length - 1 ? "" :
                            <div onClick={() => { childFunc.current ? childFunc.current[actualPage].rightClick() : "" }} style={{ cursor: "pointer", width: 30, height: 30, position: "fixed", top: "400px", right: "540px" }}>
                                <Image src="/assets/right2.png" layout="fill" alt="right" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    } else return <div>Loading...</div>;
}
export default Storyline;