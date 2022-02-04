import type { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from "./../../styles/Explore.module.css";

const GridProfile: NextPage = () => {
    const [images, setImages] = useState([
        "https://random.imagecdn.app/320/310",
        "https://random.imagecdn.app/302/341",
        "https://random.imagecdn.app/321/310",
        "https://random.imagecdn.app/362/320",
        "https://random.imagecdn.app/312/322",
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
    const router = useRouter()

    const redirect: Function = (image: string) => {
        localStorage.setItem("view_post", image);
        router.push("post/AMxm3Y5S")
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {
                    images.length > 0 && images.map((image: string, index) => {
                        return <div key={index}>
                            <Image onClick={() => { redirect(image) }} src={image} height={240} width={240} alt="content" />
                        </div>
                    })
                }
            </div>
        </main>
    )
}
export default GridProfile;