"use client";

import {
  FaHome,
  FaBriefcase,
  FaCog,
  FaFolderOpen,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import DrawerAccordian from "./DrawerAccordian"
import { usePathname } from "next/navigation";
import Link from "next/link";
import ServiceCard from "./cards/ServiceCard";


export default function Header() {
  const pathname = usePathname();

  // STATE TO TRACK IF SIDEDRAWER IS OPEN OR CLOSED
  const [showSideDrawer, setshowSideDrawer] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);


  //  FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
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


  return (
    <>
      <nav className=" w-full absolute mt-6  max-md:px-2 px-5">
        <div className={` max-lg:hidden lg:w-[980px] xl:w-[1000px] 2xl:w-[1200px]  max-w-[1200px] mx-auto bg-slate-700 text-white rounded-lg `}>
          <div className="h-14">
            <ul
              className={`h-14 flex items-center justify-between gap-10 font-medium tracking-wide text-xl mx-4`}
            >
              <li className=" py-3 flex mr-20">logo</li>
              <li className={`py-3 flex gap-2 ${pathname === "/" ? "border-b-4" : ""}` }><Link href="/">HOME</Link></li>
              <li className=" py-3 flex gap-2">ABOUT</li>
              <li className=" py-3 flex gap-2">CAREER</li>
              <li 
              className="py-3 flex gap-2 relative"
              onMouseEnter={() => setIsHoveringServices(true)}
              onMouseLeave={() => setIsHoveringServices(false)}
              >SERVICES</li>
              <li className=" py-3 flex gap-2">PORTFOLIO</li>
              <li className=" py-3 flex gap-2">CONTACT-US</li>
            </ul>
          </div>
          {
            <div
              className={`bg-slate-700 rounded-b-lg transition-all duration-500 ease ${
                isHoveringServices ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
              onMouseEnter={() => setIsHoveringServices(true)}
              onMouseLeave={() => setIsHoveringServices(false)}
            >
              <ServiceCard />
            </div>
          }
        </div>
        <div className={` lg:hidden mx-auto bg-slate-700 text-white rounded-lg w-12/12 `}>
          <div className=" flex w-full justify-between px-3 sm:px-5">
            <div className=" h-14 flex items-center">Logo</div>
            <div
              onClick={showSidebar}
              className=" h-14 flex items-center text-2xl"
            >
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`h-screen w-screen text-white z-30 absolute top-0  ${
          showSideDrawer
            ? "transform transition-all duration-500 ease-in-out translate-y-0"
            : "transform transition-all duration-500 ease-in-out -translate-y-full"
        } `}
      >
        <DrawerAccordian sideDrawerClosedHandler={sideDrawerClosedHandler} />
        
      </div>
      <div className="hidden absolute bg-transparent pr-4 pt-[70px] z-10 w-screen h-fit bg-white  justify-center max-lg:px-3">
      <div
        className={` bg-slate-700  rounded-lg md:min-w-max text-white  ${
          isHoveringServices
            ? "transform transition-all duration-500 ease-in-out translate-y-0"
            : "transform transition-all duration-500 ease-in-out -translate-y-full"
        } `}
      >
        <ServiceCard/>
        
      </div>
      </div>
    </>
  );
}
