"use client"
import Link from 'next/link';
import { motion } from "framer-motion"
import Avatar from '@/components/avatar';
import ParticleContainer from '@/components/particlesContainer';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-hidden">
        <ParticleContainer style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} />
        
        {/* Flex container for content */}
        <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full">
          {/* IMAGE CONTAINER */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 order-first lg:order-last">
            <Avatar />
          </div>
          
          {/* Text CONTAINER */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-center lg:text-left">
            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold z-40">
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>
            {/* DESC */}
            <p className="hidden sm:block sm:text-xl z-40">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect my
              commitment to excellence.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex justify-center lg:justify-start gap-4">
              <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white z-50'>
                <Link href="/portfolio">View My Work</Link>
              </button>
              <button className='p-4 rounded-lg ring-1 ring-black bg-transparent'>
                <Link href="/contact">Contact Me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;