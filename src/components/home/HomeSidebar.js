"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Image from "next/image";

const sidebarIcon = []

const Sidebar = ({ buttons, activeButtonId, setActiveButton }) => {
  return (
    <>
      <div className="sidebar text-white flex flex-col gap-6 max-lg:gap-6 max-md:hidden">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveButton(button.id)}
            className={` w-[270px] max-lg:w-[200px] h-[70px] max-lg:h-[55px] border-2 flex items-center  gap-3 py-2 px-3   rounded-md bg-gray-800 font-medium text-xl max-lg:text-sm  ${
              button.id === activeButtonId ? " border-blue-600" : "border-neutral-600"
            }`}
          >
            <span className="w-12 max-lg:w-9"><Image src={`/images/sidebar/${button.icon}.png` }alt="alt" width={50} height={50} /></span>
            <span className="">{button.label}</span>

          </button>
        ))}
      </div>
      <div className="hidden max-md:block mx-auto">
        <div className="grid grid-cols-2 max-[400px]:gap-x-3 gap-x-8 gap-5 ">
          {buttons.map((button) => (
            <Link
              href={button.href}
              key={button.id}
              onClick={() => setActiveButton(button.id)}
              className={` min-h-12 h-16 max-[360px]:min-w-32 min-w-40 sm:w-44  flex items-center justify-center  rounded-md bg-gray-800 max-sm:text-sm font-medium`}
            >
              <span className=" text-center">{button.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const Content = ({ buttons, activeButtonId }) => {
  const activeButton = buttons.find((button) => button.id === activeButtonId);

  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [activeContentButtonIndex, setActiveContentButtonIndex] = useState(0);

  const handleContentChange = (index) => {
    setActiveContentIndex(index);
  };

  const handleContentButtonChange = (index) => {
    setActiveContentButtonIndex(index);
  };

  const contentButtonNames = ["Android", "iOS App", "iPad App"];

  return (
    <div className="content text-white max-md:hidden ">
      {activeButton?.content && (
        <div>
          {activeButton.content.length > 0 ? (
            <div>
              <div>
                <h1 className="pb-10 max-lg:pb-6 text-pretty text-4xl max-lg:text-2xl font-semibold">{activeButton.content_label}</h1>
              </div>
              <div className=" content-buttons h-14 max-lg:h-12 flex items-center justify-center p-1 px-7  gap-9 max-lg:gap-5  w-fit rounded-lg bg-slate-700">
                {activeButton.content.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleContentButtonChange(index);
                      handleContentChange(0);
                    }}
                    className={`py-2.5 max-lg:py-2 font-medium text-lg ${index === activeContentButtonIndex ? 'border-b-4 rounded-sm text-white' : 'bg-gray-700 text-white'}`}
                  >
                     {contentButtonNames[index]}
                  </button>
                ))}
              </div>
              <div className="mt-10 max-lg:mt-6  max-lg:text-sm max-lg:h-[440px] h-[495px] overflow-y-scroll hide-scrollbar">
                <div dangerouslySetInnerHTML={{ __html: activeButton.content[activeContentButtonIndex].html }} />
              </div>
              <div className="mt-10 max-lg:mt-5 text-lg">
                <Link href={activeButton.href} className="text-blue-600">See More...</Link>
              </div>
            </div>
          ) : (
            <div>
              <h3>{activeButton.label}</h3>
              <p>No additional content available for this button.</p>
            </div>
          )}
        </div>
      )}
      {!activeButton?.content && <p>No content available for this button.</p>}
    </div>
  );
};

const HomeSidebar = () => {
  const [buttons] = useState([
    {
      id: 1,
      label: "Mobile Application",
      content_label: "Mobile Application Development",
      href: "/mobile-application",
      icon: "mobile-application",
      content: [
        {
          html: `
        <div class="space-y-5 max-lg:space-y-2">
          <div>
            <h2 class="text-2xl max-lg:text-lg font-bold mb-3 max-lg:mb-1">1. Technologies and Tools:</h2>
            <ul class="list-disc pl-8 space-y-1 xl:pr-[200px]">
              <li><span class="font-bold text-pretty break-words">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold  break-words">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold  break-words">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl max-lg:text-lg font-bold mb-3 max-lg:mb-1">2. Development Process:</h2>
            <ul class="list-disc pl-8 space-y-1 xl:pr-[200px]">
              <li><span class="font-bold text-pretty ">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold text-wrap ">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold text-pretty">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold text-pretty ">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold text-pretty ">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
        <div class="space-y-6">
          <!-- Section 1: Technologies and Tools -->
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
      ],
    },
    {
      id: 2,
      label: "Cross-platforms",
      content_label: "Savin Yadav",
      href: "/cross-platform",
      icon: "cross-platform",

      content: [
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
          <div class="space-y-5 max-lg:space-y-2">
            <div>
              <h2 class="text-2xl max-lg:text-lg font-bold mb-3 max-lg:mb-1">1. Technologies and Tools:</h2>
              <ul class="list-disc pl-8 space-y-1 xl:pr-[200px]">
                <li><span class="font-bold text-pretty break-words">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold  break-words">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold  break-words">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl max-lg:text-lg font-bold mb-3 max-lg:mb-1">2. Development Process:</h2>
              <ul class="list-disc pl-8 space-y-1 xl:pr-[200px]">
                <li><span class="font-bold text-pretty ">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold text-wrap ">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold text-pretty">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold text-pretty ">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold text-pretty ">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        }
      ],
    },
    {
      id: 3,
      label: "UI/UX Design",
      href: "/ui-ux-design",
      icon: "ux-ui",
      content: [
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
      ],
    },
    {
      id: 4,
      label: "Web Application",
      href: "/web-application",
      icon: "web-app",
      content: [
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
      ],
    },
    {
      id: 5,
      label: "Backend Service",
      href: "/backend-service",
      icon: "backend-service",

      content: [
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
          <div class="space-y-5 max-lg:space-y-2">
            <div>
              <h2 class="text-2xl max-lg:text-lg font-bold mb-3 max-lg:mb-1">1. Technologies and Tools:</h2>
              <ul class="list-disc pl-8 space-y-1 xl:pr-[200px]">
                <li><span class="font-bold text-pretty break-words">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold  break-words">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold  break-words">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl max-lg:text-lg font-bold mb-3 max-lg:mb-1">2. Development Process:</h2>
              <ul class="list-disc pl-8 space-y-1 xl:pr-[200px]">
                <li><span class="font-bold text-pretty ">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold text-wrap ">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold text-pretty">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold text-pretty ">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold text-pretty ">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        }
      ],
    },
    {
      id: 6,
      label: "Custom Software",
      href: "/custom-software",
      icon: "custom-software",
      content: [
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
      ],
    },
    {
      id: 7,
      label: "Ecommerce & CMS",
      href: "/ecommerce-cms",
      icon: "ecommerce-cms",
      content: [
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
      ],
    },
    {
      id: 8,
      label: "Software Testing",
      href: "/software-testing",
      icon: "soft-test",
      content: [
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
        {
          html: `
          <div class="space-y-6">
            
            <div>
              <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
                <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
                <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
                <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
                <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
                <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
                <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
              </ul>
            </div>
          </div>
        `,
        },
        {
          html: `
        <div class="space-y-6">
          
          <div>
            <h2 class="text-2xl font-bold mb-4">1. Technologies and Tools:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Programming Languages:</span> Java and Kotlin for native Android app development.</li>
              <li><span class="font-bold">Integrated Development Environment (IDE):</span> Android Studio for code editing, debugging, and testing.</li>
              <li><span class="font-bold">Android SDK and Jetpack Components:</span> Utilization of Android SDK and Jetpack libraries for building robust, feature-rich Android apps.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">2. Development Process:</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Requirements Analysis:</span> Thorough understanding of client needs, preferences, and project scope to define clear objectives and deliverables.</li>
              <li><span class="font-bold">Agile Development Methodology:</span> Agile methodologies for iterative development, allowing for flexibility, collaboration, and quick adaptation to evolving requirements.</li>
              <li><span class="font-bold">Design Prototyping:</span> Creation of wireframes and prototypes to visualize app layouts, features, and user interactions before development begins.</li>
              <li><span class="font-bold">Rigorous Testing:</span> Comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure app stability, functionality, and usability.</li>
              <li><span class="font-bold">Deployment and Support:</span> Seamless deployment to the Google Play Store and continued post-launch support to address any issues, updates, or enhancements.</li>
            </ul>
          </div>
        </div>
      `,
        },
      ],
    },
  ]);

  const [activeButtonId, setActiveButtonId] = useState(1);

  const setActiveButton = (id) => {
    setActiveButtonId(id);
  };

  return (
    <>
      <div className="max-sm:px-4 px-10 py-8">
        <h1 className=" text-2xl max-sm:text-base max-md:text-lg max-lg:text-xl font-medium">
          SERVICES
        </h1>
        <p className=" text-pretty text-5xl max-sm:text-lg max-md:text-xl max-lg:text-2xl font-semibold my-5">
          We are a creative agency and offers <br /> Services in various
          technologies
        </p>
        <div className="home-sidebar flex gap-20 max-lg:gap-16 lg:pt-10 max-lg:pt-10 max-sm:pt-3">
          <Sidebar
            buttons={buttons}
            activeButtonId={activeButtonId}
            setActiveButton={setActiveButton}
          />
          <Content buttons={buttons} activeButtonId={activeButtonId} />
        </div>
      </div>
    </>
  );
};

export default HomeSidebar;
