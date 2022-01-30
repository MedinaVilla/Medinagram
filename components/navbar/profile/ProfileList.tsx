import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./../../../styles/ProfileList.module.css";

export const ProfileList: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <Link href="/medinavilla" passHref={true}>
                <li className={styles.flexItem}>
                    <Image src="/assets/profile.png" width={20} height={20} alt="home" />
                    <div className={styles.notificationContent}>
                        Perfil
                    </div>
                </li>
            </Link>
            <Link href="/medinavilla/saved" passHref={true}>
                <div className={styles.flexItem}>
                    <Image src="/assets/save.png" width={20} height={20} alt="home" />
                    <div className={styles.notificationContent}>
                        Guardado
                    </div>
                </div>
            </Link>
            <div className={styles.flexItem}>
                <Image src="/assets/config.png" width={20} height={20} alt="home" />
                <div className={styles.notificationContent}>
                    Configuración de cuenta
                </div>
            </div>
            <hr />
            <div className={styles.flexItem}>
                <Image src="/assets/logout.png" width={20} height={20} alt="home" />
                <div className={styles.notificationContent}>
                    Cerrar sesión
                </div>
            </div>
        </div>
    )
}