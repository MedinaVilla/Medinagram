import Image from "next/image";
import React from "react";
import styles from "./../../styles/AccountConfig/ChangePassword.module.css";

export const ChangePassword: React.FC = () => {
    return (
        <div>
            <div className={styles.header}>
                <div>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: 'hidden' }}>
                        <Image src="https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=NG9B8gYVCuUAX8qvWpE&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00_AT8vTJE-KAfBavgPRzJv1qW9VW5GcRAaGGxIFM0_yC5eHQ&oe=62017EAF&_nc_sid=7b02f1" width={40} height={40} alt="profile" />
                    </div>
                </div>
                <div>
                    <p className={styles.nickname}>medinavilla</p>
                </div>
            </div>
            <br />
            <div className={styles.form}>
                <div className={styles.flexInput}>
                    <div>Contraseña anterior</div>
                    <div>
                        <input type="password"></input>
                    </div>
                </div>
                <div className={styles.flexInput}>
                    <div>Contraseña nueva</div>
                    <div>
                        <input type="password"></input>
                    </div>
                </div>
                <div className={styles.flexInput}>
                    <div>Confirmar contraseña nueva</div>
                    <div>
                        <input type="password"></input>
                    </div>
                </div>
                <div className={styles.flexInput}>
                    <div></div>
                    <div>
                        <button disabled className={styles.submit}>Cambiar contraseña</button>
                    </div>
                </div>
            </div>
        </div>
    )
}