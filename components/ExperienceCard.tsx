import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px xl:w-[900px] snap-center p-10">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
        src="../cot.png"
        alt=""
      />
      <div className="px-5 md:px-10">
        <h4 className="text-4xl font-light">DevOps Engineer</h4>
        <p className="font-bold text-2xl mt-1 text-left">Capital On Tap</p>
        {/* <div className=" flex space-x-3 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="/../public/nginx.jpg"
            alt=""
            width="7"
            height="7"
          />

          <Image
            className="h-10 w-10 rounded-full"
            src="/../public/ado.png"
            alt=""
            width="7"
            height="7"
          />

          <Image
            className="h-10 w-10 rounded-full"
            src="/../public/ado.png"
            alt=""
            width="7"
            height="7"
          />
        </div> */}
        <p className="uppercase py-5 text-left">Started... Ended....</p>

        <ul className="list-disc space-y-4 ml-5 text-sm text-left">
          <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points Summary Points Summary</li>
          <li>Summary Points Summary Points Summary Points Summary  Points Summary Points</li>
          <li>Summary Points Summary Points Summary PointsPoints Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
