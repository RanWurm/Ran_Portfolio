"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const items = [

  {
    id: 1,
    color: "from-violet-600 to-indigo-700",
    title: "Warrantify (on the making)",
    desc: "This project focuses on developing an innovative app designed to manage electric product warranties, allowing users to easily store and track warranties, find nearby service centers, and receive AI-based recommendations. Built with React Native and Firebase, the app combines user-friendly functionality with advanced AI to offer tailored suggestions, enhancing the user experience and improving warranty management. The app is designed to help users stay organized and access essential services for their electric products.",
    img: "/Warrantify.png",
    videoUrl: "https://youtube.com/shorts/vtrJEjwnrPc?si=tCzt9oNZp8R7B5BZ",
    link: "https://github.com/RanWurm/Warrantify",
  },
  {
    id: 2,
    color: "from-cyan-500 to-blue-600",
    title: "PlayList Converter",
    desc: "Experience seamless music migration with our Spotify to YouTube Playlist Converter. Transform your favorite Spotify collections into YouTube playlists with just a click. Enjoy cross-platform flexibility, preserve your musical curation, and share your tunes effortlessly. Elevate your music streaming experience – convert your playlists now!",
    img: "/music_converter.png",
    link: "http://www.playlistconverter.site"
  },
  {
    id: 3,
    color: "from-emerald-400 to-teal-600",
    title: "Multi-Threaded-News-App",
    desc: "This project implements a robust system simulation, designed to showcase key operating system concepts such as process scheduling, multithreading, synchronization, and inter-process communication (IPC). The system is built in C and leverages advanced concurrency mechanisms to manage resources efficiently while executing multiple tasks in parallel.",
    img: "/news-app.png",
    link: "https://github.com/RanWurm/Multi-Threaded-News-App",
  },
  {
    id: 4,
    color: "from-amber-400 to-orange-600",
    title: "FakeBook",
    desc: "Discover Fakebook, the social platform where you can connect, share, and engage with content that matters. Enjoy intuitive features, enhanced privacy, and a vibrant community. Join now and redefine your social networking experience!",
    img: "/fakeBook.png",
    link: "https://github.com/RanWurm/ProjectPt3",
  },
  {
    id: 5,
    color: "from-rose-500 to-pink-600",
    title: "Neural-Network",
    desc: "This Jupyter notebook is designed as part of an educational series to enhance understanding of advanced data analysis techniques. Assignment 5 delves into complex methods that integrate statistical analysis, predictive modeling, and data visualization to extract meaningful insights from large datasets.",
    img: "/coat.png",
    link: "https://github.com/RanWurm/Neural-Network",
  },
  {
    id: 6,
    color: "from-fuchsia-500 to-purple-600",
    title: ["Fast Matrix Mutliplication", "Implemented in C", "(Karatsuba's algorithm)"],
    desc: "This repository contains a C implementation of the Fast Marching Method (FMM), a numerical technique used primarily for solving the Eikonal equation and other related problems in computational geometry and physics. The FMM is used to model wave propagation and is particularly well-suited for problems involving moving interfaces.",
    img: "/matrix_multi.png",
    link: "https://github.com/RanWurm/Fast-Matrix-Multiplication",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="min-h-screen overflow-hidden"
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
                            {line}
                            {index < item.title.length - 1 && <br />}
                          </React.Fragment>
                        ))
                      : item.title}
                  </h2>
                  <p className="text-white">{item.desc}</p>
                  <Link href={item.link} className="inline-block">
                    <button className="px-6 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-100 transition-colors">
                      See Demo
                    </button>
                  </Link>
                </div>
                <div className="flex-1 relative w-full aspect-video">
                  {item.videoUrl ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.videoUrl}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  ) : (
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  )}
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
              <textPath xlinkHref="#circlePath" className="text-xl">
                cs-student FullStack software engineer
              </textPath>
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
};

export default Portfolio;
