import Image from "next/image";
import React from "react";
import styles from "./../styles/SearchBar.module.css";

export const SearchBar: React.FC<{}> = () => {
    return <div>
        {/* <Image className={styles.icon} src="/assets/zoom.png" width={25} height={25} /> */}
        <input placeholder="Buscar" className={styles.input} style={{ border: "none" }} />
    </div>

}