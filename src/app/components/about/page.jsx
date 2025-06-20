"use client"
import React from "react";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaPhone } from "react-icons/fa";

export default function AboutMe({ scrollToSection, targetRef1, targetRef2, targetRef3, targetRef4, targetRef5 }) {

    return (
        <div className="flex h-screen bg-gray-200">
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
                    <button onClick={() =>{scrollToSection(targetRef2)}} className="text-white underline">ABOUT ME</button>
                    <button onClick={() =>{scrollToSection(targetRef3)}} className="text-black cursor-pointer">RESUME</button>
                    <button onClick={() =>{scrollToSection(targetRef4)}} className="text-black cursor-pointer">PORTFOLIO</button>
                    <button onClick={() =>{scrollToSection(targetRef5)}} className="text-black cursor-pointer">CONTACT</button>

                    <div>
                        <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
                        <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-10">
                <div className="flex items-center ">
                    <div className="flex items-center mr-3">
                        <div className=" w-12 h-0.5  bg-black z-10"></div>
                        <div className=" w-2 h-2 bg-black rounded-full z-10"></div>
                    </div>
                    <h1 className="text-6xl font-black text-gray-800 mb-4">ABOUT ME</h1>
                </div>

                <h2 className="text-xl font-serif  text-black">
                    I'm <span className="text-black font-bold text-4xl font-mono">HC SAVIN</span>, GRAPHIC DESIGNER
                </h2>
                <p className="mt-4 text-gray-800 text-lg font-serif">
                    I’m passionate about bringing creative ideas to life through design and visual
                    storytelling. With hands-on experience in tools like Adobe Photoshop
                    and Illustrator, I focus on crafting visuals that are bold, clean, and impactful.
                    I’m also currently exploring After Effects to level up my motion design skills.
                    Creativity drives me, and I’m always looking to push boundaries and grow as an artist.
                </p>

                {/* What I Do Section */}
                <div className="my-10">
                    <h3 className="bg-amber-400 text-black font-extrabold text-lg px-4 rounded-full inline-block">
                        What I Do?
                    </h3>

                    <div className="grid grid-cols-2 gap-8 mt-6">
                        <div className="flex items-start">
                            <div className="text-4xl bg-amber-400 p-4 w-20 h-20 rounded-full  mr-4">🖨️</div>
                            <div>
                                <h4 className="font-bold text-black text-xl">Print Design</h4>
                                <div className=" w-28 h-0.5  bg-black z-10"></div>
                                <p className="text-gray-700 text-lg font-serif">
                                    I design clean and impactful print materials like brochures, business cards, and packaging.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-4xl bg-amber-400 p-4 w-20 h-20 rounded-full  mr-4">💻</div>
                            <div>
                                <h4 className="font-bold text-lg text-black">Web Layout Design</h4>
                                <div className=" w-44 h-0.5  bg-black z-10"></div>
                                <p className="text-gray-700 text-lg font-serif">
                                    I design sleek, user-friendly web layouts that blend style with smooth user experience.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-4xl bg-amber-400 p-4 w-20 h-20 rounded-full  mr-4">🗓️</div>
                            <div>
                                <h4 className="font-bold text-lg text-black">Posters & Flyers</h4>
                                <div className=" w-36 h-0.5  bg-black z-10"></div>
                                <p className="text-gray-700 text-lg font-serif">
                                    I create bold and engaging posters and flyers that grab attention and deliver the message at a glance.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-4xl bg-amber-400 p-4 w-20 h-20 rounded-full  mr-4">📱</div>
                            <div>
                                <h4 className="font-bold text-lg text-black">Social Media Posters</h4>
                                <div className=" w-44 h-0.5  bg-black z-10"></div>
                                <p className="text-gray-700 text-lg font-serif">
                                    I craft visually striking content optimized for digital platforms to boost online presence and engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* side bar */}
            <div className="flex flex-col items-center bg-gray-200 py-28 w-fit pr-6">
                {/* Home Icon */}
                <button onClick={() =>{scrollToSection(targetRef1)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-xl">
                        <FaHome className="  text-yellow-500 text-2xl hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* User Icon */}
                <button onClick={() =>{scrollToSection(targetRef2)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-xl">
                        <FaUser className="text-white text-2xl hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Resume Icon */}
                <button onClick={() =>{scrollToSection(targetRef3)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-xl">
                        <FaFileAlt className="text-yellow-500 text-2xl hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Portfolio Icon */}
                <button onClick={() =>{scrollToSection(targetRef4)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-xl">
                        <FaBriefcase className="text-yellow-500 text-2xl hover:cursor-pointer" />
                    </div>
                    <div className="w-1 h-10 bg-black"></div>
                </button>

                {/* Contact Icon */}
                <button onClick={() =>{scrollToSection(targetRef5)}}  className="flex flex-col items-center">
                    <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-xl">
                        <FaPhone className="text-yellow-500 text-2xl hover:cursor-pointer" />
                    </div>
                </button>
            </div>
        </div>
    );
};

