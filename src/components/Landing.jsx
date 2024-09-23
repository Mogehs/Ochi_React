import { FaArrowUpLong } from "react-icons/fa6";
import { DrawOutlineButton } from "./DrawUnderlineButton";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Landing = ({ headings }) => {
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
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen bg-zinc-950 overflow-hidden"
    >
      <div className="textStructure w-fit pt-[9.8rem] pl-[5vw] msm:max-lg:pt-[7.1rem] ">
        {headings.map((elems, idx) => (
          <div key={idx} className="masker">
            <div className="w-fit h-fit flex items-center justify-center">
              {idx === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "7.8rem", height: "5.2rem" }}
                  transition={{ ease: [0.85, 0, 0.15, 1], duration: 1 }}
                  className="img w-[7.8rem] h-[5.2rem] md:w-[7rem] md:h-[5rem] sm:w-[5rem] sm:h-[4rem] msm:w-[5.6rem] msm:h-[3.5rem] rounded-md mr-3 ml-1 
                    bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/premium-photo/blue-background-with-many-cartoon-eyes-blue-background_1081462-28779.jpg?w=740)",
                  }}
                ></motion.div>
              )}
              <h1 className="text-[100px] font-['Impact'] font-extralight leading-[95px] uppercase md:max-lg:text-[90px] md:max-lg:leading-[80px] sm:max-md:text-[70px] sm:max-md:leading-[70px] msm:max-sm:text-[50px] msm:max-sm:leading-[50px]">
                {elems}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-t-[0.1rem] border-zinc-900 mt-[4rem] flex justify-between items-center px-16 py-2 font-[Neue Montreal] msm:max-md:flex-col msm:max-md:items-start msm:max-md:px-10 msm:max-md:gap-5 msm:max-lg:mt-[3rem] font-light">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((elem, idx) => (
          <div key={idx} className="font-[Neue Montreal]">
            <DrawOutlineButton> {elem}</DrawOutlineButton>
          </div>
        ))}

        <div className="btns font-[Neue Montreal] flex items-center">
          <motion.button
            ref={btn}
            whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
            transition={{
              backgroundColor: { duration: 0.5, ease: "easeInOut" },
              color: { duration: 0.5, ease: "easeInOut" },
            }}
            className="border rounded-full px-[6vw] w-[10vw] h-[2.5vw] mr-1 font-[Neue Montreal] uppercase text-[1.2vw] overflow-hidden text-center flex items-center justify-center whitespace-nowrap font-semibold msm:max-md:py-[0.7rem]"
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
            className={`border rounded-full p-[0.3rem] rotate-45`}
          >
            <FaArrowUpLong />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
