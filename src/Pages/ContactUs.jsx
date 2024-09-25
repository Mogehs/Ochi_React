import React, { useState } from "react";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import EyeBalls from "../components/EyeBalls";
import Loader from "../components/Loader";

import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const ContactUs = () => {
  const [hover, setHover] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  // Simulate a loading delay (for demonstration purposes)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2650); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const headings = ["", "Lets Start", " Project Together"];
  return (
    <div>
      <Loader>Contact Us</Loader>
      {isLoading ? (
        ""
      ) : (
        <div className="page overflow-hidden">
          <div className="w-full bg-zinc-950 min-h-screen overflow-x-hidden">
            <Navbar />
            <div className="text-white ">
              <Landing headings={headings} />
            </div>
            <div className="w-full [50vh] md:h-[30vh] lg:h-[50vh] bg-zinc-950 rounded-t-2xl -mt-10 text-white font-light ">
              <Heading>
                Hi! My name is Enter your name*___________ and I work with
                Company name type here*_____________ I'm looking for a partner
                to help me with Your goal type here* With an idea of having that
                completed Date*_____________ I am hoping to stay around a budget
                range of Select*_____________
              </Heading>
            </div>
            <div className="relative w-full bg-[#CDEA68] rounded-t-2xl -mt-2 font-light grid grid-cols-2 justify-items-center md:grid-cols-1 p-[2rem]  md:p-[3rem] gap-[2rem] md:gap-[1rem] ">
              {["Instagram", "Behance", "Facebook", "Linkedin"].map(
                (item, idx) => (
                  <h3
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    className="uppercase text-zinc-900   text-[2rem]  md:text-[5rem] leading-[2.2rem] md:leading-[4rem]  flex items-center relative  font-founder cursor-pointer "
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
                )
              )}
            </div>
            <div className="w-full h-[60vh] relative bg-[#CDEA68]  rounded-t-2xl -mt-5 ">
              <EyeBalls></EyeBalls>
            </div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
