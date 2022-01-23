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
            nickname: "MedinaVilla",
            name: "Medina",
            image: "https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Rnc7jXLZ71UAX9f0vx-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT97zvuWfTwKeljU8WkFcqngUwdKaK2y_Iopn3yZMKjEow&oe=61F1ACAF&_nc_sid=7bff83"
        }
    )
    const [suggests, setSuggests] = useState<ISuggest[]>([
        {
            nickname: "mark_zuckerberg",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
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
                    <p><strong>{profile.nickname}</strong> <br />{profile.name}</p>
                </div>
                <div>
                    <p className={styles.link}>Cambiar</p>
                </div>
            </div>
            <div className={styles.suggestSection}>
                <p className={styles.subtitleSuggest}>Sugerencias para tí</p>
                {
                    suggests.length > 0 && suggests.map((suggest: ISuggest, index: number) => {
                        return (
                            <div key={index} className={styles.profileSection}>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                                    <Image src={suggest.image} layout="fill" alt="profile" />
                                </div>
                                <div className={styles.info}>
                                    <p style={{ textOverflow: "ellipsis" }}><strong>{suggest.nickname}</strong> <br />{suggest.friends.length > 0 && <Fragment key={index}>{suggest.friends[0]} y {suggest.friends.length - 1} siguen esta cuenta</Fragment>}</p>
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