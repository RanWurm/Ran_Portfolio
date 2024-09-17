"use client"
import Link from 'next/link';
import { motion } from "framer-motion";
import Avatar from '@/components/avatar';
import ParticleContainer from '@/components/particlesContainer';

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100" // Use min-h-screen to extend the background
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        <ParticleContainer style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} />

        {/* IMAGE CONTAINER - Avatar will be above on small screens, right on large screens */}
        <div className="flex justify-center lg:order-2 lg:w-1/2 lg:h-full py-8 lg:py-0">
          <Avatar />
        </div>

        {/* Text CONTAINER */}
        <div className="flex-1 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold z-40 text-center">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="sm:block sm:text-xl z-40 text-center px-4">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white z-50">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-transparent">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Homepage;
