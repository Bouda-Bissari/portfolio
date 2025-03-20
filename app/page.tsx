"use client";

import About from "@/components/About";
import Navbar from "@/components/NavBar";
import ProfilCard from "@/components/ProfilCard";
import Projects from "@/components/Projects";
import { Geist } from "next/font/google";
import React from "react";
import Techno from "@/components/Techno";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className={`h-full  w-full bg-[#151312]  ${geistSans.className}`}>
      {/* Barre de navigation */}
      <div className="grid place-content-center place-items-center py-4">
        <Navbar />
      </div>

      <div className=" w-full lg:pl-32 lg:pr-4 px-4  mt-4 flex flex-col md:flex-row md:gap-x-3 justify-center items-center md:items-stretch">
        <div className="h-full md:sticky md:top-0">
          <ProfilCard />
        </div>
        <div className="min-h-80 overflow-y-scroll w-full flex flex-col gap-y-3">
          {/* aboute me */}
          <About />

          {/* projects */}

          <Projects />

          {/* TEchnos */}
          <Techno />
        </div>
      </div>
    </div>
  );
};

export default Home;
