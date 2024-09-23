import React from "react";
import { motion } from "framer-motion";
import image from "../helper/image";
import { useState } from "react";

const FeatureMain = ({ limit }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imageToShow = image.slice(0, limit);
  return (
    <div className="cards p-[5vw] grid grid-cols-2 gap-x-8 gap-y-14 justify-items-center msm:max-md:grid-cols-1">
      {imageToShow.map((item, idx) => (
        <div
          key={idx}
          className="card-container cursor-pointer w-[44vw] h-[36vw] overflow-hidden rounded-xl msm:max-md:w-[84vw] msm:max-md:h-[69vw]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h1 className="absolute text-[6vw] font-[Impact] uppercase whitespace-nowrap z-10 left-1/2 transform flex -translate-x-1/2 translate-y-[140%] text-[#CDEA68] msm:max-md:translate-y-[340%] overflow-hidden">
            {item.name.split("").map((char, charIdx) => (
              <motion.span
                initial={{ y: 100 }}
                animate={hoveredIndex === idx ? { y: 0 } : { y: 100 }}
                transition={{
                  ease: [0.85, 0, 0.15, 1],
                  delay: charIdx * 0.02,
                }}
                key={charIdx}
                className="block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ scale: 1 }}
            animate={hoveredIndex === idx ? { scale: 0.9 } : {}}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.3 }}
            className="relative card w-full h-full rounded-xl"
          >
            <motion.img className="rounded-xl" src={item.img} alt={item.name} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FeatureMain;
