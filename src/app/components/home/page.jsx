import React from "react";
import { FaHome, FaUser, FaIdBadge, FaBriefcase, FaPhone } from "react-icons/fa";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
  {/* Left Black Box */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[3vw] h-[60vh] bg-amber-400 z-0" />

  {/* Right Black Box */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[3vw] h-[60vh] bg-amber-400 z-0" />

  <div className="max-w-6xl w-full p-6 ml-20 flex flex-col lg:flex-row items-center z-10">
    {/* Left section - Text Content */}
    <div className="lg:w-1/2 text-left space-y-4">
      <h2 className="text-amber-400 underline underline-offset-auto text-3xl font-bold">HI THERE!</h2>
      <h1 className="text-5xl font-bold">
        I'M <span className="text-amber-400">HC SAVIN</span>
      </h1>
      <div className="bg-amber-400 text-black font-bold py-1 px-3 inline-block">
        GRAPHIC DESIGNER / VIDEO EDITOR
      </div>
      <div className="bg-black text-white font-bold py-1 px-3 inline-block">
        READY TO HANDEL YOUR NEW PROJ
      </div>
      <p className="text-black font-serif  text-sm">
        A graphic designer and video editor passionate about bringing creative ideas to life. With expertise in Adobe Photoshop, Adobe Premiere Pro, and Adobe Illustrator, I craft compelling visuals and cinematic videos that engage and inspire. Whether designing logos, editing videos, or developing brand identities, I strive to create impactful, high-quality work that resonates with the audience.
      </p>
      <button className="bg-black text-white py-2 px-6 rounded-full font-bold">
        MORE ABOUT ME
      </button>
    </div>

    {/* Right section - Image and Icons */}
    <div className="lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
      {/* Outer Half Circle */}
      <div className="relative w-80 h-80 flex justify-center items-center">
        {/* Half Circle (Right Side Only) */}
        <div className="absolute -right-3 top-0 w-40 h-80 border-4 border-yellow-300 rounded-r-full border-l-0 z-0"></div>

        {/* Icons along the arc */}
        <div className="absolute -top-3 right-24 text-yellow-500"><FaHome className="bg-yellow-600 text-black p-2 rounded-full w-8 h-8" /></div>
        <div className="absolute top-10 right-2  text-yellow-500"><FaUser className="bg-black text-white p-2 rounded-full w-8 h-8" /></div>
        <div className="absolute top-1/2 -right-6 -translate-y-1/2  text-yellow-500"><FaIdBadge className="bg-black text-white p-2 rounded-full w-8 h-8" /></div>
        <div className="absolute bottom-11 right-2  text-yellow-500"><FaBriefcase className="bg-black text-white p-2 rounded-full w-8 h-8" /></div>
        <div className="absolute -bottom-3 right-24 text-yellow-500"><FaPhone className="bg-black text-white p-2 rounded-full w-8 h-8" /></div>

        {/* Dots on Ends */}
        <div className="absolute -top-1 right-36 w-4 h-4 bg-yellow-300 rounded-full z-10"></div>
        <div className="absolute -bottom-1 right-36 w-4 h-4 bg-yellow-300 rounded-full z-10"></div>

        {/* Inner Circle (User Image) */}
        <img
          src="/image.png"
          alt="HC Savin"
          className="w-72 h-72 rounded-full border-4 border-yellow-600 object-cover z-20"
        />
      </div>
    </div>
  </div>
</div>


  );
}
