import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.01"
      className="w-full min-h-screen bg-[#CDEA68] rounded-t-3xl"
    >
      <h2 className="text-zinc-900 font-[Neue Montreal]  text-[2.8rem] pt-[6.5vw] pl-[4vw] leading-[2.7rem] text-wrap  md:max-lg:leading-[2.5rem]  sm:max-lg:text-[2.5] ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h2>
      <div className="w-full border-t-[1px] border-t-[#75833f] mt-20 flex justify-between gap-[30vw] px-[6vw] msm:max-md:flex-col msm:max-md:gap-11">
        <span className="text-[#4f582a] w-[30vw] pt-[1vw]">
          What you can expect:
        </span>
        <span className="text-[#3f471e] w-[50vw] pt-[1vw] msm:max-md:w-[80vw] ">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether its live or digital, delivered for one
          or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and design (with a bit of coffee) is
          what makes your message clear, convincing, and captivating.
        </span>
      </div>
      <div
        className="w-full border-t-[1px] border-t-[#75833f] mt-20  px-[5vw]  pb-[4.5vw]
       flex justify-between msm:max-md:flex-col msm:max-md:items-start   msm:max-md:gap-7 "
      >
        <div className="flex flex-col gap-2 items-start">
          <h1 className="font-[Neue Montreal] text-zinc-900 font-normal text-[3rem] pt-[0.3vw] ">
            Our approach
          </h1>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Button>Read More</Button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={hover ? { scale: 0.96 } : {}}
          transition={{ ease: easeInOut, duration: 1 }}
          className="image bg-[#b1c957] w-[46vw] h-[32.6vw]  rounded-lg mt-[1.5vw] msm:max-md:w-[90vw] msm:max-md:h-[55vw] overflow-hidden "
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
