import React from "react";
import waste from "../../assests/banner/waste-house.jpg";

const NotFound = () => {
  return (
    <div className="m-10 mt-10 flex flex-col items-center justify-center h-screen">
      <div className=" ">
        <img className=" justify-center" src={waste} alt="" />
      </div>
      <div className="items-center mt-2 absolute top-28 text-white">
        <h1 className="text-3xl font-bold ">404!! </h1>
        <p className="italic">Opps Looks like you path has gone wrong</p>
      </div>
    </div>
  );
};

export default NotFound;
