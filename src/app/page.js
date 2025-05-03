import React from "react";
import WelcomePage from "./components/home/page";
import AboutMe from "./components/about/page";
import Contact from "./components/contact/page";
import ResumeUploadPage from "./components/resume/page";
import App from "./components/portfolio/page";

export default function home() {
  return (
    <>
    <WelcomePage />
    <AboutMe />
    <ResumeUploadPage/>
    <App />
    <Contact />

    </>


  );
}
