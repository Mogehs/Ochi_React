import React, { useState } from "react";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);
  const [hover, setHover] = useState(null);
  if (hover) {
    console.log("hoverd");
  } else {
    console.log("not hoverd");
  }
  const headings = ["", "Lets Start", " Project Together"];
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="text-white bg-zinc-950 pb-[5vw]">
        <Landing headings={headings} />
      </div>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".01"
        className="w-full h-[80vh] px-[4vw] py-[5vw] bg-zinc-800 rounded-t-2xl -mt-[10vw] text-white text-[3vw] leading-none font-light "
      >
        Hi! My name is Enter your name*___________ and I work with Company name
        type here*_____________ I’m looking for a partner to help me with Your
        goal type here* With an idea of having that completed Date*_____________
        I am hoping to stay around a budget range of Select*_____________
      </div>
      <div className="relative w-full px-[4vw] py-[8vw] bg-[#CDEA68] rounded-t-2xl -mt-[2vw] text-white text-[3vw] leading-none font-light grid grid-cols-1 justify-items-center ">
        {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, idx) => (
          <h3
            key={idx}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            className="uppercase text-zinc-800 p-[1vw] text-[8vw] font-light flex items-center relative top-6 leading-none font-[Impact] cursor-pointer "
          >
            {item.split("").map((char, charIdx) => (
              <motion.span
                initial={{ y: 0 }}
                animate={hover === idx ? { y: -30 } : { y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.68, -0.6, 0.32, 1.6],
                  delay: charIdx * 0.05,
                }}
                key={charIdx}
                className="block"
              >
                {char}
              </motion.span>
            ))}
          </h3>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
