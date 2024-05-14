import React, { useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";


const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className=" mb-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center gap-10 py-2 text-xl focus:outline-none transition-all duration-800 ease-in-out"
      >
        <span>{title}</span>
        <span className=""><HiArrowNarrowRight /></span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 transition-all duration-800 ease-in-out">
          <ul className="transition-all duration-800 ease-in-out">
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
            className="flex justify-between items-center gap-3  focus:outline-none"
          >
            {item.title}
            {openItemId === item.id ? (
              <IoChevronUpSharp className="h-5 w-5" />
            ) : (
              <IoIosArrowDown className="h-5 w-5" />
            )}
          </button>
          {openItemId === item.id && (
            <div className=" ml-24 py-2 ">
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

const Accordion = () => {
  const accordionItems = [
    {
      id: 1,
      title: "HOME",
      content: [
        {text: "Utility-first CSS framework"},
        { text: "Rapidly build custom designs" },
        { text: "Focus on functionality over aesthetics" },
        {nestedAccordion: [
            {
              id: 11,
              title: "Tailwind Features",
              content: [
                { label: "Responsive design", url: "#" },
                { label: "Customizable utilities", url: "#" },
                { label: "Dark mode support", url: "#" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "PORTFOLIO",
      content: [
        { text: "Saves development time" },
        { text: "Consistent design across projects" },
        {
          text: "Responsive and mobile-friendly",
          nestedAccordion: [
            {
              id: 21,
              title: "Responsive Design",
              content: [
                { label: "Mobile-first approach", url: "#" },
                { label: "Breakpoint system", url: "#" },
                { label: "Responsive utilities", url: "#" },
              ],
            },
          ],
        },
      ],
    },
    {
        id: 3,
        title: "ABOUT",
        content: [
          { text: "Saves development time" },
          { text: "Consistent design across projects" },
          {
            text: "Responsive and mobile-friendly",
            nestedAccordion: [
              {
                id: 31,
                title: "Responsive Design",
                content: [
                  { label: "Mobile-first approach", url: "#" },
                  { label: "Breakpoint system", url: "#" },
                  { label: "Responsive utilities", url: "#" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "PORTFOLIO",
        content: [
          { text: "Saves development time" },
          { text: "Consistent design across projects" },
          {
            text: "Responsive and mobile-friendly",
            nestedAccordion: [
              {
                id: 41,
                title: "Responsive Design",
                content: [
                  { label: "Mobile-first approach", url: "#" },
                  { label: "Breakpoint system", url: "#" },
                  { label: "Responsive utilities", url: "#" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "CAREER",
        content: [
          { text: "Saves development time" },
          { text: "Consistent design across projects" },
          {
            text: "Responsive and mobile-friendly",
            nestedAccordion: [
              {
                id: 51,
                title: "Responsive Design",
                content: [
                  { label: "Mobile-first approach", url: "#" },
                  { label: "Breakpoint system", url: "#" },
                  { label: "Responsive utilities", url: "#" },
                ],
              },
            ],
          },
        ],
      },
    {
      id: 6,
      title: "CONTACT-US",
      content: [
        { text: "Install Tailwind CSS via npm or yarn" },
        { text: "Configure Tailwind in your project" },
        { text: "Start using Tailwind utility classes" },
      ],
    },
  ];

  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <div className="w- w-full flex text-white">
        <div className=" bg-slate-900 w-full md:w-1/2 h-screen pt-28 font-semibold">
            <div className="max-w-md mx-auto mt-8">
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
        <div className=" bg-slate-950 w-1/2 h-screen hidden md:block"></div>
    </div>
  );
};

export default Accordion;
