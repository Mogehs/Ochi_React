import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Cards = () => {
  return (
    <div className="w-full min-h-[20rem]  p-[2rem] bg-zinc-950 grid gap-3 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative ">
      <div className="w-full  h-[18rem]  col-span-1 md:col-span-2  ">
        <Card1 />
      </div>
      <div className="w-full h-[18rem] col-span-1  ">
        <Card2 />
      </div>
      <div className="w-full  h-[18rem] col-span-1  ">
        <Card3 />
      </div>
    </div>
  );
};

export default Cards;
