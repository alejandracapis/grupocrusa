import React from "react";

function Arrows({prevSlide, nextSlide}) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                &laquo;
            </span>
            <span className="next" onClick={nextSlide}>
                &raquo;
            </span>
        </div>
    );
}

export default Arrows;