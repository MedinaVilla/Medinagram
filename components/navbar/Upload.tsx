import Image from "next/image";
import React, { useEffect, useState } from "react";
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
                <a>
                {
                    !showModal?<svg aria-label="Nueva publicación" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>:
                    <svg aria-label="Nueva publicación" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 5.545l-.117.006-.112.02a1 1 0 00-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 00-.877.876L5.545 12l.007.117a1 1 0 00.877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 00.876.877l.117.007.117-.007a1 1 0 00.876-.877l.007-.116V13h4.452l.116-.007a1 1 0 00.877-.876l.007-.117-.007-.117a1 1 0 00-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 00-.876-.877zM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1z"></path></svg>
                }
                </a>
                {/* <Image src="/assets/post.png" width={24} height={24} alt="home" /> */}
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