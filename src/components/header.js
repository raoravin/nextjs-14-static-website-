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
import { useState } from "react";

export default function Header() {
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

  return (
    <>
      <nav className="relative h-14 mt-6 overflow-x-hidden">
        <div className="header absolute left-1/2 transform -translate-x-1/2 bg-slate-700 text-white rounded-lg md:min-w-max">
          <div className=" hidden lg:block">
            <ul
              className={`h-14 flex items-center justify-between gap-10 font-medium tracking-wide text-xl mx-4`}
            >
              <li className="border-b-4 py-3 flex gap-2">HOME</li>
              <li className=" py-3 flex gap-2">ABOUT</li>
              <li className=" py-3 flex gap-2">CAREER</li>
              <li className=" py-3 flex gap-2">SERVICES</li>
              <li className=" py-3 flex gap-2">PORTFOLIO</li>
              <li className=" py-3 flex gap-2">CONTACT-US</li>
            </ul>
          </div>
        </div>
        <div className="header block lg:hidden absolute left-1/2 right-1/2 transform -translate-x-1/2 bg-slate-700 text-white rounded-lg w-11/12">
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
        className={`h-screen w-screen bg-white z-50 absolute top-0 ${
          showSideDrawer
            ? "transform transition-all duration-500 ease-in-out translate-y-0"
            : "transform transition-all duration-500 ease-in-out -translate-y-full"
        }`}
      ></div>
    </>
  );
}
