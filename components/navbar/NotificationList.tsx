import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./../../styles/NotificationList.module.css";

interface INotification {
    id: string,
    userFrom: {
        nickname: string,
        image: string
    }
    newFollow?: {
        link: string
        date: string
    }
    newLike?: {
        link: string,
        date: string
    }
    newComment?: {
        link: string,
        comment: string,
        date: string
    }
}

export const NotificationList: React.FC<{}> = () => {
    const [notifications, setNotifications] = useState<INotification[]>([]);

    useEffect(() => {
        //API Call Fetch notifications
        setNotifications([
            {
                id: "1",
                userFrom: {
                    nickname: "ste.grider",
                    image: "https://avatars.githubusercontent.com/u/5003903?v=4"
                },
                newFollow: {
                    link: "Link1",
                    date: "4d"
                }
            },
            {
                id: "2",
                userFrom: {
                    nickname: "leomessi_311",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg"
                },
                newComment: {
                    link: "Link1",
                    comment: "Ay papá, estás ON-FIRE bro:)",
                    date: "5d"
                }
            }, {
                id: "3",
                userFrom: {
                    nickname: "midudev",
                    image: "https://avatars.githubusercontent.com/u/1561955?v=4"
                },
                newLike: {
                    link: "Link1",
                    date: "2w"
                }
            },
            {
                id: "4",
                userFrom: {
                    nickname: "dvicioOfficial",
                    image: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2020/04/27/5ea73b026d99e.r_1588021512312.0-0-1801-896.jpeg"
                },
                newFollow: {
                    link: "Link1",
                    date: "1m"
                }
            }
        ])

    }, [])

    return (
        <div className={styles.container}>
            <p><strong>Anterior</strong></p>
            {
                notifications.length > 0 && notifications.map((notification: INotification, index: number) => {
                    return (
                        <div className={styles.notificationItem} key={index}>
                            <div style={{ width: "26px", height: "26px", borderRadius: "50%", overflow: 'hidden' }}>
                                <Image src={notification.userFrom.image} width={26} height={26} alt="home" />
                            </div>
                            <div className={styles.notificationContent}>
                                {notification.newFollow ? <p><strong>{notification.userFrom.nickname}</strong> empezó a seguirte</p> : notification.newComment ? <p><strong>{notification.userFrom.nickname}</strong> comentó: {notification.newComment.comment}</p> : notification.newLike ? <p>A <strong>{notification.userFrom.nickname}</strong> le gustó tu foto</p> : ""}
                            </div>
                            <div>
                                {notification.newFollow ? <button className={styles.buttonFollow}><strong>Siguiendo</strong></button> : notification.newComment ? <Image src="/assets/profile.jpg" width={28} height={28} alt="image" /> : notification.newLike ? <Image src="/assets/profile.jpg" width={28} height={28} alt="image" /> : ""}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}