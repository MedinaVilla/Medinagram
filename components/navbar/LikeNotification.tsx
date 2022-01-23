import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { NotificationList } from "./NotificationList";

export const LikeNotification: React.FC<{}> = () => {
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
            <Image onClick={() => { setShowNotification(true) }} src="/assets/heart.png" width={24} height={24} alt="home" />
            {showNotification && <div ref={wrapperRef}><NotificationList /></div>}
        </div>
    )
}