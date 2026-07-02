import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%, 20%", "50%", "80%", "20%"],
    }}
    transition={{
        duration: 2.5,
    }}
    className='absolute inset-0 flex justify-center items-center pointer-events-none -z-10'>
        <div className='absolute border border-accent-400/40 rounded-full h-[250px] w-[250px] md:h-[400px] md:w-[400px] animate-ping'/>
        <div className='absolute border border-accent-400/25 rounded-full h-[150px] w-[150px] md:h-[280px] md:w-[280px] animate-ping'/>
    </motion.div>
  )
}

export default BackgroundCircles