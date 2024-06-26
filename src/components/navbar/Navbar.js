"use client";

import { FaBars } from "react-icons/fa6";
import "../../app/globals.css";
import { useEffect, useState } from "react";
import DrawerAccordian from "./DrawerAccordian";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "./cards/data/card-data"; // Import the InfoCard component and navItems
import InfoCard from "./cards/Card";

export default function Header() {
  const pathname = usePathname();

  // STATE TO TRACK IF SIDEDRAWER IS OPEN OR CLOSED
  const [showSideDrawer, setshowSideDrawer] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // State to track the hovered item
  const [isCardVisible, setIsCardVisible] = useState(false); // State to control card visibility
  

  console.log("card visible", isCardVisible);

  // FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  // FUNCTION TO HANDLE OPEN ACTION ON SIDEDRAWER/MODAL
  const showSidebar = () => {
    setshowSideDrawer(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const checkScreenSize = () => {
    if (window.innerWidth >= 1024) {
      setshowSideDrawer(false);
      document.body.style.overflow = "unset"; // Unset background scrolling
    }
  };

  // useEffect to check screen size on initial render and resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getNavItemContent = (key) => {
    const item = navItems.find((navItem) => navItem.key === key);
    return item ? item : { title: "", categories: [] };
  };

  return (
    <>
      <nav className="w-full  absolute mt-6 max-md:px-2 px-5">
        <div className="max-lg:hidden lg:w-[980px] xl:w-[1000px] 2xl:w-[1150px] max-w-[1150px] mx-auto bg-slate-700 text-white rounded-lg">
          <div className="">
            <ul
              className="h-14 flex items-center justify-between gap-5 font-medium tracking-wide text-lg mx-4"
              onMouseLeave={() => setIsCardVisible(false)} // Hide card when mouse leaves the navbar
            >
              <li className="py-3 flex mr-32">logo</li>
              <li
                className={`py-1.5 rounded px-3  ${(hoveredItem === "something" ) ? "bg-slate-500" : ""} ${
                  pathname === "/" ? "" : ""
                }`}
                onMouseEnter={() => {
                  setHoveredItem("something");
                  setIsCardVisible(false);
                }}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Link href="/">Something</Link>
              </li>
              <Link href="/about">
                <li
                  className={`py-1.5 rounded px-3  ${(isCardVisible === true && hoveredItem === "about" ) ? "bg-slate-500" : ""}`}
                  onMouseEnter={() => {
                    setHoveredItem("about");
                    setIsCardVisible(true);
                  }}
                >
                  ABOUT
                </li>
              </Link>
                <li
                  className={`py-1.5 rounded px-3 ${(isCardVisible === true && hoveredItem === "career" ) ? "bg-slate-500" : ""}`}
                  onMouseEnter={() => {
                    setHoveredItem("career");
                    setIsCardVisible(true);
                  }}
                >
                  CAREER
                </li>
                <li
                  className={`py-1.5 rounded px-3 ${(isCardVisible === true && hoveredItem === "services" ) ? "bg-slate-500" : ""}`}
                  onMouseEnter={() => {
                    setHoveredItem("services");
                    setIsCardVisible(true);
                  }}
                >
                  SERVICES
                </li>
              <Link href="/portfolio">
                <li
                  className={`py-1.5 rounded px-3 ${(hoveredItem === "portfolio" ) ? "bg-slate-500" : ""}`}
                  onMouseEnter={() => {
                    setHoveredItem("portfolio");
                    setIsCardVisible(false);
                  }}
                  onMouseLeave={() => setHoveredItem("")}
                >
                  PORTFOLIO
                </li>
              </Link>
              <Link href="/contact-us">
                <li
                  className={`py-1.5 rounded px-3 ${(hoveredItem === "contact" ) ? "bg-slate-500" : ""}`}
                  onMouseEnter={() => {
                    setHoveredItem("contact");
                    setIsCardVisible(false);
                  }}
                  onMouseLeave={() => setHoveredItem("")}
                >
                  CONTACT-US
                </li>
              </Link>
            </ul>
          </div>
          {isCardVisible && (
            <div
              className={`bg-slate-700rounded-b-lg transition-all duration-1000 ease-in-out  opacity-100 overflow-hidden`}
              onMouseEnter={() => setIsCardVisible(true)} // Keep card visible when mouse enters the card
              onMouseLeave={() => setIsCardVisible(false)} // Hide card when mouse leaves the card
            >
              <InfoCard
                categories={getNavItemContent(hoveredItem).categories}
              />
            </div>
          )}
        </div>
        <div className="lg:hidden mx-auto bg-slate-700 text-white rounded-lg w-12/12">
          <div className=" max-sm:h-12 h-14 flex w-full justify-between px-3 sm:px-5">
            <div className="  flex items-center">Logo</div>
            <div
              onClick={showSidebar}
              className=" max-sm:h-12 h-14 flex items-center justify-center text-2xl"
            >
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`h-screen w-full text-white z-30 absolute top-0 ${
          showSideDrawer
            ? "transform transition-all duration-500 ease-in-out translate-y-0"
            : "transform transition-all duration-500 ease-in-out -translate-y-full"
        }`}
      >
        <DrawerAccordian sideDrawerClosedHandler={sideDrawerClosedHandler} />
      </div>
    </>
  );
}
