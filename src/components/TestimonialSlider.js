"use client";

import React, { useState } from "react";
import "../styles/slider.css";

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
    <div className=" h-screen">
      <h1 className=" text-2xl py-5 text-white">TESTIMONIALS</h1>
      <p className=" text-3xl text-white font-semibold">
        Our Vision to Caters to Diverse Industry Demands
      </p>
      <section
        id="slider"
        className="max-sm:w-10/12 max-lg:w-8/12 w-8/12 rounded-3xl max-sm:h-1/4 max-lg:h-2/5 h-3/6"
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
            className="label bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg p-4 py-10 shadow-lg text-white"
          >
            <div className=" text-5xl font-bold px-5 pb-20">{slide.icon}</div>
            <div className="">
              <p className="mb-6 text-2xl px-5">{slide.text}</p>
              <p className="font-bold text-2xl px-5 py-5">{slide.author}</p>
            </div>
          </label>
        ))}
      </section>
    </div>
  );
}
