import {useState, useEffect} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from "./slider-data";
import "./Slider.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState (0);
    const slideLength = sliderData.length;
    // sideLength = 1 2 3
    // currenSlide = 0 1 2
    
    const sutoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide,intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if (sutoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);
    
    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 
                    "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide" />
                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className="--btn --btn-primary">Get Started</button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slider;