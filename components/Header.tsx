import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 items-start flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/fasaziz77ab7312a"
          fgColor="blue"
          bgColor="transparent"
        />
        {/* <SocialIcon
          className="cursor-pointer"
          //   url="https://gmail.com"
          network="google"
          fgColor="red"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://whatsapp.com"
          fgColor="green"
          bgColor="transparent"
        /> */}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-black">
            Get In touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
