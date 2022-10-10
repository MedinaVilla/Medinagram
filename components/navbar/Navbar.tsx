import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./../../styles/Navbar.module.css";
import { SearchBar } from "../SearchBar";
import Link from 'next/link'
import { LikeNotification } from "./LikeNotification";
import { ProfileNotification } from "./profile/ProfileNotification";
import { Upload } from "./Upload";
import { useRouter } from 'next/router'

export const Navbar: React.FC<{}> = () => {
    const router = useRouter()
    const [activeRoute, setActiveRoute] = useState<string>();

    useEffect(() => {
        console.log(router.pathname);
        let path = router.pathname;
        if (path.endsWith("/explore")) {
            setActiveRoute("explore");
        } else if (path.endsWith("messages")) {
            setActiveRoute("messages");
        } else{
            setActiveRoute("home");
        }

    }, [router])

    return <div className={styles.navbar} >
        <ul className={styles.list} >
            <li className={styles.flexLogo}>
                <Link href="/" passHref={true}>
                    <a><Image src="/assets/newlogo.png" width="125" height="35" alt="logo" /></a>
                </Link>
            </li>
            <li className={styles.flexSearch}>
                <SearchBar />
            </li>
            <li className={styles.buttonGroup} >
                <div>
                    <Link href="/" passHref={true}>
                        {
                            activeRoute != "home" ? <svg aria-label="Inicio" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg> :
                                <svg aria-label="Inicio" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
                        }
                        {/* <a><Image src="/assets/home.png" width={24} height={24} alt="home" /></a> */}
                    </Link>
                </div>
                <LikeNotification />
                <div>
                    <Link href="/explore" passHref={true}>
                        {
                             activeRoute != "explore" ?  <svg aria-label="Buscar personas" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>:
                             <svg aria-label="Buscar personas" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M13.173 13.164l1.491-3.829-3.83 1.49zM12.001.5a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012.001.5zm5.35 7.443l-2.478 6.369a1 1 0 01-.57.569l-6.36 2.47a1 1 0 01-1.294-1.294l2.48-6.369a1 1 0 01.57-.569l6.359-2.47a1 1 0 011.294 1.294z"></path></svg>
                        }
                        {/* <a><Image src="/assets/compass.png" width={24} height={24} alt="compass" /></a> */}
                    </Link>
                </div>
                <div>
                    <Upload />
                </div>
                <div>
                    <Link href="/messages" passHref={true}>
                        {
                             activeRoute != "messages" ? <svg aria-label="Direct" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>:
                             <svg aria-label="Direct" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22.91 2.388a.69.69 0 00-.597-.347l-20.625.002a.687.687 0 00-.482 1.178L7.26 9.16a.686.686 0 00.778.128l7.612-3.657a.723.723 0 01.937.248.688.688 0 01-.225.932l-7.144 4.52a.69.69 0 00-.3.743l2.102 8.692a.687.687 0 00.566.518.655.655 0 00.103.008.686.686 0 00.59-.337L22.903 3.08a.688.688 0 00.007-.692" fillRule="evenodd"></path></svg>
                        }
                        {/* <a><Image src="/assets/message.png" width={24} height={24} alt="messages" /></a> */}
                    </Link>


                </div>
                <ProfileNotification />
            </li>
        </ul>
    </div>
}