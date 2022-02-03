import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import { ActivitySession } from '../../../components/ConfigAccount/ActivitySession';
import { AppsWebistes } from '../../../components/ConfigAccount/AppsWebsites';
import { ChangePassword } from '../../../components/ConfigAccount/ChangePassword';
import { Contacts } from '../../../components/ConfigAccount/Contacts';
import { Emails } from '../../../components/ConfigAccount/Emails';
import { EmailSMS } from '../../../components/ConfigAccount/EmailSMS';
import { Help } from '../../../components/ConfigAccount/Help';
import { PrivacySecurity } from '../../../components/ConfigAccount/PrivacySecurity';
import { ProfileEdit } from '../../../components/ConfigAccount/ProfileEdit';
import { PushNotification } from '../../../components/ConfigAccount/PushNotification';
import styles from "./../../../styles/AccountConfig.module.css";

const AccountConfig: NextPage = () => {
    const [selected, setSelected] = useState<string>("Editar perfil")
    const options = ["Editar perfil", "Cambiar contraseña", "Apps y sitios web", "Correo electrónico y SMS",
        "Notificación push", "Administrar contactos", "Privacidad y seguridad", "Actividad de inicio de sesión",
        "Correos electrónicos de Medinagram", "Ayuda"];


    const renderContent: Function = (option: string) => {
        switch (option) {
            case options[0]: {
                return <ProfileEdit />
            }
            case options[1]: {
                return <ChangePassword />
            }
            case options[2]: {
                return <AppsWebistes />
            }
            case options[3]: {
                return <EmailSMS />
            }
            case options[4]: {
                return <PushNotification />
            }
            case options[5]: {
                return <Contacts />
            }
            case options[6]: {
                return <PrivacySecurity />
            }
            case options[7]: {
                return <ActivitySession />
            }
            case options[8]: {
                return <Emails />
            }
            case options[9]: {
                return <Help />
            }
        }
    }

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
                    <hr style={{ border: "1px solid rgb(231, 231, 231)", backgroundColor: "rgb(231, 231, 231)" }} />
                    <div style={{ textAlign: "center", paddingTop: "20px" }}>
                        <Image src="/assets/github.png" width="100" height="100" alt="logo" />
                        <p>
                            @MedinaVilla
                        </p>

                    </div>
                </div>
                <div className={styles.content}>
                    {renderContent(selected)}
                </div>
            </div>
        </div>
    )

}
export default AccountConfig;