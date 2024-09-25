import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Loader = ({ children }) => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (dets) => {
      let mouseX = dets.clientX;
      let mouseY = dets.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 180;
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const tl = useRef(null);
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(".loader", {
        top: "0%",
        delay: 0.3,
        duration: 1.4,
        ease: "expo.inOut",
      })
      .to(
        ".name",
        {
          y: -100,
          duration: 1,
          ease: "expo.inOut",
        },
        "-=1"
      )

      .to(".loader", {
        top: "-200%",
        delay: 0.5,
        duration: 1.4,
        ease: "expo.inOut",
      })
      .to(
        ".name",
        {
          y: +100,
          duration: 1,
          ease: "expo.inOut",
        },
        "-=1.4"
      );
  }, []);

  return (
    <>
      <div className="loader w-full h-screen bg-zinc-900 overflow-hidden z-[2000] absolute top-[100%]  ">
        <div className="w-full h-screen overflow-hidden absolute font-founder text-white text-[5rem] px-[4rem] py-[10rem]   flex justify-between flex-col md:text-[7rem] md:p-[8rem] ">
          <div className=" overflow-hidden leading-[5.1rem] md:leading-[6rem] md:mt-[3rem]">
            <h1 className="name relative top-[100%]">{children}</h1>
          </div>
          <div className="eye w-[100vw] h-[14vh]  relative overflow-hidden">
            <div className="name absolute flex gap-[1rem]  left-[65%] top-[120%]  ">
              {/* Eye Component 1 */}
              <div className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-zinc-100">
                <div className="absolute flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-[#212121]">
                  <div
                    style={{
                      transform: `rotate(${rotate}deg)`,
                    }}
                    className="relative h-7 w-full items-start"
                  >
                    <div className="w-[0.9rem] h-[0.9rem] bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Eye Component 2*/}

              <div className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-zinc-100">
                <div className="absolute flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-[#212121]">
                  <div
                    style={{
                      transform: `rotate(${rotate}deg)`,
                    }}
                    className="relative h-7 w-full items-start"
                  >
                    <div className="w-[0.8rem] h-[0.8rem] bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
