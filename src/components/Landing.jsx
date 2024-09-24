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
    <div className="w-[100vw] h-[20rem] pt-[7rem] sm:h-[25rem] sm:pt-[8.5rem] md:h-[28rem] md:pt-[9.5rem] lg:h-[30rem]  bg-zinc-900 overflow-hidden  ">
      <div className="textStructure  w-fit pl-[1rem] sm:pl-[2rem] md:pl-[3rem]  ">
        {headings.map((elems, idx) => (
          <div key={idx} className="masker">
            <div className="w-fit h-fit flex items-center justify-center ">
              {idx === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "", height: "" }}
                  transition={{ ease: [0.85, 0, 0.15, 1], duration: 1 }}
                  className=" mt-1 md:mt-3 mr-1 ml -1  w-[4rem] h-[2.2rem] md:w-[6.5rem] md:h-[4.5rem] bg-slate-50  rounded-md bg-cover bg-center "
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/premium-photo/blue-background-with-many-cartoon-eyes-blue-background_1081462-28779.jpg?w=740)",
                  }}
                ></motion.div>
              )}
              <h1 className=" font-founder uppercase text-[3.5rem] leading-[2.6rem] sm:text-[4.5rem] sm:leading-[3.2rem] md:text-[7rem] md:leading-[4.8rem] xlg:text-[8rem] xlg:leading-[5rem] ">
                {elems}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
