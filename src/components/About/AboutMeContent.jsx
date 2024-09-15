import React from 'react'
import { SiAltiumdesigner } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";

function AboutMeContent({about}) {
  return (
    <div className=" sm:h-72 rounded-lg bg-low-priority text-surface shadow-secondary-1">
    <div className="p-6">
      <p className="text-black flex flex-col gap-5">
        <SiAltiumdesigner className="textt-black font-semibold text-4xl" />
        <span className="font-semibold text-lg">{about}</span>
      </p>
    </div>
  </div>
  )
}

export default AboutMeContent
