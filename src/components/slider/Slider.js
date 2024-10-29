import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./SliderImage";
import "./Slider.css";

const len = sliderImage.lenght;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        const interval= setInterval(() => {
            setActiveIndex(activeIndex === sliderImage.length-1 ? 0 : activeIndex + 1);
        }, [4000]);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return(
        <div className="slider-container">
            <Arrows
                prevSlide ={() =>
                    setActiveIndex(activeIndex < 1 ? sliderImage.length : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === sliderImage.length ? 0 : activeIndex + 1)
                }
                />    
            <SliderContent className="slider-content" activeIndex={activeIndex} sliderImage={sliderImage} />
            <Dots className="slider-dots"
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider; 
