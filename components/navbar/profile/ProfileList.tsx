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
            <Link href="/profile" passHref={true}>
                <div className={styles.flexItem}>
                    <Image src="/assets/save.png" width={20} height={20} alt="home" />
                    <li className={styles.notificationContent}>
                        Guardado
                    </li>
                </div>
            </Link>
            <Link href="/profile" passHref={true}>
                <div className={styles.flexItem}>
                    <Image src="/assets/config.png" width={20} height={20} alt="home" />
                    <li className={styles.notificationContent}>
                        Configuración de cuenta
                    </li>
                </div>
            </Link>
            <hr />
            <Link href="/profile" passHref={true}>
                <div className={styles.flexItem}>
                    <Image src="/assets/logout.png" width={20} height={20} alt="home" />
                    <li className={styles.notificationContent}>
                        Cerrar sesión
                    </li>
                </div>
            </Link>
        </div>
    )
}