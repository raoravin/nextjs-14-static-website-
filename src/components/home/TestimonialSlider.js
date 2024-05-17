"use client";

import React, { useState } from "react";
import "../../styles/slider.css";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
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

  return (
    <div className=" max-[380px]:px-14 max-[480px]:px-16 max-sm:px-24  ">
      <section
        id="slider"
        className=" mx-auto max-sm:mt-14 my-20 sm:w-8/12 xl:w-6/12 sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[450px] h-[200px]"
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
            className="label bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg text-white"
          >
            <div className=" ">{slide.icon}</div>
            <div className="">
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{slide.text}</p>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">{slide.author}</p>
            </div>
          </label>
        ))}
      </section>
    </div>
  );
}
