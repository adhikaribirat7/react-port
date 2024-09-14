import React from "react";
import { SiAltiumdesigner } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";

function AboutMe() {
  return (
    <section
      className="mt-10 p-3 grid grid-rows-1 gap-4 items-center justify-items-center"
    >
      <div className="pl-7 justify-center items-center sm:w-4/5" id="aboutme">
        <div className="">
          <p className="text-4xl  text-costume-color">About me:</p>
          <p className="text-white font-semibold text-lg">
            Hi, my name is Birat Adhikari, i am a Fullstack web developer, UI
            designer, and Mobile developer. I jhave honed my skills in Web
            Development and advance i have core understanding of advance UI
            design principles. Here are the major skills i have.{" "}
          </p>
          <p className="text-white flex items-center gap-4">
            <span className="text-costume-color font-semibold text-8xl">
              0+
            </span>
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 sm:w1/2 gap-4 justify-center items-center">
          <div className="block max-w-[18rem] mt-10 rounded-lg bg-low-priority text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="p-6">
              <p className="text-black flex flex-col gap-5">
                <SiAltiumdesigner className="textt-black font-semibold text-4xl" />
                <span className="font-semibold text-lg">UX & UI</span>
                <span className="font-semibold text-lg">Designing</span>
              </p>
            </div>
          </div>

          <div className="block max-w-[18rem] mt-10 rounded-lg bg-low-priority text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="p-6">
              <p className="text-black flex flex-col gap-5">
                <AiOutlineHtml5 className="textt-black font-semibold text-4xl" />
                <span className="font-semibold text-lg">UX & UI</span>
                <span className="font-semibold text-lg">Designing</span>
              </p>
            </div>
          </div>

          <div className="block max-w-[18rem] mt-10 rounded-lg bg-low-priority text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="p-6">
              <p className="text-black flex flex-col gap-5">
                <AiOutlineAndroid className="textt-black font-semibold text-4xl" />
                <span className="font-semibold text-lg">UX & UI</span>
                <span className="font-semibold text-lg">Designing</span>
              </p>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default AboutMe;
