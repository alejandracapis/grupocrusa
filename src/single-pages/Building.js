import React from "react";

import "./Building.css";

const Building = () => {
    return(
        <div className="ip-grid">
            <article className="ip-item" id="ip-background">
                <video loop autoPlay muted id="ip-video" className="ip-item ip-video">
                    <source src={require('./videos/ip-video3.MP4')} type="video/mp4" />
                </video>
                <span className="ip-item ip-span">
                    En mantenimiento
                </span>
            </article>
        </div >        
    );
};

export default Building;
