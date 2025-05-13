"use client"
import React from "react";
import { FaHome, FaUser, FaIdBadge, FaBriefcase, FaPhone } from "react-icons/fa";

export default function WelcomePage({scrollToSection, targetRef1, targetRef2, targetRef3, targetRef4, targetRef5}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
  {/* Left Black Box */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[5vw] h-[60vh] bg-amber-400 z-0" />

  {/* Right Black Box */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[5vw] h-[60vh] bg-amber-400 z-0" />

  <div className="max-w-7xl w-full p-6 ml-20 flex flex-col lg:flex-row items-center z-10">
    {/* Left section - Text Content */}
    <div className="lg:w-1/2 text-left space-y-4">
      <h2 className="text-amber-400 underline underline-offset-auto text-5xl font-bold">HI THERE!</h2>
      <h1 className="text-7xl font-bold">
        I'M <span className="text-amber-400">HC SAVIN</span>
      </h1>
      <div className="bg-amber-400 text-black font-bold py-2 px-4 inline-block">
        GRAPHIC DESIGNER / VIDEO EDITOR
      </div>
      <div className="bg-black text-white font-bold py-2 px-4 inline-block">
        READY TO HANDEL YOUR NEW PROJ
      </div>
      <p className="text-black font-serif  text-lg">
        A graphic designer and video editor passionate about bringing creative ideas to life. With expertise in Adobe Photoshop, Adobe Premiere Pro, and Adobe Illustrator, I craft compelling visuals and cinematic videos that engage and inspire. Whether designing logos, editing videos, or developing brand identities, I strive to create impactful, high-quality work that resonates with the audience.
      </p>
      <button onClick={() => scrollToSection(targetRef2)} className="bg-black text-white py-4 px-8 rounded-full font-bold">
        MORE ABOUT ME
      </button>
    </div>

    {/* Right section - Image and Icons */}
    <div className="w-[50%] relative flex justify-center items-center mt-10 lg:mt-0">
      {/* Outer Half Circle */}
      <div className="relative w-180 h-180 flex justify-center items-center">
        {/* Half Circle (Right Side Only) */}
        <div className="absolute right-28 bottom-44  w-45 h-92 border-4 border-yellow-300 rounded-r-full border-l-0 z-0"></div>

        {/* Icons along the arc */}
        <button onClick={() =>{scrollToSection(targetRef1)}} className="absolute top-41 right-56 text-yellow-500"><FaHome className="bg-yellow-600 text-black p-2 rounded-full w-10 h-10" /></button>
        <button onClick={() => scrollToSection(targetRef2)} className="absolute top-58 right-32  text-yellow-500"><FaUser className="bg-black text-white p-2 rounded-full w-10 h-10" /></button>
        <button onClick={() => scrollToSection(targetRef3)} className="absolute top-86 right-24   text-yellow-500"><FaIdBadge className="bg-black text-white p-2 rounded-full w-10 h-10" /></button>
        <button onClick={() => scrollToSection(targetRef4)} className="absolute bottom-54 right-35  text-yellow-500"><FaBriefcase className="bg-black text-white p-2 rounded-full w-10 h-10" /></button>
        <button onClick={() => scrollToSection(targetRef5)}className="absolute bottom-41 right-58 text-yellow-500"><FaPhone className="bg-black text-white p-2 rounded-full w-10 h-10" /></button>

        {/* Dots on Ends */}
        <div className="absolute top-42.5 left-80 w-4 h-4 bg-yellow-300 rounded-full z-10"></div>
        <div className="absolute bottom-42.5 right-72 w-4 h-4 bg-yellow-300 rounded-full z-10"></div>

        {/* Inner Circle (User Image) */}
        <img
          src="/image.png"
          alt="HC Savin"
          className="w-80 h-80 rounded-full border-4 border-yellow-600 object-cover z-20"
        />
      </div>
    </div>
  </div>
</div>


  );
}
