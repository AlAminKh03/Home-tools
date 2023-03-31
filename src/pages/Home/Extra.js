import React from "react";
import kitchen from "../../assests/banner/kitchen.jpg";
const Extra = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 ">
      <div className="flex gap-20 flex-col lg:flex-row-reverse mx-[80px] items-center justify-center">
        <div className="mx-[20px]">
          <img
            src={kitchen}
            alt=""
            className="max-w-sm  rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="lg:text-4xl text-xl font-bold">
            Chance to customise your kitchen
          </h1>
          <p className="py-6">
            Buy more than $3000 and get a coupon to win a free installation and
            customization for your kitchen
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Extra;
