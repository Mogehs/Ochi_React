import React from "react";
import { useState, useEffect } from "react";

const EyeBalls = ({ children }) => {
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
  return (
    <div>
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] msm:max-md:top-[50%]">
        {/* Eye Component 1 */}
        <div className="flex justify-center items-center w-[12rem] h-[12rem] rounded-full bg-zinc-100 msm:max-md:h-[9.3rem] msm:max-md:w-[9.3rem]">
          <div className="absolute flex justify-center items-center w-[7rem] h-[7rem] rounded-full bg-[#212121] msm:max-md:h-[6.3rem] msm:max-md:w-[6.3rem]">
            <div className="absolute">{children}</div>
            <div
              style={{
                transform: `rotate(${rotate}deg)`,
              }}
              className="relative h-7 w-full items-start"
            >
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Eye Component 2 */}
        <div className="flex justify-center items-center w-[12rem] h-[12rem] rounded-full bg-zinc-100 msm:max-md:h-[9.3rem] msm:max-md:w-[9.3rem]">
          <div className="absolute flex justify-center items-center w-[7rem] h-[7rem] rounded-full bg-[#212121] msm:max-md:h-[6.3rem] msm:max-md:w-[6.3rem]">
            <div className="absolute">{children}</div>
            <div
              style={{
                transform: `rotate(${rotate}deg)`,
              }}
              className="relative h-7 w-full items-start"
            >
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeBalls;
