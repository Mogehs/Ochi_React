import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import EyeBalls from "../components/EyeBalls";
import Marquee from "../components/Marquee";
import CoreCards from "../components/CoreCards";
import Footer from "../components/Footer";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const AboutUs = () => {
  const headings = ["We Are", " Ochi Design"];
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className=" text-white w-full min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navbar />
      <div className="w-full h-[97vh] msm:max-sm:h-[60vh]  sm:max-md:h-[95vh]">
        <Landing headings={headings} />
      </div>
      <div data-scroll data-scroll-speed=".1">
        <div className="w-full min-h-[70vh] relative bg-[#CDEA68] border-t border-zinc-700 rounded-t-2xl -mt-10 ">
          <EyeBalls></EyeBalls>
        </div>
        <div className="w-full border-t-[1px] border-t-zinc-800 bg-zinc-900 flex  gap-[20vw] p-[5vw] msm:max-md:flex-col msm:max-md:gap-11">
          <span className="text-white w-[30vw]">What you can expect:</span>
          <span className="text-white w-[30vw] msm:max-md:w-[80vw] ">
            The team of designers, storytellers, and passionate collaborators,
            who work together to create industry-shifting presentations that win
            people's hearts and minds.
            <br />
            <br />
            And we strive to become one of the most recognizable & influential
            presentation agencies of the time who does that.
          </span>
        </div>
      </div>
      <div className="w-full px-[3vw] ">
        <img
          className="rounded-2xl"
          src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg"
          alt=""
        />
      </div>
      <div className="marquee text-white bg-[#004D43] z-10 ">
        <Marquee>Core Of the team &nbsp;Core Of The Team &nbsp;</Marquee>
        <div className="pb-[10vw]">
          <CoreCards />
        </div>
      </div>

      <div className="-mt-[2vw]  pb-[2vw]">
        <div className="w-[100vw] border-t-[2px] border-b-[0.1px] bg-zinc-900 border-zinc-800 min-h-[17vw] text-[4vw] px-[4vw] pr-[40vw] leading-[4vw]  py-[5vw] rounded-t-3xl -mt-10">
          Two principles we stand behind in every part of our work:
        </div>
        <div className=" bg-zinc-900 w-full min-h-screen px-[4vw] py-[2vw] flex justify-between items-start">
          <div className="w-[43vw] ">
            <img
              className="rounded-xl"
              src="https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1.jpg"
              alt=""
            />
            <p className="text-white flex justify-center items-center text-left w-[24.4vw] py-[1vw]">
              Whether the presentation needs to convince or educate it always
              has to change audience perception. We seek insights to make decks
              unexpectedly enlightening for our audience.
            </p>
          </div>
          <div className="w-[43vw] ">
            <img
              className="rounded-xl"
              src="https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1.jpg"
              alt=""
            />
            <p className="text-white flex justify-center items-center text-left w-[25vw] py-[1vw]">
              The presentation helps to see what's hidden, unseen, or simply
              never known before. We use design to drive their attention, focus
              them to clearly see, and help them feel the message. We’ve built
              long-lasting
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-[4vw]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
