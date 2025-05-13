"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import WelcomePage from "./components/home/page";
import AboutMe from "./components/about/page";
import Contact from "./components/contact/page";
import ResumeUploadPage from "./components/resume/page";
import App from "./components/portfolio/page";

export default function Home() {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const appRef = useRef(null);
  const contactRef = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
  }, [scrollEnabled]);

  const scrollToSection = (sectionRef) => {
    setScrollEnabled(true); // Temporarily enable scrolling
    sectionRef.current.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => setScrollEnabled(false), 1000); // Disable scrolling again after 1 second
  };

  return (
    <>
      <div ref={welcomeRef}><WelcomePage scrollToSection={scrollToSection} targetRef1={welcomeRef} targetRef2={aboutRef} targetRef3={resumeRef} targetRef4={appRef} targetRef5={contactRef}  /></div>
      <div ref={aboutRef}><AboutMe scrollToSection={scrollToSection} targetRef1={welcomeRef} targetRef2={aboutRef} targetRef3={resumeRef} targetRef4={appRef} targetRef5={contactRef} /></div>
      <div ref={resumeRef}><ResumeUploadPage scrollToSection={scrollToSection} targetRef1={welcomeRef} targetRef2={aboutRef} targetRef3={resumeRef} targetRef4={appRef} targetRef5={contactRef} /></div>
      <div ref={appRef}><App scrollToSection={scrollToSection} targetRef1={welcomeRef} targetRef2={aboutRef} targetRef3={resumeRef} targetRef4={appRef} targetRef5={contactRef} /></div>
      <div ref={contactRef}><Contact scrollToSection={scrollToSection} targetRef1={welcomeRef} targetRef2={aboutRef} targetRef3={resumeRef} targetRef4={appRef} targetRef5={contactRef} /></div>
    </>
  );
}