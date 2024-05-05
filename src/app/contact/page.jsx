"use client"
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ParticleContainer from '@/components/particlesContainer';

const Contact = () => {
  const text = "Say Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then(
      () => {
        setSuccess(true);
        form.current.reset();
      },
      () => {
        setError(true);
      }
    );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }} 
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <ParticleContainer style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} />
        
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex items-center justify-center text-6xl z-50">
          <motion.div className="z-50">
            {text.split("").map((letter, index) => (
              <motion.span key={index} 
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >{letter}</motion.span>
            ))}
            😊
          </motion.div>
        </div>
        {/* FORM CONTAINER */}
        <form onSubmit={sendEmail} ref={form} className="flex-1 overflow-scroll rounded-xl bg-red-50 p-8 text-xl flex flex-col gap-4 justify-center z-50">
          <span>Dear Ran</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-black outline-none resize-none"
            name="user_message"
          ></textarea>
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-black outline-none"
          />
          <span>Regards</span>
          <button className="rounded bg-purple-200 p-4 font-semibold text-gray-600">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
export default Contact;
