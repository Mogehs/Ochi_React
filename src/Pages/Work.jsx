import React from "react";
import FeatureMain from "../components/FeatureMain";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Loader from "../components/Loader";
import gsap from "gsap";

import LocomotiveScroll from "locomotive-scroll";

import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.to(".page", {
      transform: "translateY(0%)",
      duration: 2,
      delay: 0.3,
    });
  }, []);

  return (
    <div>
      <Loader>Work</Loader>
      <div className="page transform translate-y-[100%] overflow-hidden">
        <div className="w-full min-h-screen bg-zinc-900  text-white">
          <Navbar />
          <h1 className=" font-founder uppercase text-[3.5rem] py-[3rem]  md:text-[7rem] pl-[0.7rem] md:pl-[2rem] xlg:text-[8rem]  border-b border-b-zinc-800 ">
            Work
          </h1>

          <div className="bg-[#CDEA68] text-black h-max w-full  md:pl-[2.5rem] md:pr-[9rem]  rounded-t-2xl -mt-5 ">
            <Heading>
              Purpose driven, strategy-led presentations that people care about.
            </Heading>
          </div>

          <div className="bg-zinc-950 rounded-t-2xl -mt-3 min-h-screen">
            <FeatureMain />
          </div>

          <div>
            <Marquee>Behance &nbsp; Behance &nbsp; </Marquee>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Work;
