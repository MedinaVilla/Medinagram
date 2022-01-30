import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ProfileList } from "./ProfileList";

export const ProfileNotification: React.FC<{}> = () => {
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowNotification(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useEffect(() => {
        //Sockets listens
    }, [])


    return (
        <div>
            <div >
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", overflow: 'hidden' }}>
                    <Image onClick={() => { setShowNotification(true) }} src="/assets/profile.jpg" width={26} height={26} alt="home" />
                </div>
            </div>
            {showNotification && <div ref={wrapperRef}><ProfileList /></div>}
        </div>
    )
}