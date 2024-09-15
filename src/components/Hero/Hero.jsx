import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import profilePic from "../../assets/images/profile2.png";
import { motion, MotionConfig } from "framer-motion";
import {fadeIn} from '../../variants'
function Hero() {
  return (
    <>
      <section
      id="hero"
        className="grid sm:grid-cols-12  sm:gap-4  p-3 
    h-full items-center justify-items-center"
      >
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        
        
        className=" border-white sm:col-span-6 sm:w-5/6  p-1 sm:mt-32 ">
          <div className="flex flex-col gap-4">
            <p className="text-3xl tracking-wide text-white font-medium">
              Hello, i'm
            </p>
            <h1 className="text-5xl tracking-wide text-white font-medium">
              Birat Adhikari
            </h1>
            <p className="mt-5 font-semibold tracking-wide text-white ">
              Freelance UI designer, Fullstack developer, & Data Miner. I create
              seamless web experiences for end-users.
            </p>
          </div>

          <div className="mt-20 hero-buttons flex gap-4 justify-center p-2  h-16">
            {/* <button className="border-none rounded  sm:w-4/12 text-center bg-costume-color text-white outline-none flex items-center justify-center gap-4 p-1">
              About Me
            </button> */}
            <MotionConfig
              transition={{
                duration: 0.125,
                ease: "easeInOut",
              }}

            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                className="border-none rounded  sm:w-4/12 text-center bg-costume-color text-white outline-none flex items-center justify-center gap-4 p-1"
              >
                About Me
                <CgProfile />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                className="border-none rounded  sm:w-4/12 text-center bg-costume-color text-white outline-none flex items-center justify-center gap-4 p-1"
              >
                Projects
                <MdOutlineRemoveRedEye />

              </motion.button>
            </MotionConfig>
{/* 
            <button className="border-none rounded sm:w-4/12   bg-costume-color p-3 text-white flex items-center justify-center gap-4 ">
              Projects
            </button> */}

          </div>
        </motion.div>

        {/* image */}
        <motion.div 
        variants={fadeIn("right",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        
        className="w-3/4 sm:2/4 sm:col-span-6 row-span-6 h-5/6 rounded-full bg-costume-color flex justify-center">
          <img className="" src={profilePic} alt="profile" />
        </motion.div>
      </section>
      {/* <CommonDiv /> */}
    </>
  );
}

export default Hero;
