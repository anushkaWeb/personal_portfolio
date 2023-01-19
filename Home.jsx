import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 
import { motion } from "framer-motion"

const Home = () => {
  return (
    
    <div
    name="home"
    className="h-screen w-full bg-[#fecaca]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
      <div className="flex flex-col justify-center h-full">
      <motion.div
    initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}
> 
 <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
            <h2 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-8 flash ">
          I'm a Web Developer
        </h2>
               
            </motion.h1>
        
        </motion.div>
        <p className="text-gray-500 py-4 max-w-md">
           Work in websenor as web developer
          Currently, I love to work on web application using technologies like
          HTML,Javacsript,React, Tailwind.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
           <motion.div
    // className="rectangle"
    initial={{
      opacity: 0,
      y: 50
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
  >
            About Me
            </motion.div>

            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
      <motion.div
        className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg brightness-110 aspect-square"
        animate={{y:10, transition:{duration: 2, ease: "easeInOut", repeat:Infinity, repeatType: "reverse"}}}
        initial={{y: -10}}
        >
        <img
          src={me}
          alt="my profile"
          className="  rounded-full max-w-xs hover:shadow-lg transition duration-300 ease-in-out "
         //w-78 h-78 ml-auto pt-6 m-8 border-4 object-right-bottom p-px "
        />
        </motion.div>
      </div>
    </div>
  </div>
 
  
  );
};
export default Home;