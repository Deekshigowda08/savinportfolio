"use client";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaPhone } from "react-icons/fa";

function ResumeUploadPage() {
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
        <div className="flex h-screen bg-gray-300">
            {/* Left Menu */}
            <div className="w-[21%] bg-gray-700 text-white flex flex-col items-center pt-10">
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
                    <div className="text-white underline">RESUME</div>
                    <div className="text-black cursor-pointer">PORTFOLIO</div>
                    <div className="text-black cursor-pointer">CONTACT</div>

                    <div>
                        <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
                        <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="w-4/5 flex flex-col justify-center p-8 relative">
                <div className="flex items-center mb-10">
                    <div className="flex items-center mr-3">
                        <div className=" w-12 h-0.5  bg-black z-10"></div>
                        <div className=" w-2 h-2 bg-black rounded-full z-10"></div>
                    </div>
                    <h1 className="text-6xl font-black text-gray-800 mb-4">RESUME</h1>
                </div>

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
                        <FaFileAlt className="text-white" />
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
                        <FaPhone className="text-yellow-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeUploadPage;
