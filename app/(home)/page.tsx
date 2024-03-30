import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill"
import Project from "./components/Project";
import Footer from "./components/Footer";
import { TracingBeam } from './../../components/ui/tracing-beam';


const page = () => {
  return (
    
    <div className="min-h-screen bg-black overflow-hidden ">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative ">
        <div className="max-w-7xl mx-auto sm:p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0">

        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:p-5 mt-10">
      <TracingBeam className="px-6">
        <Skill/>
      </TracingBeam>
      </div>
      <div className="max-w-7xl mx-auto sm:p-5 mt-10">
        <Project/>
        </div>
        <div className="max-w-7xl mx-auto sm:p-5 mt-10">
        <Footer/>
      </div>
    </div>
  );
};

export default page;
