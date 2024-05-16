"use client"



import Link from "next/link";
import React, { useState } from "react";
import "../styles/header.css"
import { LiaExternalLinkAltSolid } from "react-icons/lia";


const Sidebar = ({ buttons,activeButtonId,setActiveButton }) => {
  return (
    <>
    <div className="sidebar text-white flex flex-col gap-5 max-lg:gap-9 max-md:hidden">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setActiveButton(button.id)}
          className={` lg:min-w-60 p-6 max-lg:w-48 max-lg:px-1 max-lg:py-3 rounded-md bg-gray-800 font-medium text-xl max-lg:text-base  ${button.id === activeButtonId ? 'border-2 border-blue-500' : ''}`}
        >
            
          {button.label}
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
  
    return (
      <div className="content text-white max-md:hidden">
        {activeButton?.content && (
          <div>
            {activeButton.content.length > 0 ? (
              <div>
                <div className="">
                  <h1 className="pb-10 text-4xl max-lg:text-2xl font-semibold">{activeButton.content_label}</h1>
                </div>
                <div className="content-buttons h-12 max-lg:h-10 flex items-center justify-center p-1 px-5 gap-8 max-lg:gap-5  w-fit rounded-lg bg-slate-700">
                  {activeButton.content.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleContentButtonChange(index);
                        handleContentChange(0);
                      }}
                      className={`py-2.5 max-lg:py-1 ${index === activeContentButtonIndex ? ' border-b-4 rounded-sm text-white' : 'bg-gray-700 text-white'}`}
                    >
                      Button {index + 1}
                    </button>
                  ))}
                </div>
                <div className="mt-10">
                  {activeButton.content[activeContentButtonIndex].headings.map((heading, headingIndex) => (
                    <div className="my-4" key={headingIndex}>
                      <h1 className="text-2xl max-lg:text-lg max-md:text-base">{heading}</h1>
                      <ul className="pl-8 list-disc">
                        {activeButton.content[activeContentButtonIndex].lists[headingIndex].map((item, itemIndex) => (
                          <li className=" xl:text-lg 2xl:text-xl max-lg:text-base lg:text-base xl:mt-2" key={itemIndex}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
               <div className=" mt-10 max-lg:mt-5 text-lg"> <Link href={activeButton.href} className=" text-blue-600 ">See More... </Link></div>
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
      content_label:"Mobile Application Development",
      href : "/mobile-application",
      content: [
        {
            headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
            lists: [
              ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
              ["jhvhjjh jhjbv jhvjh hjvjhuyfuj uvuyvj uyuy uyvjhvuyvuyv","Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ",],
            ],
          },
          {
            headings: ["Heading1.2", "Heading2.2"],
            lists: [
              ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
              ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
            ],
          },
          {
            headings: ["Heading1.3", "Heading2.3"],
            lists: [
               ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
              ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
            ],
          },
        
         
      ],
    },
    {
        id: 2,
        label: "Cross-platforms",
        content_label:"Savin Yadav",
        href : "/cross-platform",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
            
             
          ],
      },
      {
        id: 3,
        label: "UI/UX Design",
        href : "/ui-ux-design",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
            
             
          ],
      },
      {
        id: 4,
        label: "Web Application",
        href : "/web-application",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
            
             
          ],
      },
      {
        id: 5,
        label: "Backend Service",
        href : "/backend-service",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
            
             
          ],
      },
      {
        id: 6,
        label: "Custom Software",
        href : "/custom-software",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
            
             
          ],
      },
      {
        id: 7,
        label: "Ecommerce & CMS",
        href : "/ecommerce-cms",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
            
             
          ],
      },
      {
        id: 8,
        label: "Software Testing",
        href : "/software-testing",
        content: [
            {
                headings: ["1. Texhnologies and Tools:", "2. Development Process:"],
                lists: [
                  ["Programming Languages: Java and Kotlin for native Android app development.", "Integrated Development Environment (IDE): Android Studio for code editing, debugging, and testing.", "Android SDK and Jetpack Components: Utilization of Android SDK Jetpack libraries for buliding robust ,feature-rih android apps"],
                  ["Requirement Analysis: fklqwhjfh nqfdlkflkq lqdjlkqj lqnjdlkqj ljflqn ldlq ljlwqjflqj ljwfljwl fjwljwljwl fwjljj3oiuoi32 rjrlwjlkwejf", "Agile Development Methodology: cwlkcwkle cnlkewnl clwnlfnlkwjf flnwlknflw lwmlflkwm wclmlfnwl lfrwlfmwlj fnmwlkjrkwl flnwlnflkw lwmflwlw lwfmlfjlemlmlkmrel nlenlke lnelknlke venlknlke ", "Design Prototyping: lnslnvl nclkwenlfnm  ekwnlfknwf lnlkegfnlkegn  lneglkne gleknle glenml gelkgmlkem lg le gel lkmgklrmgeklr glemglkrmlkg gklemglk e glkemngklemlk cnkjncvkewj ","Programming Languages: Java and Kotlin for native Android app development.","Programming Languages: Java and Kotlin for native Android app development."],
                ],
              },
              {
                headings: ["Heading1.2", "Heading2.2"],
                lists: [
                  ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
              },
              {
                headings: ["Heading1.3", "Heading2.3"],
                lists: [
                   ["'List 1' Item 1", "'List 1' Item 2", "'List 1' Item 3"],
                  ["'List 2' Item 1", "'List 2' Item 2", "'List 2' Item 3"],
                ],
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
    <h1 className=" text-2xl max-sm:text-lg max-md:text-xl max-lg:text-2xl font-medium">SERVICES</h1>
     <p className=" text-5xl max-sm:text-lg max-md:text-xl max-lg:text-2xl font-bold my-5">We are a creative agency and offers <br/> Services in various technologies</p>
     <div className="home-sidebar flex gap-20 max-lg:gap-16 lg:pt-10 max-lg:pt-10 max-sm:pt-3">
      <Sidebar buttons={buttons} activeButtonId={activeButtonId} setActiveButton={setActiveButton} />
      <Content buttons={buttons} activeButtonId={activeButtonId} />
    </div>
    </div>
    </>
  );
};

export default HomeSidebar;
