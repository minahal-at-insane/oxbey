import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/review1.png";
import slide2 from "../assets/review2.png";
import slide3 from "../assets/review3.png";
import slide4 from "../assets/review4.png";
import slide5 from "../assets/review5.png";
import slide6 from "../assets/review6.png";
import slide7 from "../assets/review7.png";
import slide8 from "../assets/review8.png";

// Custom arrow components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#0a79f7", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#0a79f7", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextArrow />, // attach custom arrows
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    }

    return (
        <div>
            <Slider {...settings}>
                {[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8].map((slide, index) => (
                    <div key={index} className="card-wrapper col-span-1">
                        <img src={slide} alt="" className='w-full rounded-lg' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageSlider;
