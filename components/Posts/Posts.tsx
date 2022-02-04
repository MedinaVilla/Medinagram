import React, { Fragment, useEffect, useState } from "react";
import styles from "./../../styles/Posts.module.css";
import { PostItem } from "./PostItem";
interface IPost {
    idPost: string;
    user: {
        name: string,
        image: string,
        storyStatus: number
    };
    content: {
        media: {
            image?: string
            video?: string
        },
        description: string,
        date: string
    };
}

export const Posts: React.FC<{}> = () => {
    const [posts, setPosts] = useState<IPost[]>([{
        idPost: "1",
        user: {
            name: "bennyIbarraOfficial",
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg",
            storyStatus: 1
        },
        content: {
            media: {
                image: "/assets/post1.jpg"
            },
            description: "Muy agradecido con ustedes por hacer esto posible. No tengo palabras para describir lo que sentí arriba del escenario. Los quiero a todos.",
            date: "HACE 23 MINUTOS"
        }
    },
    {
        idPost: "2",
        user: {
            name: "annylu",
            image: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg?ver=6",
            storyStatus: 0
        },
        content: {
            media: {
                image: "/assets/post2.jpg"
            },
            description: "Sonríe, la vida solo se vive una vez",
            date: "HACE UN DÍA"
        }
    },
    {
        idPost: "3",
        user: {
            name: "medinavilla",
            image: "https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Rnc7jXLZ71UAX9f0vx-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT97zvuWfTwKeljU8WkFcqngUwdKaK2y_Iopn3yZMKjEow&oe=61F1ACAF&_nc_sid=7bff83",
            storyStatus: 1
        },
        content: {
            media: {
                image: "/assets/post3.jpg"
            },
            description: '"Es más la espera, cuando tienes la cara al sol."',
            date: "HACE 1 DIA"
        }
    },
    {
        idPost: "4",
        user: {
            name: "malditanerea",
            image: "https://www.centroculturalmigueldelibes.com/assets/tortuga-1-630x630.jpg",
            storyStatus: 1
        },
        content: {
            media: {
                image: "/assets/post4.jpg"
            },
            description: "Nuevo sencillo ya disponible en nuestros medios de música.",
            date: "HACE 2 DIAS"
        }
    },
    {
        idPost: "5",
        user: {
            name: "andreePuig",
            image: "https://random.imagecdn.app/204/203",
            storyStatus: 2
        },
        content: {
            media: {
                image: "https://random.imagecdn.app/500/500"
            },
            description: "Feliz viernes gente madrugadora",
            date: "HACE 2 DIAS"
        }
    }
    ]);

    useEffect(() => {
        //API Call
    }, [])

    return (
        <div className={styles.container}>
            {
                posts.length > 0 && posts.map((post: IPost, index: number) => {
                    return (
                        <Fragment key={index}><PostItem {...post} /></Fragment>
                    )
                })
            }
        </div>)
}