import React, { useEffect, useRef, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "../../app/globals.css"
import {FaTimes} from "react-icons/fa";
import Image from "next/image";

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  

  return (
    <div className="mb-2 sm:mb-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center gap-10 py-2 text-base  sm:text-2xl focus:outline-none "
      >
        <span>{title}</span>
        <span>{<HiArrowNarrowRight/>}</span>
      </button>
      {isOpen && (
        <div
        className={` px-4 py-2`}
        >
          <ul className=" text-sm  sm:text-xl ">
            {content.map((item, index) => (
              <li key={index} className="py-2">
                {item.text}
                {item.nestedAccordion && (
                  <NestedAccordion items={item.nestedAccordion} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const NestedAccordion = ({ items }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => toggleAccordion(item.id)}
            className="flex justify-between items-center gap-3 focus:outline-none"
          >
            {item.title}
            {openItemId === item.id ? (
              <IoChevronUpSharp className="h-5 w-5" />
            ) : (
              <IoIosArrowDown className="h-5 w-5" />
            )}
          </button>
          {openItemId === item.id && (
            <div className="ml-24 py-2">
              <ul>
                {item.content.map((nestedItem, index) => (
                  <li key={index} className="py-2">
                    <a href={nestedItem.url}>{nestedItem.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const DrawerAccordion = ({ sideDrawerClosedHandler }) => {
  const accordionItems = [
    {
      id: 1,
      title: "PAGES",
      content: [
        { text: "Standard" },
        { text: "List" },
        { text: "Grid" },
        { text: "Single Post" },
      ],
    },
    {
      id: 2,
      title: "PORTFOLIO",
      content: [
        { text: "Standard" },
        { text: "List" },
        { text: "Grid" },
        { text: "Single Post" },
      ],
    },
    {
      id: 3,
      title: "BLOG",
      content: [
        { text: "Standard",url: "#" },
        { text: "List",url: "#" },
        { text: "Grid",url: "#" },
        {
          nestedAccordion: [
            {
              id: 31,
              title: "Single Post",
              content: [
                { label: "Post 1", url: "#" },
                { label: "Post 2", url: "#" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "SHOP",
      content: [
        { text: "Standard" },
        { text: "List" },
        { text: "Grid" },
        { text: "Single Post" },
      ],
    },
    {
      id: 5,
      title: "CONTACT US",
      content: [
        { text: "Standard" },
        { text: "List" },
        { text: "Grid" },
        { text: "Single Post" },
      ],
    },
  ];

  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <div className="w-full h-full bg-black flex text-white">
      <div className="bg-gray-900 max-sm:w-full w-3/5 font-medium max-sm:font-normal p-6">
        <div className="flex justify-between items-center">
          <div className="text-xl">INTEGRO</div>
          <div className="cursor-pointer hidden max-sm:block transform transition-transform hover:rotate-180 hover:bg-slate-600" onClick={sideDrawerClosedHandler}>
            <FaTimes size={24} />
          </div>
        </div>
        <div className="mt-48 max-sm:mt-20  hide-scrollbar overflow-y-scroll h-4/6">
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
              isOpen={item.id === openItemId}
              toggleAccordion={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:flex  bg-gray-950 w-2/5 p-6 justify-center items-center">
        <div className="cursor-pointer absolute top-6 right-10 float-end transform transition-transform hover:rotate-180" onClick={sideDrawerClosedHandler}>
            <FaTimes size={24} />
        </div>
        <div className="text-sm mb-20">
          <p className="mb-4">HAVE A PROJECT?</p>
          <p className="mb-8 text-lg font-medium underline">INFO@WEBSITE.COM</p>
          <p className="mb-4">WANT TO WORK WITH US?</p>
          <p className="mb-8 text-lg font-medium flex gap-3 "><span className="">SEND BRIEF</span> <span className=" mt-1 text-yellow-400"><HiOutlineArrowLongRight/></span></p>
          <p className="mb-4">WANT TO SEE WHAT WE DO?</p>
          <p className=" text-lg font-medium flex gap-3"><span className="">VIEW PORTFOLIO</span> <span className=" mt-1 text-yellow-400"><HiOutlineArrowLongRight/></span></p>
        </div>
      </div>
    </div>
  );
};

export default DrawerAccordion;
