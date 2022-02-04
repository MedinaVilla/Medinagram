import React, { useState } from "react";
import styles from "./../../styles/AccountConfig/AppsWebsites.module.css";

export const AppsWebistes: React.FC = () => {
    const [selected, setSelected] = useState<string>("Activas");

    const renderContent: Function = () => {
        if (selected === "Activas") {
            return <div>
                <p className={styles.info}>Estas son apps y sitios web que usaste recientemente y en los que iniciaste sesión con Medinagram. Pueden solicitar la información que elegiste compartir con ellos.</p>
                <small className={styles.smallText}>No autorizaste a ninguna app a acceder a tu cuenta de Medinagram.</small>
            </div>
        } else if (selected === "Caducadas") {
            return <div>
                <p className={styles.info}>Estos son los sitios web y las apps en los que usaste Medinagram para iniciar sesión y que tal vez no uses desde hace un tiempo. Es posible que aún tengan información que hayas compartido anteriormente, pero ya no pueden realizar solicitudes nuevas de información privada. Puedes pedir a una app que elimine tu información. Para hacerlo, revisa su Política de privacidad para ver los detalles y la información de contacto. Si te pones en contacto con una app, es posible que necesite tu identificador de usuario.</p>
                <small className={styles.smallText}>No tienes ninguna app caducada que tenía acceso a tu cuenta de Medinagram.</small>
            </div>
        } else if (selected === "Eliminadas") {
            return <div>
                <p className={styles.info}>Estos son los sitios web y las apps que eliminaste de tu cuenta. Es posible que aún tengan información que hayas compartido anteriormente, pero no pueden realizar solicitudes nuevas. Puedes pedir a una app que elimine tu información. Para hacerlo, revisa su Política de privacidad para ver los detalles y la información de contacto. Si te pones en contacto con una app, es posible necesite tu identificador de usuario.</p>
                <small className={styles.smallText}>No tienes ninguna app eliminada que tenía acceso a tu cuenta de Medinagram.</small>
            </div>
        }
    }


    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Apps y sitios web</h3>
            <div className={styles.tabs}>
                <div onClick={() => { setSelected("Activas") }} className={selected === "Activas" ? styles.selected : styles.notSelected}>
                    <div>
                        <span>Activas</span>
                    </div>
                </div>
                <div onClick={() => { setSelected("Caducadas") }} className={selected === "Caducadas" ? styles.selected : styles.notSelected}>
                    <div>
                        <span>Caducadas</span>
                    </div>
                </div>
                <div onClick={() => { setSelected("Eliminadas") }} className={selected === "Eliminadas" ? styles.selected : styles.notSelected}>
                    <div>
                        <span>Eliminadas</span>
                    </div>
                </div>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}