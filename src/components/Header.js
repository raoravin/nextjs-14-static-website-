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
import "../styles/header.css";
import { useEffect, useState } from "react";
import DrawerAccordian from "./DrawerAccordian"
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Header() {
  const pathname = usePathname();

  // STATE TO TRACK IF SIDEDRAWER IS OPEN OR CLOSED
  const [showSideDrawer, setshowSideDrawer] = useState(false);

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
      <nav className=" w-full absolute mt-6 overflow-x-hidden max-lg:px-3">
        <div className={` max-lg:hidden w-7/12 mx-auto bg-slate-700 text-white rounded-lg md:min-w-max`}>
          <div className="">
            <ul
              className={`h-14 flex items-center justify-between gap-10 font-medium tracking-wide text-xl mx-4`}
            >
              <li className=" py-3 flex mr-20">logo</li>
              <li className={`py-3 flex gap-2 ${pathname === "/" ? "border-b-4" : ""}` }><Link href="/">HOME</Link></li>
              <li className=" py-3 flex gap-2">ABOUT</li>
              <li className=" py-3 flex gap-2">CAREER</li>
              <li className=" py-3 flex gap-2">SERVICES</li>
              <li className=" py-3 flex gap-2">PORTFOLIO</li>
              <li className=" py-3 flex gap-2">CONTACT-US</li>
            </ul>
          </div>
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
        className={`h-screen w-screen text-white z-50 absolute top-0  ${
          showSideDrawer
            ? "transform transition-all duration-500 ease-in-out translate-y-0"
            : "transform transition-all duration-500 ease-in-out -translate-y-full"
        } `}
      >
        <div className={`h-20 flex justify-between absolute`}>
          <div className="">Logo</div>
          <div className="flex gap-3"><span className=" text-lg ">Close</span> <span  onClick={sideDrawerClosedHandler} className=" h-5 text-xl mt-1 cursor-pointer transition-transform transform-gpu hover:rotate-90"><FaTimes /></span></div>
        </div>
        <DrawerAccordian />
      </div>
    </>
  );
}
