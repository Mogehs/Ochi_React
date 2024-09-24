import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import Features from "../components/Features";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import LandingBottom from "../components/LandingBottom";

import { useEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);
  const headings = ["We Create", "Eye-Opening", "Presentations"];

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden">
        <Navbar />

        <div data-scroll data-scroll-section data-scroll-speed="-1">
          <Landing headings={headings} />
          <LandingBottom />
        </div>

        <div data-scroll data-scroll-section data-scroll-speed=".09">
          <Marquee>We are ochi &nbsp;</Marquee>
          <About />
          <Eyes />
          <Features />
          <Cards />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
