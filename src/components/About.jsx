import React, { useState } from "react";

import Button from "./Button";
import Heading from "./Heading";

import { easeInOut, motion } from "framer-motion";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.01"
      className="w-full   bg-[#CDEA68] rounded-t-2xl -mt-4"
    >
      <div className="text-black">
        <Heading>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </Heading>
      </div>
      <div className="w-[100vw] border-[0.01rem] border-[#75833f] flex gap-[2rem]  p-[2rem] font-neue flex-col md:flex-row md:text-[1.2rem] lg:[text-1.5rem] xlg:text-[1.8rem]">
        <span className="text-zinc-800 w-full ">What you can expect:</span>
        <span className="text-zinc-800 w-full md:leading-[1.5rem] ">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether its live or digital, delivered for one
          or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and design (with a bit of coffee) is
          what makes your message clear, convincing, and captivating.
        </span>
      </div>
      <div className="w-full flex flex-col  gap-[2rem]  md:flex-row md:justify-between  p-[1rem] md:px-[2rem] md:py-[3rem]">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="font-neue text-zinc-800 text-[2rem] md:text-[2.7rem] leading-[1.5rem] ">
            Our approach
          </h1>
          <div
            className="mt-[1rem]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Button>Read More</Button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={hover ? { scale: 0.9 } : {}}
          transition={{ ease: easeInOut, duration: 1 }}
          className="image bg-[#b1c957] ml-[1.3rem]  sm:w-[90vw] md:w-[53vw] md:h-[36vw]  rounded-lg overflow-hidden "
        >
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
