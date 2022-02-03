import React from "react";
import styles from "./../../styles/AccountConfig/PushNotification.module.css";

export const PushNotification: React.FC = () => {
    return (<div>
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>Me gusta</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="like" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="like" value="sigo" /> De personas a las que sigo<br />
                        <input type="radio" name="like" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    A medinavilla le gustó tu foto.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Comentarios</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="comments" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="comments" value="sigo" /> De personas a las que sigo<br />
                        <input type="radio" name="comments" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    {/* eslint-disable-next-line react/no-unescaped-entities*/}
                    medinavilla comentó: "¡Excelente foto!"
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Me gusta en comentarios</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="likecomments" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="likecomments" value="sigo" /> De personas a las que sigo<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    {/* eslint-disable-next-line react/no-unescaped-entities*/}
                    A medinavilla le gustó tu comentario: "¡Excelente foto!"
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Me gusta y comentarios en fotos en las que apareces</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="likecommentsMe" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="likecommentsMe" value="sigo" /> De personas a las que sigo<br />
                        <input type="radio" name="likecommentsMe" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    medinavilla comentó una publicación en la que se te etiquetó.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Solicitudes de seguimiento aceptadas</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="requestFollowerAccept" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="requestFollowerAccept" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    medinavilla comentó una publicación en la que se te etiquetó.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Solicitudes de Medinagram Direct</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="requestMedinagram" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="requestMedinagram" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    medinavilla quiere enviarte un mensaje.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Recordatorios</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="reminder" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="reminder" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    Tienes notificaciones no leídas y otras notificaciones similares.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Primeras publicaciones e historias</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="firstPosts" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="firstPosts" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    Tienes notificaciones no leídas y otras notificaciones similares.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Medinagram Direct</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="medinagramDirect" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="medinagramDirect" value="sigo" /> De personas a las que sigo<br />
                        <input type="radio" name="medinagramDirect" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    medinavilla te envió un mensaje.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Reproducciones de video</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="replays" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="replays" value="todos" checked /> De todos<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    Tu video tiene más de 100 mil reproducciones.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Solicitudes de ayuda</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="requestHelp" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="requestHelp" value="todos" checked /> Activadas<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    Se acaba de actualizar tu solicitud de ayuda de Febrero 7.
                </div>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Videos en vivo</h3>
                <div className={styles.option}>
                    <div>
                        <input type="radio" name="lives" value="desactivadas" /> Desactivadas<br />
                        <input type="radio" name="lives" value="todos" checked /> Activadas<br />
                    </div>
                </div>
                <div className={styles.smallText}>
                    medinavilla empezó a transmitir en vivo. ¡Míralo antes de que termine!
                </div>
                <hr />
            </div>
        </div>
    </div>
    )
}