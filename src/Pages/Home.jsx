import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import Features from "../components/Features";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
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
      <div className="w-full min-h-screen bg-zinc-950 text-white overflow-x-hidden">
        <Navbar />
        <Landing headings={headings} />
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-.1"
          className="mt-[10vw]"
        >
          <Marquee>We are ochi &nbsp;</Marquee>
        </div>
        <div className="-mt-[3vw]">
          <About />
        </div>
        <Eyes />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
