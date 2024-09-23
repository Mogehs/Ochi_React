import { motion } from "framer-motion";
const Marquee = ({ children }) => {
  return (
    <div className="w-full bg-[#004D43] rounded-t-3xl mt-12 flex pt-[4.5rem] pb-32 tracking-wide">
      <div className="flex whitespace-nowrap overflow-hidden border-t border-b">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
          className="font-[Impact] text-[18vw] uppercase  leading-none -mb-[1vw] -mt-[1vw] z-30 "
        >
          {children}
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
          className="font-[Impact] text-[18vw] uppercase  leading-none -mb-[1vw]  -mt-[1vw]  "
        >
          {children}
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
