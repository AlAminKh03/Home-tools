import React from "react";
import videoBg from "../../assests/banner/VideoBg-2.mp4";

const Banner = () => {
  return (
    <div className="h-screen w-full lg:mt-0 mt-16">
      <div
        className="absolute left-0 top-16 lg:top-0 w-full h-full "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="h-full object-cover w-full"
      />
      <div className="absolute w-full h-full flex flex-col items-center justify-center  top-40  font-mono">
        <p className=" text-xl lg:text-4xl font-bold text-white ">
          Sometime's your house need some surgery
        </p>
        <p className=" text-lg lg:text-3xl font-bold text-white ">
          And a surgery needs a perfect plan
        </p>
        <p className=" text-base lg:text-2xl font-bold text-white ">
          A perfect plan needs perfect tools
        </p>
      </div>
    </div>
  );
};

export default Banner;
