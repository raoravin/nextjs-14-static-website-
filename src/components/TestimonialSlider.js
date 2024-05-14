"use client";

import React, { useState } from "react";
import "../styles/slider.css";

export default function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);

    // const radioButtons = document.querySelectorAll('input[type=radio]');

    // const slideShow = () => {
    // for(let i =0; i<radioButtons.length; i++){
    // setInterval(() => {
    // }, 3000)
    // }
    // }


// slideShow();
const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

 // Sample data structure for slides
 const slides = [
    {
      id: 1,
    //   imageUrl: 'https://via.placeholder.com/300',
      caption: 'Slide 1',
    },
    {
      id: 2,
    //   imageUrl: 'https://via.placeholder.com/300',
      caption: 'Slide 2',
    },
    {
      id: 3,
    //   imageUrl: 'https://via.placeholder.com/300',
      caption: 'Slide 3',
    },
    {
      id: 4,
    //   imageUrl: 'https://via.placeholder.com/300',
      caption: 'Slide 4',
    },
    {
      id: 5,
    //   imageUrl: 'https://via.placeholder.com/300',
      caption: 'Slide 5',
    },
  ];

  return (
    <div className=" h-screen">
        <h1 className=" text-2xl py-5 text-white">TESTIMONIALS</h1>
        <p className=" text-3xl text-white font-semibold">Our Vision to Caters to Diverse Industry Demands</p>
        <section id="slider" className="max-sm:w-10/12 max-lg:w-8/12 w-8/12 rounded-3xl max-sm:h-1/4 max-lg:h-2/5 h-3/6">
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
        >
          {slide.caption}
        </label>
      ))}
    </section>
     
    </div>
  );
}
