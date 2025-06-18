"use client";
import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaPhone } from "react-icons/fa";

const App = ({ scrollToSection, targetRef1, targetRef2, targetRef3, targetRef4, targetRef5 }) => {
  const [activeTab, setActiveTab] = useState('all');

  const links={
    all: "https://drive.google.com/drive/folders/1--ow-gZI2ks30dZ774sWp3OfCba27B_s",
    print: "https://drive.google.com/drive/folders/1-H0XoVGqTOfMearPIvVFeo2lgxVkS_gU",
    posters: "https://drive.google.com/drive/folders/1Vk7qRiNRmoWrcit0VbxEYvY3A7GysMGG?usp=drive_link",
    web: "https://drive.google.com/drive/folders/1-UUa9b1ydjMCsRZkrCslr8Jf74jOxW7M",
    social: "https://drive.google.com/drive/folders/1-KZL2I8qYNrgHohXrd9YY_J6WpQNhgzS",
    random: "https://drive.google.com/drive/folders/1-V9NAJr5jhODUIh_bMxaKW1QXGyVQU6G"
  }



  const getActive = () => {
    switch (activeTab) {
      case "print": return "Print Images";
      case "posters": return "Poster Images";
      case "web": return "Web Design";
      case "social": return "Media Poster";
      case "random": return "Random Works";
      case "all": return "All Works";
      default: return [];
    }
  };

  const getActiveImages = () => {
    switch (activeTab) {
      case "print": return printImages;
      case "posters": return posterImages;
      case "web": return webImages;
      case "social": return socialImages;
      case "random": return randomImages;
      case "all": return allImages;
      default: return [];
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] bg-gray-700 text-white flex flex-col items-center pt-10">
                <img
                    src={"/image.png"}
                    alt="Profile"
                    className="rounded-full border-4 border-white w-50 h-50 object-cover"
                />
                <nav className="mt-10 w-full h-[100%] flex flex-col items-center py-4 space-y-8 bg-amber-400 text-2xl font-bold">
                    <div>
                        <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
                        <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
                    </div>


                    <button onClick={() =>{scrollToSection(targetRef1)}} className="text-black cursor-pointer">HOME</button>
                    <button onClick={() =>{scrollToSection(targetRef2)}} className="text-black cursor-pointer">ABOUT ME</button>
                    <button onClick={() =>{scrollToSection(targetRef3)}} className="text-black cursor-pointer">RESUME</button>
                    <button onClick={() =>{scrollToSection(targetRef4)}} className="text-white underline">PORTFOLIO</button>
                    <button onClick={() =>{scrollToSection(targetRef5)}} className="text-black cursor-pointer">CONTACT</button>

                    <div>
                        <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
                        <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
                    </div>
                </nav>
            </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-300 p-8 relative">
        <h1 className="text-6xl font-black text-gray-800 mb-4">PORTFOLIO</h1>

        {/* Tabs */}
        <div className="mb-4 flex text-lg font-bold gap-4">
          {['all', 'print', 'posters', 'web', 'social', 'random'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-amber-400 text-white' : 'text-black'}`}>
              {tab === 'all' ? 'ALL' : tab === 'print' ? 'Print Designs' : tab === 'posters' ? 'Posters & Flyers' : tab === 'web' ? 'Web Layout Design' : tab === 'social' ? 'Social Media Poster' : 'Random Works'}
            </button>
          ))}
        </div>

        {/* Display links path */}
        <div className="w-2/3 h-[500px] bg-gray-400 border-2 ml-36 border-black rounded-2xl flex justify-center items-center p-4 overflow-hidden">
            <>
              <a href={links[activeTab]} target="_blank" rel="noopener noreferrer">
                <FaFileAlt className="text-black  text-9xl cursor-pointer mt-4 text-center ml-20" />
                <h1 className="text-md mt-4 text-center font-bold">{`Click here to see ${getActive()} works`}</h1>
              </a>
            </>
        </div>
      </div>

      {/* Right Sidebar Icons */}
     <div className="flex flex-col items-center bg-gray-300 py-28 w-fit pr-6">
                {/* Home Icon */}
                <button onClick={() =>{scrollToSection(targetRef1)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaHome className="text-yellow-500 hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* User Icon */}
                <button onClick={() =>{scrollToSection(targetRef2)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaUser className="text-yellow-500 hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Resume Icon */}
                <button onClick={() =>{scrollToSection(targetRef3)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaFileAlt className="text-yellow-500 hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Portfolio Icon */}
                <button onClick={() =>{scrollToSection(targetRef4)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaBriefcase className="text-white hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Contact Icon */}
                <button onClick={() =>{scrollToSection(targetRef5)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                        <FaPhone className="text-yellow-500 hover:cursor-pointer" />
                    </div>
                </button>
            </div>
    </div>
  );
};

export default App;