import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className="sm:h-screen flex flex-col relative text-center max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center mb-20 sm:mb-0"
    >
      <h3 className="my-6 sm:my-0  sm:absolute sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <h1 className="text-4xl font-semibold">
        Here is a <span className="underline decoration-blue-500">little</span>{" "}
        background
      </h1>
      <p className="text-base sm:text-lg my-10 sm:my-0">
        Passionate DevOps Engineer. Firm believer that anything and everything
        can be automated. Love to learn new technologies especially cloud
        related. The tech space is changing so rapidly so I’m always on the look
        out of what’s coming up and how that can benefit me and the project that
        I'm working on.
      </p>
    </motion.div>
  );
}

export default About;
