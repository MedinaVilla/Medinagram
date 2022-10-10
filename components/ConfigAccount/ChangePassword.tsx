import Image from "next/image";
import React from "react";
import styles from "./../../styles/AccountConfig/ChangePassword.module.css";

export const ChangePassword: React.FC = () => {
    return (
        <div>
            <div className={styles.header}>
                <div>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: 'hidden' }}>
                        <Image src="/assets/profile.jpg" width={42} height={42} alt="image" />
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