import React from "react";
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaPhone } from "react-icons/fa";

const Contact = ({scrollToSection, targetRef1, targetRef2, targetRef3, targetRef4, targetRef5}) => {
  return (
    <div className="flex h-screen bg-gray-300">
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
                    <button onClick={() =>{scrollToSection(targetRef4)}} className="text-black cursor-pointer">PORTFOLIO</button>
                    <button onClick={() =>{scrollToSection(targetRef5)}} className="text-white cursor-pointer underline">CONTACT</button>

          <div>
            <div className=" w-1 h-6 mx-1 bg-black z-10"></div>
            <div className=" w-3 h-3 bg-black rounded-full z-10"></div>
            </div>
        </nav>
      </div>
      {/* Main Content */}
      <div className="w-3/4 flex flex-col items-start justify-center text-center px-10">
      <div className="flex items-center ">
                    <div className="flex items-center mr-3">
                        <div className=" w-12 h-1  bg-black z-10"></div>
                        <div className=" w-4 h-4 bg-black rounded-full z-10"></div>
                    </div>
                    <h1 className="text-8xl font-black text-gray-800 mb-4">CONTACT</h1>
                </div>
        <h2 className="text-2xl font-bold mb-10 ml-20 text-gray-700">Feel <span className="text-black text-2xl font-extrabold">FREE</span> To Contact Me !</h2>

        <div className="grid grid-cols-3 gap-10">
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 p-6 rounded-full">
              <FaEnvelope className="text-7xl text-black" />
            </div>
            <p className="mt-4 text-black font-semibold text-lg">uzumakivisualss@gmail.com</p>
            <p className="text-black font-semibold text-lg">savinsavihc@gmail.com</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 p-6 rounded-full">
              <FaWhatsapp className="text-7xl text-black" />
            </div>
            <p className="mt-4 text-black font-semibold text-lg">+91 9019979289</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 p-6 rounded-full">
              <FaInstagram className="text-7xl text-black" />
            </div>
            <p className="mt-4 text-black font-semibold text-lg">@uzumaki_visualss</p>
            <a href="https://www.instagram.com/uzumaki_visualss" className="text-black text-md font-semibold">https://www.instagram.com/uzumaki_visualss</a>
          </div>
        </div>
      </div>
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
                              <FaBriefcase className="text-yellow-500 hover:cursor-pointer" />
                          </div>
                          <div className="w-1 h-10 bg-black"></div>
                      </button>
      
                      {/* Contact Icon */}
                      <button onClick={() =>{scrollToSection(targetRef5)}}  className="flex flex-col items-center">
                          <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-2xl">
                              <FaPhone className="text-white hover:cursor-pointer" />
                          </div>
                      </button>
                  </div>
    </div>
  );
};

export default Contact;
