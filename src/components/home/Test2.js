
import React from "react";
import Link from "next/link";
import Image from "next/image";




const IndustryCard = () => {

    const industries = [
        {
            id: 1,
            title: "Education",
            icon: "image 367"
          },
          {
            id: 2,
            title: "Ecommerce",
            icon: "image 368"
        
          },
          {
            id: 3,
            title: "Restaurnt",
            icon: "image 369"
        
          },
          {
            id: 4,
            title: "Travel",
            icon: "image 370"
        
          },
          {
            id: 5,
            title: "Entertainment",
            icon: "image 371"
        
          },
          {
            id: 6,
            title: "Social media",
            icon: "image 372"
        
          },
          {
            id: 7,
            title: "Real State",
            icon: "image 375"
        
          },
          {
            id: 8,
            title: "Healthcare",
            icon: "image 376"
        
          },
          {
            id: 9,
            title: "Finance",
            icon: "image 377"
        
          },
          {
            id: 10,
            title: "Logistics",
            icon: "image 378"
        
          },
          {
            id: 11,
            title: "SaaS",
            icon: "image 379"
        
        
          },
          {
            id: 12,
            title: "News/News",
            icon: "image 380"
        
          },
        ];

    return (
      <div className="min-h-screen text-white max-sm:mx-4 mx-5">
        <div className="container mx-auto py-8">
            <h1 className=" color_2 text-2xl max-sm:text-lg max-md:text-xl max-lg:text-2xl text-white font-medium">Industries</h1>
          <h1 className="text-pretty text-5xl font-semibold max-sm:text-lg max-md:text-xl max-lg:text-2xl text-white my-3 sm:my-5 md:my-7 lg:my-4 mb-5 lg:mb-5">Our Vision to Caters to Diverse Industry Demands</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 max-sm:gap-5 gap-10">
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col items-center border border-neutral-600 bgcolor_3 text-white p-4 rounded-lg shadow-md">
                <div className="text-4xl mb-2 w-[65px] max-sm:w-[50px]"><Image src={`/images/home-card/${industry.icon}.png`} alt="alt" width={100} height={100} /></div>
                <div className=" text-base lg:text-lg font-normal">{industry.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default IndustryCard;