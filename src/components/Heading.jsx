import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className=" font-neue text-[1.5rem] text-wrap leading-[1.5rem] md:text-[2rem] md:leading-[1.9rem] lg:text-[2.5rem] lg:leading-[2.4rem] px-[1.5rem] py-[3rem]  ">
      {children}
    </h2>
  );
};

export default Heading;
