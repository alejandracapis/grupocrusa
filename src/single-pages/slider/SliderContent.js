import React from "react";

const SliderContent = ({ activeIndex, sliderImage, prevSlide, nextSlide }) => {
    return (
        <>
            <span className="prev" id="previous" onClick={prevSlide}>
                &laquo;
            </span>
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
            <span className="next" id="next" onClick={nextSlide}>
                &raquo;
            </span>
        </>
    );
}

export default SliderContent;