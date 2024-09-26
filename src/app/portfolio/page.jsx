"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "FakeBook",
    desc: "Discover Fakebook, the social platform where you can connect, share, and engage with content that matters. Enjoy intuitive features, enhanced privacy, and a vibrant community. Join now and redefine your social networking experience!",
    img: "/fakeBook.png",
    link: "https://github.com/RanWurm/ProjectPt3",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Neural-Network",
    desc: "This Jupyter notebook is designed as part of an educational series to enhance understanding of advanced data analysis techniques. Assignment 5 delves into complex methods that integrate statistical analysis, predictive modeling, and data visualization to extract meaningful insights from large datasets.",
    img: "/coat.png",
    link: "https://github.com/RanWurm/Neural-Network",
  },
  {
    id: 3,
    color: "from-purple-300 to-red-300",
    title: "Convolutional neural network",
    desc: "This project implements a Self-Organizing Map (SOM), a type of artificial neural network used for reducing dimensions and visualizing high-dimensional data. The project uses SOM to classify and visualize the MNIST dataset of handwritten digits. It demonstrates how SOM can be used to identify similar digits and organize them into a two-dimensional grid based on their features.",
    img: "/SOM.png",
    link: "https://github.com/RanWurm/CNN-Self-Organizing-Map-SOM",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: ["Arkanoid Game", "Ovad's-Sabih Tribute"],
    desc: "This project is a Java-based implementation of the classic Arkanoid game, developed as part of an Object-Oriented Programming (OOP) class. The game features multiple levels with increasing difficulty, a scoring system, and various power-ups.",
    img: "/arkanoid.png",
    link: "https://github.com/RanWurm/Arkanoid",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="min-h-screen overflow-hidden"  // Added 'overflow-hidden' to prevent horizontal scrolling
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-red-100">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center">My Works</h1>
      </div>
      
      {items.map((item) => (
        <motion.div 
          key={item.id}
          className={`min-h-screen flex items-center justify-center bg-gradient-to-t ${item.color}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-100px" }}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {Array.isArray(item.title)
                      ? item.title.map((line, index) => (
                          <React.Fragment key={index}>
                            {line}{index < item.title.length - 1 && <br />}
                          </React.Fragment>
                        ))
                      : item.title
                    }
                  </h2>
                  <p className="text-white">{item.desc}</p>
                  <Link href={item.link} className="inline-block">
                    <button className="px-6 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-100 transition-colors">
                      See Demo
                    </button>
                  </Link>
                </div>
                <div className="flex-1 relative w-full aspect-video">
                  <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="min-h-screen flex flex-col items-center justify-center py-16">
        <h2 className="text-4xl md:text-6xl mb-8">Do you have a project?</h2>
        <div className="relative">
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-80 md:h-80"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">cs-student FullStack software engineer</textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
