import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./../../styles/Tabs.module.css";

interface IProps {
    tab?: string
}

export const Tabs: React.FC<IProps> = ({ tab }) => {
    const router = useRouter();

    const redirect: Function = (href: string) => {
        const profile = router.query.profile;
        const pageTo = `/${profile}/${href}`;

        if (router.asPath.toString() !== pageTo) {
            router.push(pageTo)
        }
    }

    return (
        <div className={styles.tabs}>
            <div onClick={() => { redirect("") }} className={tab === "home" ? styles.selected : ""}>
                <span>
                    <Image src="/assets/grid.png" width={12} height={12} alt="option1" />
                </span>
                <div>
                    <span>PUBLICACIONES</span>
                </div>
            </div>
            <div onClick={() => { redirect("saved") }} className={tab === "saved" ? styles.selected : ""}>
                <span>
                    <Image src="/assets/save.png" width={12} height={12} alt="option2" />
                </span>
                <div>
                    <span>GUARDADO</span>
                </div>
            </div>
            <div onClick={() => { redirect("tagged") }} className={tab === "tagged" ? styles.selected : ""}>
                <span>
                    <Image src="/assets/tag.png" width={12} height={12} alt="option3" />
                </span>
                <div>
                    <span> ETIQUETADAS</span>
                </div>
            </div>

        </div>
    )
}