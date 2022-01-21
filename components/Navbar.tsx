import Image from "next/image";
import React from "react";
import styles from "./../styles/Navbar.module.css";
import { SearchBar } from "./SearchBar";

export const Navbar: React.FC<{}> = () => {
    return <nav className={styles.navbar} >
        <ul className={styles.list} >
            <li className={styles.flexLogo} >
                <Image src="/assets/logo.png" width="115" height="35" alt="logo" />
            </li>
            <li className={styles.flexSearch}>
                <SearchBar />
            </li>
            <li className={styles.buttonGroup}>
                <div>
                    <Image src="/assets/home.png" width={24} height={24} alt="home" />
                </div>
                <div>
                    <Image src="/assets/heart.png" width={24} height={24} alt="home" />
                </div>
                <div>
                    <Image src="/assets/compass.png" width={24} height={24} alt="home" />
                </div>
                <div>
                    <Image src="/assets/heart.png" width={24} height={24} alt="home" />
                </div>
                <div>
                    <Image src="/assets/message.png" width={24} height={24} alt="home" />
                    <div className={styles.num} style={{ width: "16px", height: "16px" }}>
                        <div style={{ marginTop: "2px" }}></div>
                        <strong>2</strong>
                    </div>
                </div>
                <div >
                    <div style={{ width: "26px", height: "26px", borderRadius: "50%", overflow: 'hidden' }}>
                        <Image src="/assets/profile.jpg" width={26} height={26} alt="home" />
                    </div>
                </div>
            </li>
        </ul>
    </nav>

}