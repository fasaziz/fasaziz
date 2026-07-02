import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Platform Engineer", "AI Platform Engineer"],
    loop: false,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="relative flex-col flex items-center justify-center space-y-8 text-center overflow-hidden py-24 sm:py-32">
      <BackgroundCircles />
      <Image
        className="rounded-full relative mx-auto object-cover border-2 border-accent-400/40"
        src="/profile.jpg"
        width="100"
        height="100"
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-small uppercase text-accent-400 pb-2 tracking-[15px]">
          {text}
        </h2>
        <div className="text-3xl font-bold">
          <h1>
            <span className="text-ink-200">Fas Aziz</span>
          </h1>
        </div>
        <p className="py-4 text-ink-400 m-auto text-[14px] sm:text-base text-center">
          Specialising in Cloud Infrastructure, API/MCP Integrations, and
          Secure Enterprise AI Adoption
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
