"use client";

import { FaBars } from "react-icons/fa6";
import "../../app/globals.css";
import { useEffect, useState } from "react";
import DrawerAccordian from "./DrawerAccordian";
import { usePathname } from "next/navigation";
import Link from "next/link";
import InfoCard, { navItems } from "./cards/Card"; // Import the InfoCard component and navItems

export default function Header() {
  const pathname = usePathname();

  // STATE TO TRACK IF SIDEDRAWER IS OPEN OR CLOSED
  const [showSideDrawer, setshowSideDrawer] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // State to track the hovered item
  const [isCardVisible, setIsCardVisible] = useState(false); // State to control card visibility

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
      <nav className="w-full absolute mt-6 max-md:px-2 px-5">
        <div className="max-lg:hidden lg:w-[980px] xl:w-[1000px] 2xl:w-[1200px] max-w-[1200px] mx-auto bg-slate-700 text-white rounded-lg">
          <div className="h-14">
            <ul
              className="h-14 flex items-center justify-between gap-10 font-medium tracking-wide text-lg mx-4"
              onMouseLeave={() => setIsCardVisible(false)} // Hide card when mouse leaves the navbar
            >
              <li className="py-3 flex mr-20">logo</li>
              <li className={`py-3 flex gap-2 ${pathname === "/" ? "border-b-4" : ""}`}>
                <Link href="/">HOME</Link>
              </li>
              <li
                className="py-3 flex gap-2"
                onMouseEnter={() => { setHoveredItem("about"); setIsCardVisible(true); }}
              >
                ABOUT
              </li>
              <li
                className="py-3 flex gap-2"
                onMouseEnter={() => { setHoveredItem("career"); setIsCardVisible(true); }}
              >
                CAREER
              </li>
              <li
                className="py-3 flex gap-2"
                onMouseEnter={() => { setHoveredItem("services"); setIsCardVisible(true); }}
              >
                SERVICES
              </li>
              <li
                className="py-3 flex gap-2"
                onMouseEnter={() => { setHoveredItem("portfolio"); setIsCardVisible(true); }}
              >
                PORTFOLIO
              </li>
              <li
                className="py-3 flex gap-2"
                onMouseEnter={() => { setHoveredItem("contact"); setIsCardVisible(true); }}
              >
                CONTACT-US
              </li>
            </ul>
          </div>
          {isCardVisible && (
            <div
              className={`bg-slate-700 rounded-b-lg transition-all duration-1000 ease-in-out max-h-screen opacity-100 overflow-hidden`}
              onMouseEnter={() => setIsCardVisible(true)} // Keep card visible when mouse enters the card
              onMouseLeave={() => setIsCardVisible(false)} // Hide card when mouse leaves the card
            >
              <InfoCard categories={getNavItemContent(hoveredItem).categories} />
            </div>
          )}
        </div>
        <div className="lg:hidden mx-auto bg-slate-700 text-white rounded-lg w-12/12">
          <div className="flex w-full justify-between px-3 sm:px-5">
            <div className="h-14 flex items-center">Logo</div>
            <div onClick={showSidebar} className="h-14 flex items-center text-2xl">
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`h-screen w-screen text-white z-30 absolute top-0 ${
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
