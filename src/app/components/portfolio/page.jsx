"use client";
import React, { useState } from 'react';
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaPhone } from "react-icons/fa";

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
   const [resumeFile, setResumeFile] = useState(null);
  
      const handleFileChange = (e) => {
          setResumeFile(e.target.files[0]);
          console.log("Selected File:", e.target.files[0]);
      };
  
      const handleDrop = (e) => {
          e.preventDefault();
          setResumeFile(e.dataTransfer.files[0]);
      };
  
      const handleDragOver = (e) => {
          e.preventDefault();
      };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] bg-gray-700 text-white flex flex-col items-center pt-10">
        <img
          src={"/image.png"}
          alt="Profile"
          className="rounded-full border-4 border-white w-40 h-40 object-cover"
        />
        <nav className="mt-10 w-full h-[100%] flex flex-col items-center py-4 space-y-4 bg-amber-400 text-lg font-bold">
            <div>
            <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
            <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
            </div>
        
 
          <div className="text-black cursor-pointer">HOME</div>
          <div className="text-black cursor-pointer">ABOUT ME</div>
          <div className="text-black cursor-pointer">RESUME</div>
          <div className="text-white underline">PORTFOLIO</div>
          <div className="text-black cursor-pointer">CONTACT</div>

          <div>
            <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
            <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
            </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-300 p-8 relative">
      <div className="flex items-center mb-10">
                    <div className="flex items-center mr-3">
                        <div className=" w-12 h-0.5  bg-black z-10"></div>
                        <div className=" w-2 h-2 bg-black rounded-full z-10"></div>
                    </div>
                    <h1 className="text-6xl font-black text-gray-800 mb-4">PORTFOLIO</h1>
                </div>

        {/* Tabs for Portfolio */}
        {activeTab !== 'resume' && (
          <div className="mb-4 flex gap-4">
            {['all', 'print', 'posters', 'Web','Social Media Poster','Rondom Works'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-amber-400 text-white' : 'text-black'}`}
              >
                {tab === 'all' ? 'ALL' : tab === 'print' ? 'Print Designs' : tab === 'posters' ? 'Posters&flyers' :tab === 'Web'? 'Web Layout Design': tab === 'Social Media Poster' ? 'Social Media Poster' : 'Rondom Works'}
              </button>
            ))}
          </div>
        )}

        {/* Upload Section */}
        <div className="grid grid-cols-4 gap-4">
          {activeTab === 'resume' ? (
            <div className="col-span-4 border border-black p-10 rounded-md bg-gray-400 text-center">
              {/* Upload Area */}
              <div
                    className="w-2/3 h-64 bg-gray-400 border-2 ml-36 border-black rounded-2xl flex flex-col justify-center items-center cursor-pointer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <FaCloudUploadAlt className="text-6xl mb-4" />
                    <p className="font-semibold text-white">UPLOAD/DRAG AND DROP</p>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="opacity-0 absolute inset-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                </div>

                {resumeFile && (
                    <p className="mt-4 text-green-700">Uploaded: {resumeFile.name}</p>
                )}
            </div>
          ) : (
            [...Array(activeTab === 'posters' ? 1 : 8)].map((_, idx) => (
              <div key={idx} className="h-40 bg-gray-400 border border-black rounded-md flex items-center justify-center">
                {idx === 0 && <p className="text-center font-bold">UPLOAD/DRAG AND DROP</p>}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Vertical Navigation */}
      <div className="flex flex-col items-center bg-gray-300 py-28 w-fit px-2">
            {/* Home Icon */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl">
                <FaHome className="text-yellow-500" />
              </div>
              <div className="w-0.5 h-8 bg-black"></div>
            </div>
      
            {/* User Icon */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl">
                <FaUser className="text-yellow-500" />
              </div>
              <div className="w-0.5 h-8 bg-black"></div>
            </div>
      
            {/* Resume Icon */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl">
                <FaFileAlt className="text-yellow-500" />
              </div>
              <div className="w-0.5 h-8 bg-black"></div>
            </div>
      
            {/* Portfolio Icon */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl">
                <FaBriefcase className="text-yellow-500" />
              </div>
              <div className="w-0.5 h-8 bg-black"></div>
            </div>
      
            {/* Contact Icon */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl">
                <FaPhone className="text-white" />
              </div>
            </div>
          </div>
    </div>
  );
};

export default App;
