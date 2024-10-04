import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import EyeBalls from "../components/EyeBalls";
import Marquee from "../components/Marquee";
import CoreCards from "../components/CoreCards";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Loader from "../components/Loader";

import { useState } from "react";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  const headings = ["We Are", " Ochi Design"];
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2650); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Loader>About Us</Loader>
      {isLoading ? (
        ""
      ) : (
        <div className="page overflow-hidden">
          <div className=" text-white w-full min-h-screen bg-zinc-950 overflow-hidden">
            <Navbar />
            <div>
              <Landing headings={headings} />
            </div>
            <div>
              <div className="w-full h-[60vh] relative bg-[#CDEA68]  rounded-t-2xl -mt-[6rem] ">
                <EyeBalls></EyeBalls>
              </div>
              <div className="w-[100vw] text-white  flex gap-[2rem]  p-[2rem] font-neue flex-col md:flex-row md:text-[1.2rem] lg:[text-1.5rem] xlg:text-[1.8rem]">
                <span className=" w-full ">What you can expect:</span>
                <span className=" w-full md:leading-[1.5rem] ">
                  We create tailored presentations to help you persuade your
                  colleagues, clients, or investors. Whether its live or
                  digital, delivered for one or a hundred people.
                  <br />
                  <br />
                  We believe the mix of strategy and design (with a bit of
                  coffee) is what makes your message clear, convincing, and
                  captivating.
                </span>
              </div>
            </div>

            <div className="p-[1.2rem] md:p-[3rem] rounded-lg">
              <img
                className="rounded-lg min-h-screen object-cover"
                src="https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg"
                alt=""
              />
            </div>

            <div className="marquee text-white bg-[#004D43] z-10  ">
              <Marquee>Core Of the team &nbsp;Core Of The Team &nbsp;</Marquee>
              <div className="pb-[5vw]">
                <CoreCards />
              </div>
            </div>

            <div className="bg-zinc-900 min-h-screen rounded-t-xl -mt-[1rem]  ">
              <div className="px-[1.5rem] border-b border-b-zinc-800">
                <Heading>
                  Two principles we stand behind in every part of our work:
                </Heading>
              </div>
              <div className="w-full flex sm:flex-col  sm:justify-center sm:items-center md:flex-row md:justify-between md:items-start  px-[3rem] pb-[3rem] gap-[1.5rem] font-neue mt-10">
                <div className="w-full">
                  <div className="w-full">
                    <img
                      className="rounded-xl"
                      src="https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1.jpg"
                      alt=""
                    />
                  </div>
                  <p className="text-white pt-[1rem] w-[90%]">
                    Whether the presentation needs to convince or educate it
                    always has to change audience perception. We seek insights
                    to make decks unexpectedly enlightening for our audience.
                  </p>
                </div>

                <div className="w-full">
                  <div className="w-full">
                    <img
                      className="rounded-xl"
                      src="https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1.jpg"
                      alt=""
                    />
                  </div>
                  <p className="text-white pt-[1rem] w-[90%]">
                    The presentation helps to see what's hidden, unseen, or
                    simply never known before. We use design to drive their
                    attention, focus them to clearly see, and help them feel the
                    message. We've built long-lasting
                  </p>
                </div>
              </div>
            </div>

            <div className="-mt-1">
              <Footer></Footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
