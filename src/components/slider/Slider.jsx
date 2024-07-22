import { useEffect, useRef, useState } from 'react';
import './slider.css';

const slidePictures = [
    { src: "/media/slider/slider-1.webp", alt: "Slide 1" },
    { src: "/media/slider/slider-2.webp", alt: "Slide 2" },
    { src: "/media/slider/slider-3.webp", alt: "Slide 3" },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        startAutoSlide();

        return () => {
            stopAutoSlide();
        };
    }, []);

    const updateSlider = () => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(nextSlide, 4000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        updateSlider();
    }, [currentIndex]);

    return (
        <div id="slider_container">
            <h1 data-aos="fade-in" data-aos-duration="600">
                Fisioterapia Neros Alcorcón
            </h1>
            <div className="slider" ref={sliderRef}>
                {slidePictures.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide.src} alt={slide.alt} className="imgSlide" />
                    </div>
                ))}
            </div>
            <button className="prev-btn" onClick={() => { prevSlide(); stopAutoSlide(); }}>&#9665;</button>
            <button className="next-btn" onClick={() => { nextSlide(); stopAutoSlide(); }}>&#9655;</button>
        </div>
    );
};

export default Slider;
