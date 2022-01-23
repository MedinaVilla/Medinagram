import Image from "next/image";
import React from "react";
import styles from "./../../styles/Navbar.module.css";
import { SearchBar } from "../SearchBar";
import Link from 'next/link'
import { LikeNotification } from "./LikeNotification";
import { ProfileNotification } from "./profile/ProfileNotification";

export const Navbar: React.FC<{}> = () => {
    return <div className={styles.navbar} >
        <ul className={styles.list} >
            <li className={styles.flexLogo} >
                <Link href="/" passHref={true}>
                    <Image src="/assets/logo.png" width="115" height="35" alt="logo" />
                </Link>
            </li>
            <li className={styles.flexSearch}>
                <SearchBar />
            </li>
            <li className={styles.buttonGroup}>
                <div>
                    <Link href="/" passHref={true}>
                        <Image src="/assets/home.png" width={24} height={24} alt="home" />
                    </Link>
                </div>
                <LikeNotification />
                <div>
                    <Link href="/explore" passHref={true}>
                        <Image src="/assets/compass.png" width={24} height={24} alt="home" />
                    </Link>
                </div>

                <div>
                    <Link href="/messages" passHref={true}><Image src="/assets/message.png" width={24} height={24} alt="home" /></Link>
                    <div className={styles.num} style={{ width: "16px", height: "16px" }}>
                        <div style={{ marginTop: "2px" }}></div>
                        <strong>2</strong>
                    </div>

                </div>
                <ProfileNotification />
            </li>
        </ul>
    </div>

}