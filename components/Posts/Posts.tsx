import React, { Fragment, useEffect, useState } from "react";
import styles from "./../../styles/Posts.module.css";
import { PostItem } from "./PostItem";

interface IPost {
    idPost: string;
    user: {
        name: string,
        image: string
    };
    content: {
        media: {
            image?: string
            video?: string
        },
        description: string,
        date: Date
    };
}

export const Posts: React.FC<{}> = () => {
    const [posts, setPosts] = useState<IPost[]>([{
        idPost: "1",
        user: {
            name: "bennyIbarraOfficial",
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg"
        },
        content: {
            media: {
                image: "https://uploads-ssl.webflow.com/61b36a9ff7cd65483c603817/61b36a9ff7cd658647603d33_frase-motivacional-steve-jobs.png"
            },
            description: "La verdad es que sí vale la pena esta frase. Atentos amigos",
            date: new Date()
        }
    },
    {
        idPost: "2",
        user: {
            name: "Any Lu",
            image: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg?ver=6"
        },
        content: {
            media: {
                image: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg?ver=6"
            },
            description: "Sonríe, la vida solo se vive una vez",
            date: new Date()
        }
    },
    {
        idPost: "3",
        user: {
            name: "Medina Villa",
            image: "https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Rnc7jXLZ71UAX9f0vx-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT97zvuWfTwKeljU8WkFcqngUwdKaK2y_Iopn3yZMKjEow&oe=61F1ACAF&_nc_sid=7bff83"
        },
        content: {
            media: {
                image: "https://1frase.com/fotos/d3/d3d9446802a44259755d38e6d163e820.jpg"
            },
            description: "Los imposibles también existen",
            date: new Date()
        }
    },
    {
        idPost: "4",
        user: {
            name: "Medina Villa",
            image: "https://pbs.twimg.com/profile_images/1426936466484043785/oVG9izi9_400x400.jpg"
        },
        content: {
            media: {
                image: "https://uploads-ssl.webflow.com/61b36a9ff7cd65483c603817/61b36a9ff7cd658647603d33_frase-motivacional-steve-jobs.png"
            },
            description: "La verdad es que sí vale la pena esta frase. Atentos amigos",
            date: new Date()
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