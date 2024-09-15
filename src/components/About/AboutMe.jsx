import React, { useId } from "react";

import AboutMeContent from "./AboutMeContent";
import Data from "../../Data.json";
import { motion, MotionConfig } from "framer-motion";
import { fadeIn } from "../../variants";

function AboutMe() {
  return (
    <section id="aboutme" className="mt-10 p-3 grid sm:grid-rows-2 h-full  items-center justify-items-center">
      <div className="pl-7 justify-center items-center sm:w-4/5" id="aboutme">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=""
        >
          <p className="text-4xl  text-costume-color">About me:</p>
          <p className="text-white font-semibold text-lg">
            Hi, my name is Birat Adhikari, i am a Fullstack web developer, UI
            designer, and Mobile developer. I jhave honed my skills in Web
            Development and advance i have core understanding of advance UI
            design principles. Here are the major skills i have.{" "}
          </p>
          <p className="mt-10 text-white flex items-center gap-4">
            <span className="text-costume-color font-semibold text-8xl">
              0+
            </span>
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid sm:grid-cols-3 sm:w1/2  gap-4 justify-center items-center"
      >
        {Data["about-me"].map((about) => (
          <AboutMeContent key={useId()} about={about} />
        ))}
      </motion.div>
    </section>
  );
}

export default AboutMe;
// {
//   "name": "Emily Johnson",
//   "age": 28,
//   "email": "emily.johnson@example.com",
//   "skills": ["Angular", "TypeScript", "Sass"]
// }
