import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Cards = () => {
  return (
    <div className="w-full h-[70vh]  p-[3.5vw] bg-zinc-950 grid grid-cols-4 justify-items-center  md:max-lg:grid-cols-2 gap-3  msm:max-md:grid-cols-1 msm:max-md:h-screen border-t border-t-zinc-900 relative ">
      <div className="col-span-2 w-full h-full">
        <Card1 />
      </div>
      <div className="col-span-1 w-full h-full msm:max-md:col-span-2">
        <Card2 />
      </div>
      <div className="col-span-1 w-full h-full msm:max-md:col-span-2">
        <Card3 />
      </div>
    </div>
  );
};

export default Cards;
