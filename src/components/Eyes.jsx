import { useRef, useEffect } from "react";
import gsap from "gsap";
import EyeBalls from "./EyeBalls";

const Eyes = () => {
  const cursorDiv = useRef(null);
  const videoDiv = useRef(null);
  const eyeDiv = useRef(null);

  useEffect(() => {
    const handleVideoMouseMove = (e) => {
      gsap.to(cursorDiv.current, {
        x: e.clientX,
        y: e.clientY,
        ease: (0.5, 0, 0.75, 0),
        duration: 0.8,
      });
    };

    if (videoDiv.current) {
      videoDiv.current.addEventListener("mousemove", handleVideoMouseMove);
    }

    return () => {
      if (videoDiv.current) {
        videoDiv.current.removeEventListener("mousemove", handleVideoMouseMove);
      }
    };
  }, [videoDiv.current]);

  const handleImageClick = () => {
    gsap.to(eyeDiv.current, {
      opacity: 0,
      scale: 0,
      duration: 0.7,
    });
    gsap.to(videoDiv.current, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
    });
  };

  const handleVideoClick = () => {
    gsap.to(videoDiv.current, {
      opacity: 0,
      scale: 0,
      duration: 0.7,
    });
    gsap.to(eyeDiv.current, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
    });
  };

  return (
    <div className="play-sector w-full  h-[20rem] md:h-[30rem] overflow-hidden cursor-pointer relative msm:max-md:h-[30vh]">
      <div
        ref={eyeDiv}
        onClick={handleImageClick}
        className="w-[100vw] h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] overflow-hidden absolute top-0"
      >
        <EyeBalls>Tap Tap</EyeBalls>
      </div>

      {/* Video Component */}
      <div
        ref={videoDiv}
        onClick={handleVideoClick}
        className="w-full h-full absolute top-0 scale-0 opacity-0"
      >
        <video
          src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"
          type="video/mp4"
          loop={true}
          autoPlay={true}
          preload="metadata"
          className="w-full h-full object-cover"
          muted={true}
        ></video>
        <div
          ref={cursorDiv}
          className="uppercase px-5 py-1 rounded-full bg-slate-900 fixed -left-10 -top-24 z-10"
        >
          Pause
        </div>
      </div>
    </div>
  );
};

export default Eyes;
