import React, { useState } from "react";
import styles from "./../../styles/AccountConfig/PrivacySecurity.module.css";

export const PrivacySecurity: React.FC = () => {

    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>Privacidad de la cuenta</h3>
                <div className={styles.option}>
                    <div>
                        <input type="checkbox" /> Correos electrónicos de comentarios
                    </div>
                </div>
                <div className={styles.smallText}>
                    Si tu cuenta es privada, solo las personas que apruebes podrán ver tus fotos y videos en Medinagram. Esto no afectará a tus seguidores actuales.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Estado de actividad</h3>
                <div className={styles.option}>
                    <div>
                        <input type="checkbox" /> Mostrar estado de actividad
                    </div>
                </div>
                <div className={styles.smallText}>
                    Permite que las cuentas que sigues y cualquier persona a quien envíes mensajes vean cuándo fue la última vez que estuviste activo en las apps de Medinagram. Cuando esta opción esté desactivada, no podrás ver el estado de actividad de otras cuentas.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Compartir historias</h3>
                <div className={styles.option}>
                    <div>
                        <input type="checkbox" /> Permitir compartir
                    </div>
                </div>
                <div className={styles.smallText}>
                    Permite que las personas compartan tus historias como mensajes.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Compartir historias</h3>
                <div className={styles.link}>Editar configuración de comentarios</div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Fotos en las que apareces</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="empleoactual" value="tiempocompleto" checked /> Agregar automáticamente<br />
                        <input type="radio" name="empleoactual" value="mediodia" /> Agregar manualmente<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    Elige cómo quieres agregar a tu perfil las fotos en las que apareces. <span className={styles.link}>Más información </span>sobre las fotos en las que apareces.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Datos de la cuenta</h3>
                <div className={styles.link}>Ver datos de la cuenta</div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Autenticación en dos pasos</h3>
                <div className={styles.link}>Editar configuración de autenticación en dos pasos</div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Descargas de datos</h3>
                <div className={styles.link}>Solicitar descarga</div>
                <hr />
            </div>
        </div>
    )
}