import React from "react";
import ServiceCard from "./ServiceCard";

const SerCards = ({ children }) => {
  return (
    <div className=" w-full p-[1rem] flex flex-col items-start font-neue overflow-hidden md:flex-row rounded-t-xl -mt-1 ">
      <div className="text-[1rem] p-[1.6rem] md:w-[40vw] md:text-[1.3rem] md:p-[1rem]">
        {children}
      </div>
      <div className="w-full grid px-[1.5rem] justify-items-start content-center grid-cols-1 gap-[0.5rem] md:grid-cols-2 md:p-[1rem] md:justify-items-center  ">
        <ServiceCard
          className="col-span-4"
          head={"100%"}
          para={"Clients from 17+ countries"}
        ></ServiceCard>
        <ServiceCard
          className="col-span-4"
          head={"$280+"}
          para={"Millions of raised clients"}
        ></ServiceCard>
        <ServiceCard
          className="col-span-4"
          head={"90%"}
          para={"Of our client comeback"}
        ></ServiceCard>
        <ServiceCard
          className="col-span-4"
          head={"98%"}
          para={"Net promoting Score"}
        ></ServiceCard>
      </div>
    </div>
  );
};

export default SerCards;
