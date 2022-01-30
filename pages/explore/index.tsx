import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import styles from "./../../styles/Explore.module.css";

const Messages: NextPage = () => {
    const [images, setImages] = useState([
        "https://random.imagecdn.app/300/300",
        "/assets/gif1.gif",
        "https://random.imagecdn.app/300/301",
        "https://random.imagecdn.app/301/300",
        "https://random.imagecdn.app/302/300",
        "https://random.imagecdn.app/302/302",
        "https://random.imagecdn.app/301/302",
        "https://random.imagecdn.app/304/302",
        "https://random.imagecdn.app/303/300",
        "https://random.imagecdn.app/306/306",
        "https://random.imagecdn.app/305/305",
        "https://random.imagecdn.app/304/302",
        "https://random.imagecdn.app/307/302",
        "https://random.imagecdn.app/307/307",
        "https://random.imagecdn.app/302/307",
        "https://random.imagecdn.app/303/306",
        "https://random.imagecdn.app/303/307",
        "https://random.imagecdn.app/304/308",
        "https://random.imagecdn.app/303/307",
        "https://random.imagecdn.app/300/300",
        "https://random.imagecdn.app/300/301",
        "https://random.imagecdn.app/301/300",
        "https://random.imagecdn.app/302/300",
        "https://random.imagecdn.app/302/302",
        "https://random.imagecdn.app/301/302",
        "https://random.imagecdn.app/304/302",
        "https://random.imagecdn.app/306/306",
        "https://random.imagecdn.app/305/305",
        "https://random.imagecdn.app/304/302",
        "https://random.imagecdn.app/307/302",
        "https://random.imagecdn.app/307/307",
        "https://random.imagecdn.app/302/307",
        "https://random.imagecdn.app/303/306",
        "https://random.imagecdn.app/303/307",
        "https://random.imagecdn.app/304/308",
        "https://random.imagecdn.app/303/307",
    ])

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {
                    images.length > 0 && images.map((image: string, index) => {
                        return <div className={`${(index == 1 || index == 10 || index == 19) && styles.itemTwoColumsRows}`} key={index}>
                            <Image src={image} height={index == 1 || index == 10 || index == 19 ? 480 : 240} width={index == 1 || index == 10 || index == 19 ? 480 : 240} alt="content" />
                        </div>
                    })
                }
            </div>
        </main>
    )
}
export default Messages