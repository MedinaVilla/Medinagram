import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";
import styles from "./../../styles/Upload.module.css";

export const Upload: React.FC<{}> = () => {
    const [showModal, setShowModal] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    const show = () => {
        setShowModal(true);
    }

    const hide = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <div onClick={() => { show() }}>
                <Image src="/assets/upload.png" width={24} height={24} alt="home" />
            </div>
            {ready && ReactDOM.createPortal(<Modal open={showModal} onClose={hide!}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>Crea una nueva publicación</h3><hr />
                    </div>
                    <div className={styles.content}>
                        <Image src="/assets/multimedia.jpg" alt="multimedia" width={100} height={100} />
                        <p>Arrastra las fotos y video aquí</p>
                        <label htmlFor="file-upload" className={styles.button}>Selecciona de la computadora</label>
                        <input id="file-upload" type="file" style={{ display: "none" }} />
                    </div>
                </div>

            </Modal>, document.getElementById("modal-root")!)}
        </>

    )
}