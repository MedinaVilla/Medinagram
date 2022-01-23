import Image from "next/image";
import React, { useState } from "react";
import styles from "./../styles/SearchBar.module.css";

export const SearchBar: React.FC<{}> = () => {
    const [focus, setFocus] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");

    return <div className={styles.container}>
        <input value={input} onBlur={() => { setInput(""); setFocus(false) }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }} placeholder="Buscar" onFocus={() => { setFocus(true) }} className={styles.input} style={{ border: "none" }} />
        <div className={styles.icon} onClick={() => { setInput("") }}>
            {focus === true && <Image src="/assets/close.png" width={14} height={14} alt="close" />}
        </div>
    </div>

}