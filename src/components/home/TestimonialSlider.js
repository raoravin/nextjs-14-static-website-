"use client";

import React, { useState, useEffect } from "react";
import "../../styles/slider.css";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Sample data structure for slides
  const slides = [
    {
      id: 1,
      icon: "Qaaaaaa",
      text: "Cubica Squad's innovative solutions have truly transformed our digital presence. Their creative strategic approach has helped us stay ahead of the curve in a rapidly evolving market. Their team's dedication and expertise are unparalleled!",
      author: "John Doe, CEO of XYZ Corporation",
    },
    {
      id: 2,
      icon: "kckjsacjk",
      text: "Cubica Squad's innovative solutions have truly transformed our digital presence. Their creative strategic approach has helped us stay ahead of the curve in a rapidly evolving market. Their team's dedication and expertise are unparalleled!",
      author: "John Doe, CEO of XYZ Corporation",
    },
    {
      id: 3,
      icon: "kckjsacjk",
      text: "Cubica Squad's innovative solutions have truly transformed our digital presence. Their creative strategic approach has helped us stay ahead of the curve in a rapidly evolving market. Their team's dedication and expertise are unparalleled!",
      author: "John Doe, CEO of XYZ Corporation",
    },
    {
      id: 4,
      icon: "kckjsacjk",
      text: "Cubica Squad's innovative solutions have truly transformed our digital presence. Their creative strategic approach has helped us stay ahead of the curve in a rapidly evolving market. Their team's dedication and expertise are unparalleled!",
      author: "John Doe, CEO of XYZ Corporation",
    },
    {
      id: 5,
      icon: "kckjsacjk",
      text: "Cubica Squad's innovative solutions have truly transformed our digital presence. Their creative strategic approach has helped us stay ahead of the curve in a rapidly evolving market. Their team's dedication and expertise are unparalleled!",
      author: "John Doe, CEO of XYZ Corporation",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  return (
    <div className=" max-[380px]:px-14 max-[480px]:px-16 max-sm:px-24">
      <section
        id="slider"
        className="mx-auto max-sm:mt-14 my-20 sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[450px] h-[200px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => (
          <input
            key={slide.id}
            type="radio"
            name="slider"
            id={`s${slide.id}`}
            checked={activeSlide === index}
            onChange={() => handleSlideChange(index)}
          />
        ))}

        {slides.map((slide, index) => (
          <label
            key={slide.id}
            htmlFor={`s${slide.id}`}
            id={`slide${slide.id}`}
            className="label bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg p-2 sm:p-4 md:p-5 lg:p-6 shadow-lg text-white max-sm:px-7 md:px-14 xl:px-20"
          >
            <div className=" xl:py-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl">{slide.icon}</div>
            <div className="">
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2 max-sm:pt-2 sm:py-8 xl:py-10">{slide.text}</p>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold max-sm:pt-2 max-lg:pt-0 pt-5">{slide.author}</p>
            </div>
          </label>
        ))}
      </section>
    </div>
  );
}
