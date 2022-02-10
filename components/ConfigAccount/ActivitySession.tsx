import Image from "next/image";
import styles from "./../../styles/AccountConfig/ActivitySession.module.css";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const mapStyle = {
    width: '100%',
    height: 200
}

const mapboxApiKey = 'pk.eyJ1IjoibWVkaW5hdmlsbGEiLCJhIjoiY2t6N2hkNWV4MWFmOTJ2b2ZoMnk1MDM0OSJ9.TvKJJWBZuPcg56JPtE6IhA';

export const ActivitySession = () => {

    const [viewport, setViewport] = useState<any>({
        latitude: 19.504381750408218,
        longitude: -99.14677597567123,
        zoom: 10
    });
    const [tempMarker, setTempMarker] = useState({
        latitude: 19.504381750408218,
        longitude: -99.14677597567123,
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Actividad de inicio de sesión</h3>
            <h4>¿Fuiste tú?</h4>
            <div>
                <ReactMapGL
                    scrollZoom={false}
                    dragPan={false}
                    mapboxApiAccessToken={mapboxApiKey}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    {...viewport}
                    {...mapStyle}
                    onViewportChange={(viewport: any) => setViewport(viewport)}
                >
                    <Popup
                        latitude={19.506381750408218}
                        longitude={-99.14177597567123}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="bottom" >
                        <div className={styles.popup}>
                            <div>
                                <Image src="/assets/heart.png" width={20} height={20} alt="icon" />
                            </div>
                            <div className={styles.popupContent}>
                                <div>
                                    <strong>Ciudad de México, Ciudad de México</strong>
                                </div>
                                <div>
                                    7 de febrero de 2022 · SSMD2020S
                                </div>
                            </div>
                        </div>
                    </Popup>
                    {tempMarker &&
                        <Marker

                            longitude={tempMarker.longitude}
                            latitude={tempMarker.latitude}>
                            <Image src="/assets/marker.png" width={16} height={26} alt="marker" />
                        </Marker>
                    }
                </ReactMapGL>
                <div className={styles.flexBox}>
                    <div>Fui yo</div>
                    <div>No fui yo</div>
                </div>
            </div>
            <br />
            <div>
                <ReactMapGL
                    dragPan={false}
                    scrollZoom={false}
                    mapboxApiAccessToken={mapboxApiKey}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    {...viewport}
                    {...mapStyle}
                    onViewportChange={(viewport: any) => setViewport(viewport)}
                >
                    <Popup
                        latitude={19.506381750408218}
                        longitude={-99.14177597567123}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="bottom" >
                        <div className={styles.popup}>
                            <div>
                                <Image src="/assets/heart.png" width={20} height={20} alt="icon" />
                            </div>
                            <div className={styles.popupContent}>
                                <div>
                                    <strong>Ciudad de México, Ciudad de México</strong>
                                </div>
                                <div>
                                    3 de febrero de 2022 · SSMD2020S
                                </div>
                            </div>
                        </div>
                    </Popup>
                    {tempMarker &&
                        <Marker
                            longitude={tempMarker.longitude}
                            latitude={tempMarker.latitude}>
                            <Image src="/assets/marker.png" width={16} height={26} alt="marker" />
                        </Marker>
                    }
                </ReactMapGL>
                <div className={styles.flexBox}>
                    <div>Fui yo</div>
                    <div>No fui yo</div>
                </div>
            </div>
            <h4>Donde iniciaste sesión</h4>
            <div>
                <div className={styles.boxContainer}>
                    <div>
                        <Image src="/assets/marker2.png" width={18} height={24} alt="marker" />
                    </div>
                    <div>
                        Ciudad de México, Ciudad de México, Mexico<br />
                        <span className={styles.active}>Activo(a) ahora </span>· <span className={styles.OStext}>Este Windows</span>
                    </div>
                    <div>
                        <Image src="/assets/arrowdown.png" width={16} height={10} alt="h" />
                    </div>
                </div>
                <hr />
                <div className={styles.boxContainer}>
                    <div>
                        <Image src="/assets/marker2.png" width={18} height={24} alt="h" />
                    </div>
                    <div>
                        Ciudad de México, Ciudad de México, Mexico<br />
                        <span className={styles.grayText}>Hace 21 horas</span>· <span className={styles.grayText}>Este Windows</span>
                    </div>
                    <div>
                        <Image src="/assets/arrowdown.png" width={16} height={10} alt="h" />
                    </div>
                </div>
                <hr />
                <div className={styles.boxContainer}>
                    <div>
                        <Image src="/assets/marker2.png" width={18} height={24} alt="h" />
                    </div>
                    <div>
                        Ciudad de México, Ciudad de México, Mexico<br />
                        <span className={styles.grayText}>Hace 21 horas</span>· <span className={styles.grayText}>Este Windows</span>
                    </div>
                    <div>
                        <Image src="/assets/arrowdown.png" width={16} height={10} alt="h" />
                    </div>
                </div>
            </div>
        </div>
    )
}