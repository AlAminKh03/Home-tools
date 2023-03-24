import React from "react";
import about from "../../assests/banner/pexels-suntorn-somtong-1029243.jpg";
import aboutVideo from "../../assests/banner/about-2.mp4";

const About = () => {
  return (
    <div className=" mt-20">
      <div>
        <img src={about} className="w-screen h-[200px] object-cover" />
      </div>
      <div className="font-mono w-full h-full top-0 lg:-top-32 left-0 flex justify-center items-center absolute text-white font-bold text-4xl">
        <p className=" text-white font-bold text-4xl">About us </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4  border-4 border-black border-b-[15px] border-r-[15px] rounded-md border-b-black p-6 mt-10">
        <div className="">
          <video
            src={aboutVideo}
            autoPlay
            loop
            muted
            className="object-cover h-full w-full "
          />
        </div>
        <div className="font-mono">
          <p className="text-3xl font-bold p-4">Welcome to Hometools</p>{" "}
          <p className="text-sm text-left">
            {" "}
            your one-stop-shop for all your home tool needs! We are a
            family-owned business dedicated to providing high-quality tools and
            equipment for homeowners and DIY enthusiasts. Our mission is to make
            your home improvement projects easier and more efficient with the
            right tools and expert advice. At Hometools, we understand that
            every project is unique, and that's why we offer a wide range of
            tools to suit your specific needs. From basic hand tools to power
            tools and specialty equipment, we've got you covered. Our products
            are carefully selected from the best brands in the industry to
            ensure that you get the highest quality tools at competitive prices.
            In addition to our extensive product offerings, we pride ourselves
            on providing exceptional customer service. Our team of knowledgeable
            and friendly experts is always available to help you find the right
            tool for your project, answer any questions you may have, and
            provide guidance and advice to ensure your project is a success.
            Shop with confidence knowing that all of our products come with a
            satisfaction guarantee. If you're not completely satisfied with your
            purchase, we'll work with you to make it right. Thank you for
            choosing Hometools for all your home tool needs. We look forward to
            helping you tackle your next project! As for a suggested picture, it
            would be best to choose an image that represents the types of tools
            and equipment you sell. This could be a photo of a workbench with
            various tools laid out, or a close-up shot of a specific tool, such
            as a drill or saw. Alternatively, you could choose an image that
            represents the idea of home improvement or DIY, such as a person
            working on a project in their garage or a completed home renovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
