import Navbar from "../components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Marquee from "../components/Marquee";
import SerCards from "../components/SerCards";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
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
      <div className="bg-zinc-900 w-full min-h-screen text-white overflow-hidden">
        <h1 className=" font-founder uppercase text-[3.5rem] py-[3rem] px-[1rem]  md:text-[7rem] md:px-[2rem] lg:px-[4rem]  xlg:text-[8rem]  border-b border-b-zinc-800 ">
          Services
        </h1>
        <div className="h-full w-full flex justify-center items-center px-[4vw] py-[7vw] bg-zinc-950 rounded-t-2xl -mt-5">
          <img
            src="https://ochi.design/wp-content/uploads/2023/08/Group-61165.png"
            alt=""
          />
        </div>
        <div className="bg-[#CDEA68] h-max w-full rounded-t-2xl text-black -mt-2 ">
          <Heading>
            Let's be honest. There are really no excuses to have a bad
            presentation anymore. No one has time for poorly communicated ideas.
            Focus on what you do best — growing your business, while we do our
            best at making your presentations awesome.
          </Heading>
        </div>
        <div className="-mt-2 bg-zinc-950">
          <SerCards>Ochi in numbers:</SerCards>
        </div>
        <div>
          <Marquee> Why us other &nbsp;</Marquee>
        </div>
        <div className="bg-[#004D43] ">
          <SerCards>{"What you can expect:"}</SerCards>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Services;
