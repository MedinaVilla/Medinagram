import React from "react";
import styles from "./../../styles/AccountConfig/EmailSMS.module.css";

export const EmailSMS: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Suscríbete a:</h3>
            <div className={styles.option}>
                <div>
                    <input type="checkbox" checked /> Correos electrónicos de comentarios
                </div>
            </div>
            <div className={styles.smallText}>
                Envía comentarios sobre Medinagram.
            </div>
            <br />
            <div className={styles.option}>
                <div>
                    <input type="checkbox" checked /> Correos electrónicos de recordatorio
                </div>
            </div>
            <div className={styles.smallText}>
                Recibe notificaciones que quizá te hayas perdido.
            </div>
            <br />
            <div className={styles.option}>
                <div>
                    <input type="checkbox" checked /> Correos electrónicos de producto
                </div>
            </div>
            <div className={styles.smallText}>
                Recibe consejos sobre las herramientas de Medinagram.
            </div>
            <br />
            <div className={styles.option}>
                <div>
                    <input type="checkbox" checked /> Correos electrónicos de noticias
                </div>
            </div>
            <div className={styles.smallText}>
                Descubre las nuevas funciones de Medinagram.
            </div>

        </div>
    )

}