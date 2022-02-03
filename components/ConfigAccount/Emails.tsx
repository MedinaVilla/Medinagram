import Image from "next/image";
import React, { useState } from "react";
import styles from "./../../styles/AccountConfig/AppsWebsites.module.css";

export const Emails: React.FC = () => {
    const [selected, setSelected] = useState<string>("Seguridad");

    const renderContent: Function = () => {
        if (selected === "Seguridad") {
            return <div>
                <p className={styles.smallText}>Aquí aparecerán los correos electrónicos de Medinagram de los últimos 14 días relacionados con seguridad e inicio de sesión. Puedes usar esta lista para verificar qué mensajes son reales y cuáles son falsos. <span className={styles.link}>Más información.</span></p>
            </div>
        } else if (selected === "Otros") {
            return <div>
                <p className={styles.smallText}>Aquí aparecerán los otros correos electrónicos de Medinagram de los últimos 14 días que no están relacionados con seguridad e inicio de sesión. Puedes usar esta lista para verificar qué mensajes son reales y cuáles son falsos.<span className={styles.link}> Más información.</span></p>
            </div>
        } 
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Correos electrónicos de Medinagram</h3>
            <div className={styles.tabs}>
                <div onClick={() => { setSelected("Seguridad") }} className={selected === "Seguridad" ? styles.selected : styles.notSelected}>
                    <div>
                        <span>Seguridad</span>
                    </div>
                </div>
                <div onClick={() => { setSelected("Otros") }} className={selected === "Otros" ? styles.selected : styles.notSelected}>
                    <div>
                        <span>Otros</span>
                    </div>
                </div>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}