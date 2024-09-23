import React from "react";
import FeatureMain from "../components/FeatureMain";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
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

  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] text-white">
        <h1 className=" bg- bg-zinc-900 text-[10vw] font-[impact] pt-[10vw] px-[4.7vw] uppercase pb-[5vw] min-h-[30vh] msm:max-md:pt-[15vw]">
          Work
        </h1>

        <div className="bg-zinc-950 w-full  py-[5vw]  rounded-t-3xl text-white -mt-10">
          <h1 className="w-[70vw] px-[5vw] text-[3.6vw] ">
            Purpose driven, strategy-led presentations that people care about.
          </h1>
          <div className="pb-[5vw]">
            <FeatureMain />
          </div>
        </div>

        <div className="-mt-[15vw]">
          <Marquee>Behance &nbsp; Behance &nbsp; </Marquee>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Work;
