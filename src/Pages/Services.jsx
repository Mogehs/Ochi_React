import Navbar from "../components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Marquee from "../components/Marquee";
import SerCards from "../components/SerCards";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-zinc-950 w-full min-h-screen text-white">
        <h1 className=" bg- bg-zinc-900 text-[10vw] font-[impact] pt-[10vw] px-[4.7vw] uppercase pb-[5vw] min-h-[30vh] msm:max-md:pt-[15vw] ">
          Services
        </h1>

        <div className="h-full w-full flex justify-center items-center px-[4vw] py-[7vw]">
          <img
            src="https://ochi.design/wp-content/uploads/2023/08/Group-61165.png"
            alt=""
          />
        </div>
        <div className="bg-[#CDEA68] min-h-max w-full rounded-t-2xl ">
          <div className="w-full h-full text-zinc-800 text-[4vw] leading-none tracking-tighter px-[4vw] py-[6.5vw]">
            Let's be honest. There are really no excuses to have a bad
            presentation anymore. No one has time for poorly communicated ideas.
            Focus on what you do best — growing your business, while we do our
            best at making your presentations awesome.
          </div>
        </div>
        <SerCards>Ochi in numbers:</SerCards>
        <div className="msm:max-md:mt-[30vh]">
          <Marquee> Why us other &nbsp;</Marquee>
        </div>
        <div className="min-h-screen bg-[#004D43] ">
          <SerCards>{"What you can expect:"}</SerCards>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Services;
