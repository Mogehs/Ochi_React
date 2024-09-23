import React from "react";
import ServiceCard from "./ServiceCard";

const SerCards = ({ children, head, para }) => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-start gap-[21vw] py-[1.5vw] px-[4vw]  msm:max-md:flex-col msm:max-md:gap-[10vw]  ">
      <div className="w-[20vw] captilized text-[1rem] msm:max-md:w-[30vw]">
        {children}
      </div>
      <div className="w-[65vw] h-[70vh] text-[1vw] grid grid-cols-2 gap-3 gap-y-3 msm:max-md:grid-cols-3 msm:max-md:w-[90vw]  ">
        <ServiceCard
          head={"100%"}
          para={"Clients from 17+ countries"}
        ></ServiceCard>
        <ServiceCard
          head={"$280+"}
          para={"Millions of raised clients"}
        ></ServiceCard>
        <ServiceCard head={"90%"} para={"Of our client comeback"}></ServiceCard>
        <ServiceCard head={"98%"} para={"Net promoting Score"}></ServiceCard>
      </div>
    </div>
  );
};

export default SerCards;
