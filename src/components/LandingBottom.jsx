import React from "react";
import { useRef, useEffect, useState } from "react";

import { DrawOutlineButton } from "./DrawUnderlineButton";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingBottom = () => {
  const [hover, setHover] = useState(false);
  const btn = useRef(null);

  useEffect(() => {
    const buttonElement = btn.current;

    if (buttonElement) {
      buttonElement.addEventListener("mouseenter", () => {
        setHover(true);
      });
      buttonElement.addEventListener("mouseleave", () => {
        setHover(false);
      });
    }
  }, []);

  return (
    <div className="w-[100vw] h-[10rem] font-neue text-light overflow-hidden  border-t border-zinc-800  flex sm:flex-col sm:gap-3 sm:justify-center sm:px-[2rem] md:px-[2.5rem] md:flex-row md:justify-between md:pt-[2rem] ">
      {["For public and private companies", "From the first pitch to IPO"].map(
        (elem, idx) => (
          <div key={idx} className="font-[Neue Montreal]">
            <DrawOutlineButton> {elem}</DrawOutlineButton>
          </div>
        )
      )}

      <div className="btns flex gap-[0.4rem] items-start md:-mt-[0.3rem]">
        <motion.button
          ref={btn}
          whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
          transition={{
            backgroundColor: { duration: 0.5, ease: "easeInOut" },
            color: { duration: 0.5, ease: "easeInOut" },
          }}
          className="border rounded-full  font-neue text-[0.9rem] py-[0.3rem] px-[0.5rem] uppercase overflow-hidden text-center flex items-center justify-center whitespace-nowrap"
        >
          Start The Project
        </motion.button>

        <motion.button
          whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
          animate={
            hover ? { backgroundColor: "#ffffff", color: "#000000" } : {}
          }
          transition={{
            backgroundColor: { duration: 0.5, ease: "easeInOut" },
            color: { duration: 0.5, ease: "easeInOut" },
          }}
          className={`border  p-[0.48rem] rounded-full  rotate-45`}
        >
          <FaArrowUpLong />
        </motion.button>
      </div>
    </div>
  );
};

export default LandingBottom;
