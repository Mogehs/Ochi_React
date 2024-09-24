import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const ServiceCard = ({ head, para }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="bg-[#E1E1E1] rounded-lg w-full h-[9rem] p-[0.8rem] md:p-[1rem]  md:h-[14rem]  lg:h-[18rem]  flex flex-col justify-between "
    >
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={isInview ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className=" leading-none text-zinc-900 font-semibold text-[1.8rem] md:text-[2.2rem]lg:text-[3rem]"
      >
        {head}
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={isInview ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className=" leading-none text-zinc-900 text-[0.8rem] md:text-[1.2rem] lg:text-[1.4rem]"
      >
        {para}
      </motion.p>
    </div>
  );
};

export default ServiceCard;
