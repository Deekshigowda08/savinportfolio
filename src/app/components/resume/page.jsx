"use client";
import React, { useState, useEffect } from "react";
import {
  FaCloudUploadAlt,
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaPhone,
} from "react-icons/fa";

function ResumeUploadPage({scrollToSection, targetRef1, targetRef2, targetRef3, targetRef4, targetRef5}) {


  return (
    <div className="flex h-screen bg-gray-300">
      {/* Left Menu */}
      <div className="w-[21%] bg-gray-700 text-white flex flex-col items-center pt-10">
        <img
          src={"/image.png"}
          alt="Profile"
          className="rounded-full border-4 border-white w-50 h-50 object-cover"
        />
        <nav className="mt-10 w-full h-[100%] flex flex-col items-center py-10 space-y-5 bg-amber-400 text-2xl font-bold">
          <div>
            <div className="w-3 h-3 bg-black rounded-full z-10"></div>
            <div className="w-1 h-6 mx-1 bg-black z-10"></div>
          </div>

          <button onClick={() => { scrollToSection(targetRef1) }} className="text-black cursor-pointer">HOME</button>
          <button onClick={() => { scrollToSection(targetRef2) }} className="text-black cursor-pointer">ABOUT ME</button>
          <button onClick={() => { scrollToSection(targetRef3) }} className="text-white underline cursor-pointer">RESUME</button>
          <button onClick={() => { scrollToSection(targetRef4) }} className="text-black cursor-pointer">PORTFOLIO</button>
          <button onClick={() => { scrollToSection(targetRef5) }} className="text-black cursor-pointer">CONTACT</button>

          <div>
            <div className="w-1 h-6 mx-1 bg-black z-10"></div>
            <div className="w-3 h-3 bg-black rounded-full z-10"></div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-4/5 flex flex-col justify-center p-8 relative">
        <div className="flex items-center mb-10">
          <div className="flex items-center mr-3">
            <div className="w-12 h-0.5 bg-black z-10"></div>
            <div className="w-2 h-2 bg-black rounded-full z-10"></div>
          </div>
          <h1 className="text-6xl font-black text-gray-800 mb-4">RESUME</h1>
        </div>

        {/* Display PDF or Message */}
        <div className="w-2/3 h-[500px] bg-gray-400 border-2 ml-36 border-black rounded-2xl flex justify-center items-center p-4 overflow-hidden">
            <>
              <a href="https://drive.google.com/drive/folders/1-3QIC55HrM3u5kmM164ap192pQJ-TCBd" target="_blank" rel="noopener noreferrer">
                <FaFileAlt className="text-white text-9xl cursor-pointer mt-4" />
                <h1 className="text-xl ml-4 mt-4 font-bold">Click here</h1>
              </a>
            </>
        </div>
      </div>

      {/* Right Sidebar Icons */}
      <div className="flex flex-col items-center bg-gray-300 py-28 w-fit pr-6">
                {/* Home Icon */}
                <button onClick={() =>{scrollToSection(targetRef1)}}  className="flex flex-col items-center cursor-pointer">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaHome className="text-yellow-500" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* User Icon */}
                <button onClick={() =>{scrollToSection(targetRef2)}}  className="flex flex-col items-center cursor-pointer">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaUser className="text-yellow-500" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Resume Icon */}
                <button onClick={() =>{scrollToSection(targetRef3)}}  className="flex flex-col items-center cursor-pointer">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaFileAlt className="text-white" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Portfolio Icon */}
                <button onClick={() =>{scrollToSection(targetRef4)}}  className="flex flex-col items-center cursor-pointer">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaBriefcase className="text-yellow-500" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Contact Icon */}
                <button onClick={() =>{scrollToSection(targetRef5)}}  className="flex flex-col items-center cursor-pointer">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaPhone className="text-yellow-500" />
                    </div>
                </button>
            </div>
    </div>
  );
}

export default ResumeUploadPage;