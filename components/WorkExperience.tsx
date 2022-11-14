import React from "react";
import { motion } from "framer-motion";
import CotExperienceCard from "./CotExperienceCard";
import CgiExperienceCard from "./CgiExperienceCard";
import MemsetExperienceCard from "./MemsetExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className="sm:h-screen flex flex-col relative text-center max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sm:absolute sm:top-24 lg:top-10 uppercase tracking-[20px] text-gray-500 text-2xl mb-6 sm:mb-0">
        Expirence
      </h3>
      <div
        className="w-full flex space-x-5 p-1 items-center snap-x snap-mandatory
       scrollbar-track-gray-400/20 scrollbar-thumb-black scrollbar-thin"
      >
        <CotExperienceCard />
        <CgiExperienceCard />
        <MemsetExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;

// h-screen flex flex-col relative text-center max-w-7xl px-10 justify-evenly mx-auto items-center
