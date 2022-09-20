import React from "react";
import styles from "./../../styles/AccountConfig/Help.module.css";

export const Help: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Help</h3>
            <div className={styles.list}>
                <div className={styles.flex}>
                    <div>Servicio de ayuda</div>
                    <div></div>
                </div>
                <div className={styles.flex}>
                    <div>Ayuda sobre privacidad  y seguridad</div>
                    <div></div>
                </div> <div className={styles.flex}>
                    <div>Solicitudesd de ayuda</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}