"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import NavLink from "./navLink";
import {motion} from "framer-motion"

const links = [
	{url: "/", title:"Home"},
	{url: "/about", title:"About"},
	{url: "/portfolio", title:"Portfolio"},
	{url: "/contact", title:"Contact"},
	{url: "https://drive.google.com/uc?export=download&id=1y5Sd4PxVONwQYbR5z4DAv8bCJmVmArKX", title:"CV"},	
	
];
const links2 = [
	{url: "/", title:"Home"},
	{url: "/about", title:"About"},
	{url: "/portfolio", title:"Portfolio"},
	{url: "/contact", title:"Contact"},
	{url: "https://drive.google.com/uc?export=download&id=1y5Sd4PxVONwQYbR5z4DAv8bCJmVmArKX", title:"CV"},
];
const Navbar = () => {
	const[open,setOpen] = useState(false)
	
	const topVariants={
		closed:{
			rotate:0
		},
		opend:{
			rotate:45,
			backgroundColor:"rgb(255,255,255)"
		}
	}
	
	const centerVariants={
		closed:{
			opacity:1
		},
		opend:{
			opacity:0
		}
	}
	
	const bottomVariants={
		closed:{
			rotate:0
		},
		opend:{
			rotate:-45,
			backgroundColor:"rgb(255,255,255)"
		}
	}
	
	const listVariants ={
		closed:{
			x:"100vh"
		},
		opened:{
			x :0,
			transition:{
				when:"beforeChildren",
				 staggerChildren: 0.2,
			}
		}
	}
	
	const listItemVariant ={
		closed:{
			x:-10,
			opacity:0
		},
		opened:{
			x :0,
			opacity:1
		}
	}
	
    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ">
			{/* Links */}
			<div className="hidden md:flex gap-4 w-1/3 z-10">
			{links.map(link =>(
					<NavLink link = {link} key = {link.title}/>
				))}
			</div>
			{/* Logo */}
            <div className="hidden lg:flex w-1/3 justify-center">
			 <Link href = "/" className=" bg-black rounded-md p-1 flex items-center justify-center">
			 	<Image src = "/glasses.png" alt ="glasses" width = {72} height = {0} unoptimized />
				{/* <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center ">.Dev</span>	  */}
			 </Link>
			</div>
			{/* Social */}
			<div className="hidden md:flex gap-4  w-1/3">
				<Link href ="https://github.com/RanWurm" >
				<Image src = "/github.png" alt ="github" width = {24} height = {24} unoptimized />
				</Link>
				<Link href ="https://www.instagram.com/ran_wurmbrand/" >
				<Image src = "/instagram.png" alt ="instagram" width = {24} height = {24} unoptimized/>
				</Link>
				<Link href ="https://www.facebook.com/RanWurmbrand" >
				<Image src = "/facebook.png" alt ="facebook" width = {24} height = {24} unoptimized/>
				</Link>
				<Link href ="https://www.linkedin.com/in/ran-wurmbrand-a4a039209/" >
				<Image src = "/linkedin.png" alt ="linkedin" width = {24} height = {24} unoptimized/>
				</Link>
				<Link href ="https://drive.google.com/uc?export=download&id=1y5Sd4PxVONwQYbR5z4DAv8bCJmVmArKX" >
				<Image src = "/cv3.png" alt ="C.V" width = {24} height = {24} unoptimized/>
				</Link>
			</div>
			{/* RSPONSIVE MENU*/}
			<div className="md:hidden">
			{/* MenuBotton */}
			<button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
			onClick ={(()=>setOpen(!open))}>
				<motion.div
				 variants={ topVariants }   
				 animate={open ? "opend":"closed"}
				 className="w-10 h-1 bg-black rounded origin-left">	
				 </motion.div>
				 
				<motion.div
				 variants={ centerVariants }
				 animate={open ? "opend":"closed"}
				 className="w-10 h-1 bg-black rounded">
				 </motion.div>
				 
				<motion.div
				 variants={ bottomVariants }
				 animate={open ? "opend":"closed"}
				 className="w-10 h-1 bg-black rounded origin-left">
				 </motion.div>
			</button>
			
			{/* MENU List*/}
			{open &&(
			<motion.div 
			variants={listVariants} 
			initial = "closed"
			animate = "opened"
			className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6 text-4xl z-50">
				{links2.map(link =>(
					<motion.div 
					className=""
					variants ={listItemVariant} key = {link.title}>					
					<Link href = {link.url}>{link.title}</Link> 
					</motion.div>
				))}
			</motion.div>											
			)}				
			
			</div>
        </div>
    );
}
export default Navbar;
