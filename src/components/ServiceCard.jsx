import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const ServiceCard = ({ head, para }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true, threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="bg-[#E1E1E1] rounded-lg w-[26.5vw] h-[20vw] flex flex-col justify-between msm:max-md:col-span-3 msm:max-md:w-[90vw] msm:max-md:h-[23vw] "
    >
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={isInview ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="p-[2vw] leading-none text-zinc-900  text-[3rem] "
      >
        {head}
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={isInview ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="p-[2vw] leading-none text-zinc-900 text-[1rem]"
      >
        {para}
      </motion.p>
    </div>
  );
};

export default ServiceCard;
