import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProfilCard = () => {
  return (
    <motion.div
      className="w-80 mt-3 md:min-h-[32rem] bg-white flex flex-col items-center justify-between py-4 rounded-lg relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div>
        <div className="w-full">
          <motion.div
            className="bg-cover object-cover bg-center w-full h-64 flex flex-col justify-between overflow-hidden rounded-lg gap-y-3"
            style={{ backgroundImage: "url('/images/mej.jpeg')" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{
              scale:1.2,
              zIndex:100,
            }}
          >
            {/* <Image src={"/images/me.jpg"} alt="me" width={200} height={200} className="bg-center object-cover" /> */}
          </motion.div>
          <motion.h1
            className="text-center font-bold text-3xl mt-3 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Bouda Bissari
          </motion.h1>
        </div>
      </div>
      <motion.div
        className=" justify-center items-center flex"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.2 }} className="hidden md:inline">
          <Image alt="kiss" src={"/icons/kiss.svg"} height={50} width={50} />
        </motion.div>
        <motion.div
          className="absolute top-0 right-0"
          whileHover={{ scale: 1.2,
            rotate:380,
           }}
        >
          <Image
            alt="memoji"
            src={"/emojies/memoji.png"}
            height={70}
            width={70}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full min-h-12 font-mono text-gray-500 text-lg text-center hidden md:inline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Software Engineer who has
        <br /> developed countless innovative <br /> solutions.
      </motion.div>
    </motion.div>
  );
};

export default ProfilCard;
