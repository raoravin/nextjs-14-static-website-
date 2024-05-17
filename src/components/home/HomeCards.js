"use client"


import React, { useState } from "react";
import Image from "next/image";

const cardsData = [
  {
    id: 1,
    title: "Education",
    icon: "image 367"
  },
  {
    id: 2,
    title: "Ecommerce",
    icon: "image 368"

  },
  {
    id: 3,
    title: "Restaurnt",
    icon: "image 369"

  },
  {
    id: 4,
    title: "Travel",
    icon: "image 370"

  },
  {
    id: 5,
    title: "Entertainment",
    icon: "image 371"

  },
  {
    id: 6,
    title: "Social media",
    icon: "image 372"

  },
  {
    id: 7,
    title: "Real State",
    icon: "image 375"

  },
  {
    id: 8,
    title: "Healthcare",
    icon: "image 376"

  },
  {
    id: 9,
    title: "Finance",
    icon: "image 377"

  },
  {
    id: 10,
    title: "Logistics",
    icon: "image 378"

  },
  {
    id: 11,
    title: "SaaS",
    icon: "image 379"


  },
  {
    id: 12,
    title: "News & Media",
    icon: "image 380"

  },
];

const Card = ({ card }) => {
  return (
    <div className="border border-neutral-600 bgcolor_3 relative flex items-center flex-col gap-5  max-w-44 max-sm:h-28 max-xl:h-36  h-36 rounded-md">
      <div className=" w-[65px] mt-4">
        <Image src={`/images/home-card/${card.icon}.png`} alt="alt" width={100} height={100} />
      </div>
      <div className="absolute bottom-5 text-xl font-light"><h1 className="">{card.title}</h1></div>
    </div>
  );
};

const CardsContainer = ({ cards }) => {
  return (
    <div className=" mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 max-sm:gap-5 max-lg:gap-20 max-xl:gap-5 gap-16">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

const HomeCard = () => {
  const [cards] = useState(cardsData);

  return (
    <div className=" max-sm:px-4 px-10 py-8">
      <h1 className="text-2xl max-sm:text-base max-md:text-lg max-lg:text-xl font-medium">Industries</h1>
      <p className=" text-5xl max-sm:text-lg max-md:text-xl max-lg:text-2xl font-bold my-5 xl:pb-10 max-sm:my-3 max-sm:pb-8 md:pb-5">Our Vision to Caters to Diverse Industry Demands</p>
      <CardsContainer cards={cards} />
    </div>
  );
};

export default HomeCard;
