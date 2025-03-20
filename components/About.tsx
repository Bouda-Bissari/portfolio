import React from "react";
import { motion } from "framer-motion";
import { Geist, Poppins } from "next/font/google";


const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const About = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className={`text-white uppercase text-xl text-center md:text-start ${poppins.className}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About me
      </motion.h1>

      <motion.p
        className="text-[#353334] lg:text-9xl text-4xl sm:text-6xl font-bold flex flex-col "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className={`text-white ${poppins.className}`}>SOFTWARE</span>
        <span className="ml-20 md:ml-0"> ENGEENIER</span>
      </motion.p>

      <motion.p
        className={`text-[#948A8A] font-normal text-xl ${geistSans.className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>
    </motion.div>
  );
};

export default About;
