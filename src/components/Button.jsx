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
      className="w-fit rounded-full px-[2vw] py-[1.2vw] flex justify-center items-center gap-x-7 cursor-pointer  "
    >
      <button className="uppercase">{children}</button>
      <motion.div
        initial={{ scale: 0.5, color: "white", text: "0.1 px" }}
        animate={hover ? { scale: 1.5, color: "black" } : {}}
        transition={{ ease: "easeInOut", duration: 0.2 }}
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
