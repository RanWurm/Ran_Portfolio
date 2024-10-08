"use client"
import {motion, useScroll,useInView} from "framer-motion"
import Brain from "@/components/brain";
import { useRef} from "react";
import Image from "next/image"

const About = () =>{
const containerRef = useRef();	
const {scrollYProgress} = useScroll({container:containerRef})
const skillRef = useRef();
const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
const skillsListRef = useRef();
const isListRefInView = useInView(skillsListRef)
const expListRef = useRef();
const isExpListRefInView = useInView(expListRef, { margin: "-100px" })
return (
<motion.div
	className="h-full"
	initial={{y:"-200vh"}}
	animate ={{y:"0%"}} 
	transition={{duration:1}}>
	
	{/* CONTAINER */}
	<div className="h-full overflow-auto lg:flex" ref= {containerRef}>
		{/* TEXT CONTAINER */}
		 <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
		{/* BIOGRAPHY CONTAINER	*/}	
		<div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/biography.png"
              alt=""
              width={112}
              height={112}
			  unoptimized
              className="w-20 h-28 rounded-full object-cover"
            />
			<h1 className="font-bold text-2xl">BIOGRAPHY</h1>
			<p className="font-semibold text-1xl">"Only in the pursuit of knowledge 
			<br/>
			does one realize the brilliance of foolishness;
			<br/>
			for every genius thought, 
			there must first be 
			<br/>
			a thousand foolish ones left unspoken."</p>	
		<motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>	
		</div>
			{/* SKILLS CONTAINER */}
			<div className="flex flex-col gap-12 justify-center" ref={skillRef}>
			{/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
			
			{/* SKILLS LIST		 */}
			<motion.div
			ref = {skillsListRef}
			initial = {{x:"-100px"}}
			animate  = {isListRefInView? {x:0}: {}}			
			className="flex gap-4 flex-wrap w-2/3">
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					C
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					C++
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					Java
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					Python
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					Assemblyx86-64
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					JavaScript
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					NextJs
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					React
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					NodeJs
				</div>
				<div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
					MongoDB
				</div>
			</motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
		</div>		
		{/* EXPERIENCE CONTAINER */}
		 <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={expListRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExpListRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
			{/* EXPERIENCE LIST	 */}
		    <motion.div
              initial={{ x: "-300px" }}
              animate={isExpListRefInView ? { x: "0" } : {}}
              className=""
            >
		    	{/* EXPERIENCE LIST ITEM	 */}
			    <div className="flex justify-between h-48">
				 {/* LEFT	 */}
				 <div className="w-1/3 ">
					{/* JOB TITLE */}
					<div className="bg-white p-3 font-semibold rounded-lg overflow-hidden" style={{ overflowWrap: 'break-word' }}>Computer Seince student</div>
					{/* JOB DESC */}
					<div className="p-3 text-sm italic">highly enthusiastic Computer Seince student </div>
					{/* JOB DATE */}
					<div className="p-3 text-red-400 text-sm font-semibold">2022-present</div>			
					{/* JOB COMPANY */}
					<div className="p-1 rounded bg-white text-sm font-semibold w-fit">Bar-Ilan University</div>														
				 </div>
				{/* CENETER	 */}
				<div className="w-1/6 flex justify-center">
				{/* LINE */}
				<div className="w-1 h-full bg-gray-600 rounded relative">
				{/* CIRCLE */}
					<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
					</div>
				</div>
			</div>
			{/* RIGHT    */}
			<div className="w-1/3 "></div>
			</div>
			
			{/* EXPERIENCE LIST ITEM	 */}
			<div className="flex justify-between h-48">
				{/* LEFT	 */}
				<div className="w-1/3 "></div>
				{/* CENETER	 */}
				<div className="w-1/6 flex justify-center">
					{/* LINE */}
					<div className="w-1 h-full bg-gray-600 rounded relative">
					{/* CIRCLE */}
					<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
				</div>
			</div>
			
			{/* RIGHT    */}
			<div className="w-1/3">
					{/* JOB TITLE */}
					<div className="bg-white p-3 font-semibold rounded-lg overflow-hidden" style={{ overflowWrap: 'break-word' }}>teacher's assistant</div>
					{/* JOB DESC */}
					<div className="p-3 text-sm italic">T.A in Math And Physics<br/> for student from low backgorund</div>
					{/* JOB DATE */}
					<div className="p-3 text-red-400 text-sm font-semibold">2022 - 2023{" "}</div>			
					{/* JOB COMPANY */}
					<div className="p-1 rounded bg-white text-sm font-semibold w-fit">Hesegim for Hitech</div>								
				</div>
			</div>
			{/* EXPERIENCE LIST ITEM	 */}
			<div className="flex justify-between h-48">
				 {/* LEFT	 */}
				 <div className="w-1/3 ">
					{/* JOB TITLE */}
					<div className="bg-white p-3 font-semibold rounded-lg overflow-auto" style={{ overflowWrap: 'break-word' }}>
  PsychometricTutor
</div>
					{/* JOB DESC */}
					<div className="p-3 text-sm italic">
						helped students understand<br/>
						the beauty of the Exam!
					</div>
					{/* JOB DATE */}
					<div className="p-3 text-red-400 text-sm font-semibold">2021-2022</div>			
					{/* JOB COMPANY */}
					<div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelancer</div>														
				 </div>
			{/* CENETER	 */}
			<div className="w-1/6 flex justify-center">
				{/* LINE */}
				<div className="w-1 h-full bg-gray-600 rounded relative">
					{/* CIRCLE */}
					<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
					</div>
				</div>
			</div>
			{/* RIGHT    */}
			<div className="w-1/3"></div>
			</div>	
	</motion.div>
		</div>	
		</div>				
		{/* SVG CONTAINER*/}
		<div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 overflow-auto max-h-screen">

          <Brain scrollYProgress={scrollYProgress} />
        </div>
	</div>	
</motion.div>
);}
export default About;