"use client"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
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
	  color: "from-violet-300 to-purple-300",
	  title: "Arkanoid Game",
	  desc: "This project is a Java-based implementation of the classic Arkanoid game, developed as part of an Object-Oriented Programming (OOP) class. The game features multiple levels with increasing difficulty, a scoring system, and various power-ups.",
	  img: "/arkanoid.png",
	  link: "https://github.com/RanWurm/Arkanoid",
	},
	{
	  id: 4,
	  color: "from-purple-300 to-red-300",
	  title: "Convolutional neural network",
	  desc: "This project implements a Self-Organizing Map (SOM), a type of artificial neural network used for reducing dimensions and visualizing high-dimensional data. The project uses SOM to classify and visualize the MNIST dataset of handwritten digits. It demonstrates how SOM can be used to identify similar digits and organize them into a two-dimensional grid based on their features.",
	  img: "/SOM.png",
	  link: "https://github.com/RanWurm/CNN-Self-Organizing-Map-SOM",
	},
  ];
const Portfolio = () =>{
	const ref = useRef();
	const  {scrollYProgress} = useScroll({target: ref});
	const  x = useTransform(scrollYProgress, [0,1], ["0%","-80%"]);
	return (
		<motion.div
		className="h-full"
		initial={{ y: "-200vh" }}
		animate={{ y: "0%" }}
		transition={{ duration: 1 }}
		>
			<div className="h-[600vh] relative" ref={ref}> 
				<div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
					My Works
				</div>
				<div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
					<motion.div style = {{ x }} className="flex">
					<div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>	
					{items.map((item) => (
						<div 
							className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
							key={item.id}
						>
							<div className="flex flex-col gap-8 text-white">
								<h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
								<div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
									<Image src={item.img} alt="" fill />
								</div>	
									<p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]"> 
									{item.desc}
									</p>
									<Link href={item.link} className="flex justify-end">
									<button 
									className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
										See Demo
									</button>
									</Link>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-center">
						<h1 className="text-8xl">Do you jave a project?</h1>
						<div className="relative">
							<motion.svg 
							animate ={{rotate : 360}}
							transition={{duration: 8,ease:"linear",repeat:Infinity}}
							viewBox="0 0 300 300" className="w-64 h-64  md:w-[500px] md:h-[500px]">
								<defs>
									<path
										id = "circlePath"
										d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
									/>
								</defs>
								<text fill ="#000">
									<textPath xlinkHref="#circlePath" className="text-xl">cs-student FullStack software engineer</textPath>
								</text>
							</motion.svg>
							<Link
							 href="/contact"
							 className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
							 >Hire Me
							 </Link>
						</div>
					</div>			
		</motion.div>
	);
	
}
export default Portfolio;