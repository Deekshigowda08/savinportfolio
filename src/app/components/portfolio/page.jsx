"use client";
import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaPhone } from "react-icons/fa";

const App = ({ scrollToSection, targetRef1, targetRef2, targetRef3, targetRef4, targetRef5 }) => {
  const [activeTab, setActiveTab] = useState('all');

  // Hooks for different categories
  const [printImages, setPrintImages] = useState([]);
  const [posterImages, setPosterImages] = useState([]);
  const [webImages, setWebImages] = useState([]);
  const [socialImages, setSocialImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        const collections = data.collections || {};

        if (collections) {
          setPrintImages(Object.keys(collections["printdesigns"][0] || {}).filter((key) => key !== "id").map((key) => collections["printdesigns"][0][key]));
          setPosterImages(Object.keys(collections["posters&flyers"][0] || {}).filter((key) => key !== "id").map((key) => collections["posters&flyers"][0][key]));
          setWebImages(Object.keys(collections["weblayoutdesign"][0] || {}).filter((key) => key !== "id").map((key) => collections["weblayoutdesign"][0][key]));
          setSocialImages(Object.keys(collections["socialmediaposter"][0] || {}).filter((key) => key !== "id").map((key) => collections["socialmediaposter"][0][key]));
          setRandomImages(Object.keys(collections["rondomworks"][0] || {}).filter((key) => key !== "id").map((key) => collections["rondomworks"][0][key]));
          setAllImages([
            ...Object.keys(collections["printdesigns"][0] || {}).filter((key) => key !== "id").map((key) => collections["printdesigns"][0][key]),
            ...Object.keys(collections["posters&flyers"][0] || {}).filter((key) => key !== "id").map((key) => collections["posters&flyers"][0][key]),
            ...Object.keys(collections["weblayoutdesign"][0] || {}).filter((key) => key !== "id").map((key) => collections["weblayoutdesign"][0][key]),
            ...Object.keys(collections["socialmediaposter"][0] || {}).filter((key) => key !== "id").map((key) => collections["socialmediaposter"][0][key]),
            ...Object.keys(collections["rondomworks"][0] || {}).filter((key) => key !== "id").map((key) => collections["rondomworks"][0][key])
          ]);
        }
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  const getActiveImages = () => {
    switch (activeTab) {
      case "print": return printImages;
      case "posters": return posterImages;
      case "Web": return webImages;
      case "Social Media Poster": return socialImages;
      case "Rondom Works": return randomImages;
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
          {['all', 'print', 'posters', 'Web', 'Social Media Poster', 'Rondom Works'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-amber-400 text-white' : 'text-black'}`}>
              {tab === 'all' ? 'ALL' : tab === 'print' ? 'Print Designs' : tab === 'posters' ? 'Posters & Flyers' : tab === 'Web' ? 'Web Layout Design' : tab === 'Social Media Poster' ? 'Social Media Poster' : 'Random Works'}
            </button>
          ))}
        </div>

        {/* File Icon Redirect Section */}
        <div className="grid grid-cols-4 gap-4">
          {getActiveImages().length > 0 ? (
            getActiveImages().map((link, idx) => {
              return (
                <div key={idx} className="h-40 bg-gray-400 border border-black rounded-md flex items-center justify-center">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <FaFileAlt className="text-white text-4xl ml-3 cursor-pointer" />
                    <h1 className="text-xs mt-2 font-bold">Click here</h1>
                  </a>
                </div>
              );
            })
          ) : (
            <p className="col-span-4 text-center text-white font-bold">No file to show</p>
          )}
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