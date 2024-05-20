




import React from 'react';
import "../../../styles/navbar.css"

const InfoCard = ({ categories }) =>{ 
  return(
  <div className="w-full scroll-nav-card lg:max-h-[460px] 2xl:max-h-[600px] overflow-y-auto p-10 bg-slate-700 text-white rounded-lg shadow-lg">
    <div dangerouslySetInnerHTML={{ __html: categories.html }}></div>
  </div>
);
}

export default InfoCard;
