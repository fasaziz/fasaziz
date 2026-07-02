import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 items-start flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://linkedin.com/in/fasaziz77ab7312a"
          fgColor="#0284c7"
          bgColor="transparent"
        />
        {/* <Link href="https://github.com/fasaziz">
          <AiFillGithub size={32} />
        </Link> */}
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
      </div>
    </header>
  );
}

export default Header;
