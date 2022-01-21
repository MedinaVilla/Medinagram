import Image from "next/image";
import React, { useState } from "react";
import styles from "./../../styles/Stories.module.css";

interface IStorie {
    image: string,
    view: boolean
}

export const Stories: React.FC<{}> = () => {
    const [stories, setStories] = useState<IStorie[]>([
        {
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            view: false
        },
        {
            image: "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
            view: false
        },
        {
            image: "https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Rnc7jXLZ71UAX9f0vx-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT97zvuWfTwKeljU8WkFcqngUwdKaK2y_Iopn3yZMKjEow&oe=61F1ACAF&_nc_sid=7bff83",
            view: false
        },
        {
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            view: false
        },
        {
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            view: false
        },
        {
            image: "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
            view: false
        },
        {
            image: "https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Rnc7jXLZ71UAX9f0vx-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT97zvuWfTwKeljU8WkFcqngUwdKaK2y_Iopn3yZMKjEow&oe=61F1ACAF&_nc_sid=7bff83",
            view: false
        },
        {
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            view: false
        }
    ]);

    return (
        <div className={styles.container}>
            {stories.length > 0 && stories.map((storie: IStorie, index: number) => {
                return (
                    <div key={index}>
                        <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: 'hidden', position:"relative" }}>
                            <Image src={storie.image}  layout="fill" alt="home" />
                        </div>
                    </div>

                )

            })}

        </div>
    )
}