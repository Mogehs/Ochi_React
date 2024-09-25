import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import Features from "../components/Features";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LandingBottom from "../components/LandingBottom";

import { useEffect } from "react";
import gsap from "gsap";

import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    // gsap.to(".page", {
    //   top: "0%",
    //   delay: 1,
    //   dureation: 1,
    // });

    return () => {
      scroll.destroy();
    };
  }, []);
  const headings = ["We Create", "Eye-Opening", "Presentations"];

  return (
    <>
      <div className="page w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden">
        <Navbar />
        <Landing headings={headings} />
        <LandingBottom />
        <Marquee>We are ochi &nbsp;</Marquee>
        <About />
        <Eyes />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
