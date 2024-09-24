import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ backgroundColor: "#212121" }}
      animate={hover ? { backgroundColor: "black" } : {}}
      transition={{ ease: [0.5, 0, 0.75, 0], duration: 2.3 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="font-neue tracking-wide text-lighter w-fit text-[0.8rem] rounded-full  p-[0.9rem] md:text-[0.9rem] md:p-[1rem]  flex justify-center items-center gap-x-[1rem] cursor-pointer  "
    >
      <button className="uppercase">{children}</button>
      <motion.div
        initial={{ scale: 0.5, color: "white", text: "0.1 px" }}
        animate={hover ? { scale: 1.5, color: "black" } : {}}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className=" bg-white rounded-full p-1 text-[8px] rotate-45 "
      >
        <div className="rotate-45">
          <FaArrowUpLong />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Button;
