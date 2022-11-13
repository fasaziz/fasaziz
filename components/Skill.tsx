import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  url: string;
  skill: string;
};

function Skill({ directionLeft, url, skill }: Props) {

  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          y: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={url}
        className="rounded-full border border-blue-500 object-cover sm:w-10 sm:h-10 lg:w-10 lg:h-10 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white sm:w-10 sm:h-10 lg:w-10 lg:h-10 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
                {skill}%
            </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
