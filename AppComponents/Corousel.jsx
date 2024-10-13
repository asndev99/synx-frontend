"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csgo from "../public/csgo.jpg";
import fortnite from "../public/fortnite.jpg";
import cssimple from "../public/cssimple.jpg";

const Corousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { src:csgo, heading: "Counter strike Go" },
    { src:cssimple, heading: "Fortnite" },
    { src:fortnite, heading: "Counter strike 1.6" },
  ];
  return (
    <div className="carousel-container">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative top-0 text-center overflow-hidden w-full h-[500px]"
        >
          <Image
            src={slide.src}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
          <h3 className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-3">
            {slide.heading}
          </h3>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Corousel;
