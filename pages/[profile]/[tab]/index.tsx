import React from "react";
import type { NextPage } from 'next'
import styles from "./../../../styles/Profile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { MyStories } from "../../../components/Stories/MyStories";
import { Tabs } from "../../../components/profile/Tabs";
import GridProfile from "../../../components/profile/GridProfile";
import GridSaved from "../../../components/profile/GridSaved";
import GridTagged from "../../../components/profile/GridTagged";

const Profile: NextPage = () => {
    const router = useRouter();
    const { tab } = router.query;

    return (
        <main className={styles.main}>
            {/* Profile Header */}
            <div className={styles.header}>
                <div>
                    <div style={{ width: "100px", height: "100px", borderRadius: "50%", overflow: 'hidden', position: "relative" }}>
                        <Image src="/assets/profile.jpg" layout="fill" alt="home" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.titleFlex}>
                        <p>medinavilla</p>
                        <div>
                            <button className={styles.button}>Editar Perfil</button>
                        </div>
                        <div >
                            <Image src="/assets/config.png" width={26} height={26} alt="config" />
                        </div>
                    </div>
                    <div className={styles.subtitleFlex}>
                        <small> <strong>29</strong> publicaciones</small>
                        <small> <strong>144</strong> seguidores</small>
                        <small> <strong>180</strong> seguidos</small>
                    </div>
                    <div className={styles.status}>
                        <div>
                            <small><strong>Medina</strong></small>
                        </div>
                        <div>
                            <small>El confort y lo de siempre, eso no es para mí 🥇 IPN - ESCOM 💻</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* My histories */}
            <MyStories />
            <br /> <br />
            <Tabs tab={tab?.toString()} />
            {tab === "saved" ? <GridSaved /> : tab === "tagged" ? <GridTagged /> : ""}
        </main>
    )
}
export default Profile