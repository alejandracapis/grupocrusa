import React from "react";

import "./BuildingStyles.css";

const Building = () => {
    return(
        <div className="ip-grid">
            <article className="ip-item" id="ip-background">
                <video loop autoPlay muted playsInline id="ip-video" className="ip-item ip-video">
                    <source src={require('./assets/videos/ip-video3.MP4')} type="video/mp4" />
                </video>
                <span className="ip-item ip-span">
                    En mantenimiento
                </span>
            </article>
        </div >
    );
};

export default Building;
