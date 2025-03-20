"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import React from "react";

const Techno = () => {
  const technos = [
    {
      name: "React",
      description:
        "A **declarative**, **component-based** JavaScript library for building **interactive** user interfaces.",
      icon: "nonicons:react-16",
      colorHover: "",
    },
    {
      name: "Laravel",
      description:
        "A **PHP framework** with an **elegant syntax** that simplifies web development with built-in **authentication** and **MVC architecture**.",
      icon: "fa6-brands:laravel",
      colorHover: "",
    },
    {
      name: "Spring Boot",
      description:
        "A **Java framework** designed for **microservices**, providing built-in **dependency injection**, **security**, and **REST API** support.",
      icon: "cib:spring",
      colorHover: "",
    },
    {
      name: "Next.js",
      description:
        "A **React framework** with **server-side rendering (SSR)**, **static site generation (SSG)**, and built-in **API routes**.",
      icon: "ri:nextjs-fill",
      colorHover: "",
    },
    {
      name: "Angular",
      description:
        "A **TypeScript-based** framework for building **scalable**, **single-page applications (SPAs)** with a strong **component-driven** structure.",
      icon: "akar-icons:angular-fill",
      colorHover: "",
    },
    {
      name: "Tailwind CSS",
      description:
        "A **utility-first** CSS framework that allows rapid UI development with **responsive**, **customizable** design systems.",
      icon: "simple-icons:tailwindcss",
      colorHover: "",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 text-[#948A8A] p-3">
      <h1 className="font-bold text-4xl text-white">I Love working with...</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technos.map((tech, index) => (
          <motion.div
            key={index}
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-white/10 hover:bg-[#1C1A19] hover:cursor-pointer p-4 rounded-xl shadow-md transition-all"
          >
            {/* <Icon
              icon={tech.icon}
              className={cn("text-[#948A8A] transition-all", tech.colorHover)}
              width="32"
              height="32"
            /> */}
            <div className="flex flex-col gap-y-3" >
              <div className="flex gap-x-2">
                <Icon
                  icon={tech.icon}
                  className={cn(
                    "text-[#948A8A] transition-all",
                    tech.colorHover
                  )}
                  width="32"
                  height="32"
                />
                <h1 className="font-semibold text-lg text-white">
                  {tech.name}
                </h1>
              </div>
              <p className="text-sm text-gray-300">
                {tech.description.split("**").map((text, i) =>
                  i % 2 === 1 ? (
                    <span
                      key={i}
                      className="hover:text-blue-500 transition-all"
                    >
                      {text}
                    </span>
                  ) : (
                    text
                  )
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Techno;
