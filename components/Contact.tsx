import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-col relative text-center max-w-3xl px-6 sm:px-10 mx-auto items-center py-20 sm:py-28">
      <h3 className="uppercase tracking-[20px] text-accent-400 text-2xl mb-10">
        Contact
      </h3>
      <div className="flex flex-col items-center space-y-8">
        <h4 className="text-xl sm:text-2xl font-light text-center text-ink-200">
          If you want to get in touch, connect with me on LinkedIn
        </h4>

        <SocialIcon
          url="https://linkedin.com/in/fasaziz77ab7312a"
          fgColor="#0284c7"
          bgColor="transparent"
          style={{ height: 56, width: 56 }}
        />
      </div>
    </div>
  );
}

export default Contact;
