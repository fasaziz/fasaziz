import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["evOps Engineer"],
    loop: false,
    delaySpeed: 9000,
  });

  return (
    <div className="h-screen flex-col flex items-center justify-center space-y-8 text-center overflow-hidden">
      {/* <BackgroundCircles /> */}
      <Image
        className="rounded-full relative mx-auto object-cover"
        src="/profile.jpg"
        width="100"
        height="100"
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-small uppercase text-gray-500 pb-2 tracking-[15px]">
          D{text}
        </h2>
        <div className="text-3xl font-bold">
          <h1>
            <span className="text-blue-700">Fas Aziz</span>
          </h1>
        </div>
        <p className="py-4 text-gray-600 m-auto text-[14px] sm:text-base text-center">
          Specialising in Architecting, Automating, and Maintaining Cloud
          Solutions
        </p>
        <div>
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#expirence">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>
          {/* <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
