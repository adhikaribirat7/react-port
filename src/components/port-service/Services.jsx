import React from "react";
import Service from "./Service";
import Data from "../../Data.json";
import { useId } from "react";
import { motion, MotionConfig } from "framer-motion";
import { fadeIn } from "../../variants";
function Services() {
  return (
    <>
      <section id="service" className=" mt-10 p-3 h-full grid grid-rows-1 gap-4 items-center justify-items-center">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pl-7 justify-center items-center sm:w-4/5"
          id="aboutme"
        >
          <p className="text-4xl  text-costume-color">Services:</p>
          <p className="text-white font-semibold text-2xl">
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid sm:grid-cols-3 sm:w1/2 gap-4 justify-center items-center"
        >
          {Data.service.map((service) => (
            <Service
              key={useId()}
              skill={service.skill}
              experience={service.experience}
              desc={service.description}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Services;
