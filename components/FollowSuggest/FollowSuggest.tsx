import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "./../../styles/FollowSuggest.module.css";
interface ISuggest {
    nickname: string
    image: string
    friends: string[]
}

export const FollowSuggest: React.FC<{}> = () => {
    const [profile, setProfile] = useState<any>(
        {
            nickname: "medinavilla",
            name: "Medina",
            image: "/assets/profile.jpg"
        }
    )
    const [suggests, setSuggests] = useState<ISuggest[]>([
        {
            nickname: "mark_zuckerberg",
            image: "https://backend.artreview.com/wp-content/uploads/2021/11/square-Mark-Zuckerberg_Courtesy-Facebook.jpg",
            friends: ["madribd", "stephenGrider23", "Aysikomono"]
        },
        {
            nickname: "ste.grider25",
            image: "https://avatars.githubusercontent.com/u/5003903?v=4",
            friends: ["arturo_32", "stephenGrider23", "Aysikomono", "yuca_cast"]
        },
        {
            nickname: "josemadero",
            image: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/e/a/b/ceabcbb3f29ed18a12dab89a317862b4.jpg",
            friends: ["marlaHdez23", "stephenGrider23", "Aysikomono", "yuca_cast", "gelaciin2"]
        },
        {
            nickname: "malditanerea",
            image: "https://www.centroculturalmigueldelibes.com/assets/tortuga-1-630x630.jpg",
            friends: ["madribd", "stephenGrider23", "Aysikomono"]
        }
    ])

    return (
        <div className={styles.container}>
            <div className={styles.profileSection}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                    <Image src={profile.image} layout="fill" alt="profile" />
                </div>
                <div className={styles.info}>
                    <p ><strong>{profile.nickname}</strong> <br /><span className={styles.nickname}>{profile.name}</span></p>
                </div>
                <div>
                    <p className={styles.link}>Cambiar</p>
                </div>
            </div>
            <div className={styles.suggestSection}>

                <p ><span className={styles.subtitleSuggest}>Sugerencias para tí</span> <span style={{ float: "right", color: "#26262", fontWeight: "500", fontSize: "10px" }}>Ver todo</span></p>
                {
                    suggests.length > 0 && suggests.map((suggest: ISuggest, index: number) => {
                        return (
                            <div key={index} className={styles.profileSection}>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                                    <Image src={suggest.image} layout="fill" alt="profile" objectFit="cover"  />
                                </div>
                                <div className={styles.info}>
                                    <p style={{ color: "#262626", textOverflow: "ellipsis", overflow: "hidden" }}><strong>{suggest.nickname}</strong> <br /> <span className={styles.followFriends}>{suggest.friends.length > 0 && <Fragment key={index}>{suggest.friends[0]} y {suggest.friends.length - 1} siguen esta cuenta</Fragment>}</span></p>
                                </div>
                                <div>
                                    <p className={styles.link}>Seguir</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.aboutSection}>
                <p className={styles.aboutLinks}>Información Ayuda Prensa API Empleo Privacidad Condiciones Ubicaciones Cuentas destacadas Hashtags Idioma Español
                    <br /><br />
                    © 2022 MEDINAGRAM by MEDINAVILLA
                </p>
            </div>
        </div>
    )
}