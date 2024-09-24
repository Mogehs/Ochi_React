import { motion } from "framer-motion";
const Marquee = ({ children }) => {
  return (
    <div className="w-full bg-[#004D43] rounded-t-3xl flex pt-[3.5rem] pb-[2rem] tracking-wide">
      <div className="flex whitespace-nowrap overflow-hidden border-t border-b">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 18 }}
          className="font-founder text-[25vw] uppercase  leading-[21vw] -mb-[1vw]  -mt-[3.5vw] "
        >
          {children}
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 18 }}
          className="font-founder text-[25vw] uppercase  leading-[21vw] -mb-[1vw]   -mt-[3.5vw] "
        >
          {children}
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
