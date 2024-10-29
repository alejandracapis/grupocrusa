import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
    return(
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    < article className="slide-images"> {slide.urls} </article>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;