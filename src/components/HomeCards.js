"use client"


import React, { useState } from "react";

const cardsData = [
  {
    id: 1,
    title: "E commercew",
  },
  {
    id: 2,
    title: "Card 2",
  },
  {
    id: 3,
    title: "Card 3",
  },
  {
    id: 4,
    title: "Card 3",
  },
  {
    id: 5,
    title: "Card 3",
  },
  {
    id: 6,
    title: "Card 3",
  },
  {
    id: 7,
    title: "Card 3",
  },
  {
    id: 8,
    title: "Card 3",
  },
  {
    id: 9,
    title: "Card 3",
  },
  {
    id: 10,
    title: "Card 3",
  },
  {
    id: 11,
    title: "Card 3",

  },
  {
    id: 12,
    title: "Card 3",
  },
  // Add more card objects as needed
];

const Card = ({ card }) => {
  return (
    <div className="border h-40 border-gray-300 rounded-md p-4">
      <h3 className="text-lg font-semibold">{card.title}</h3>
      <p className="text-sm text-gray-600">{card.description}</p>
      <p className="text-xs text-gray-400 mt-2">{card.date}</p>
    </div>
  );
};

const CardsContainer = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

const HomeCard = () => {
  const [cards] = useState(cardsData);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Industries</h1>
      <p className=" text-4xl font-semibold mb-5 py-2">Our Vision to Caters to Diverse Industry Demands</p>
      <CardsContainer cards={cards} />
    </div>
  );
};

export default HomeCard;
