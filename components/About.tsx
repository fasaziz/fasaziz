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
        Experienced Cloud DevOps engineer with a genuine passion for technology.
        Happiest when using DevOps tools and processes to help organisations
        realise the benefits of automation and process improvements. Firm
        believer that anything and everything can be automated. The tech space
        is rapidly transforming and I am continuously horizon scanning for new
        cloud-based technologies. This will benefit my technical skills
        alongside any Cloud related projects I am working on.
      </p>
    </motion.div>
  );
}

export default About;
