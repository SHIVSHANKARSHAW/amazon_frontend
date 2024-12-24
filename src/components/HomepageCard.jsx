import React from "react";

const HomepageCard = ({ title, img, link }) => {
  return (
    <div className="h-[420px] bg-white z-30 m-3">
      <div className="text-lg xl:text-xl font-semibold mt-4">{title}</div>
      <div className="h-[300px] m-4">
        <img src={img} alt="Grid Image" className="object-cover h-[100%] w-[100%]"/>
      </div>
      <div className="text-xs xl:text-sm text-blue-600 ">{link}</div>
    </div>
  );
};

export default HomepageCard;
