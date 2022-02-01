import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import styles from "./../../../styles/AccountConfig.module.css";

const AccountConfig: NextPage = () => {
    const [selected, setSelected] = useState<string>("Editar perfil")
    const options = ["Editar perfil", "Cambiar contraseña", "Apps y sitios web", "Correo electrónico y SMS",
        "Notificación push", "Administrar contactos", "Privacidad y seguridad", "Actividad de inicio de sesión",
        "Correos electrónicos de Medinagram", "Ayuda"]
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    {options.length > 0 && options.map((option, index) => {
                        return <li className={option === selected ? styles.itemSelected : ""} key={index} onClick={() => { setSelected(option) }}>
                            {option}
                        </li>
                    })}
                    <li className={styles.liHighlight}>
                        Cambiar a cuenta profesional
                    </li>
                </div>

                <div className={styles.content}>
                    <div className={styles.flexbox}>
                        <div>
                            <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: 'hidden' }}>
                                <Image src="https://instagram.fpbc6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/192652294_2862989684011510_3685363033691202201_n.jpg?_nc_ht=instagram.fpbc6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=NG9B8gYVCuUAX_13tnu&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-LmHKl_VzZPPoesfaMrtRhuQkerJs0yEyN3Yah8CFncg&oe=61FF846F&_nc_sid=9a90d6" width={42} height={42} alt="image" />
                            </div>
                        </div>
                        <div style={{ paddingLeft: "20px" }}>
                            <p>medinavilla <br /> <small className={styles.blueText}>Cambiar foto del perfil</small></p>
                        </div>
                    </div>
                    <div className={styles.form}>

                        <div className={styles.flexInput}>
                            <div>Nombre</div>
                            <div>
                                <input defaultValue="Medina"></input>
                                <p className={styles.smallText}>Para ayudar a que las personas descubran tu cuenta, usa el nombre por el que te conoce la gente, ya sea tu nombre completo, apodo o nombre comercial.<br /> Solo puedes cambiar el nombre del grupo dos veces en un plazo de 14 días.</p>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Nombre de usuario</div>
                            <div>
                                <input defaultValue="medinavilla"></input>
                                <p className={styles.smallText}>Para ayudar a que las personas descubran tu cuenta, usa el nombre por el que te conoce la gente, ya sea tu nombre completo, apodo o nombre comercial.<br /> Solo puedes cambiar el nombre del grupo dos veces en un plazo de 14 días.</p>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Sitio web</div>
                            <div>
                                <input defaultValue="https://github.com/MedinaVilla"></input>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Presentación</div>
                            <div>
                                <textarea rows={3} defaultValue="El confort y lo de siempre, eso no es para mí 🥇IPN - ESCOM 💻"></textarea>
                                <p className={styles.smallText}><strong>Información personal</strong><br/>
                                    Proporciona tu información personal, incluso si la cuenta se usa para un negocio, una mascota, etc. Esta información no se incluirá en tu perfil público.</p>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Correo electrónico</div>
                            <div>
                                <input defaultValue="net_medina@hotmail.com"></input>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Número de telefóno</div>
                            <div>
                                <input defaultValue="5537245454"></input>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Género</div>
                            <div>
                                <input defaultValue="Hombre"></input>
                            </div>
                        </div>
                        <div className={styles.flexInput}>
                            <div>Sugerencias de cuentas similares</div>
                            <div>
                                <input defaultValue="Hombre"></input>
                            </div>
                        </div>
                        <button disabled className={styles.submit}>Enviar</button><br />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AccountConfig;