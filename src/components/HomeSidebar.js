"use client"



import Link from "next/link";
import React, { useState } from "react";

const Sidebar = ({ buttons,activeButtonId,setActiveButton }) => {
  return (
    <div className="sidebar text-white flex flex-col gap-5">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setActiveButton(button.id)}
          className={`min-w-60 p-6 rounded-md bg-gray-800 font-medium text-lg  ${button.id === activeButtonId ? 'border-2 border-blue-500' : ''}`}
        >
            
          {button.label}
        </button>
      ))}
    </div>
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
      <div className="content text-white">
        {activeButton?.content && (
          <div>
            {activeButton.content.length > 0 ? (
              <div>
                <div className="">
                  <h1 className="pb-10 text-4xl font-semibold">{activeButton.content_label}</h1>
                </div>
                <div className="content-buttons h-12 flex items-center justify-center p-1 px-5 gap-8  w-fit rounded-lg bg-slate-700">
                  {activeButton.content.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleContentButtonChange(index);
                        handleContentChange(0);
                      }}
                      className={`py-3 ${index === activeContentButtonIndex ? ' border-b-4 rounded-sm text-white' : 'bg-gray-700 text-white'}`}
                    >
                      Button {index + 1}
                    </button>
                  ))}
                </div>
                <div className="mt-10">
                  {activeButton.content[activeContentButtonIndex].headings.map((heading, headingIndex) => (
                    <div className="my-4" key={headingIndex}>
                      <h1 className="text-xl">{heading}</h1>
                      <ul className="px-8 list-disc">
                        {activeButton.content[activeContentButtonIndex].lists[headingIndex].map((item, itemIndex) => (
                          <li className="py-1" key={itemIndex}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link href={activeButton.href} className=" text-blue-600">See More... </Link>
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
      href : "/",
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
        id: 2,
        label: "Cross-platforms",
        content_label:"Savin Yadav",
        href : "/",
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
        href : "/",
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
        href : "/",
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
        href : "/",
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
        href : "/",
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
        href : "/",
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
        href : "/",
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
    // Add more buttons and content as needed
  ]);

  const [activeButtonId, setActiveButtonId] = useState(1);

  const setActiveButton = (id) => {
    setActiveButtonId(id);
  };

  return (
    <div className="home-sidebar flex gap-20">
      <Sidebar buttons={buttons} activeButtonId={activeButtonId} setActiveButton={setActiveButton} />
      <Content buttons={buttons} activeButtonId={activeButtonId} />
    </div>
  );
};

export default HomeSidebar;
