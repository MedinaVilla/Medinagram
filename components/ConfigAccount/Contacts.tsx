import React from "react";
import styles from "../../styles/AccountConfig/Contacts.module.css";

export const Contacts: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Administrar contactos</h3>
            <div className={styles.text}>
                <p>
                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                    Las personas que se muestran aquí son contactos que subiste a Medinagram. Para eliminar los contactos sincronizados, toca "Eliminar todos". Los contactos volverán a subirse la próxima vez que Medinagram los sincronice, a menos que accedas a la configuración del dispositivo y desactives el acceso a los contactos.
                </p>
                <p>
                    Solo tú puedes ver tus contactos. Sin embargo, Medinagram usa la información que subiste sobre los contactos para hacerte sugerencias de amistad a ti y otras personas, y para proporcionar una mejor experiencia para todos.
                </p>
            </div>
            <div>
                <div className={styles.header}>
                    <p>0 contactos sincronizados</p>
                    <p>Eliminar todos</p>
                </div>
                <p className={styles.text}>
                    Cuando subas tus contactos a Medinagram, los verás aquí.
                </p>
                <div className={styles.header} />
            </div>
            <br />
            <div>
                <button disabled className={styles.submit}>Eliminar todos</button>
            </div>
        </div>
    )
}