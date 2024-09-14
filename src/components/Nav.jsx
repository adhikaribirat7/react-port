import React from "react";

const Nav = () => {
  return (
    <nav className="bg-nav-color flex gap-4 w-3/2 p-5">
      <span className="text-costume-color font-semibold text-4xl flex-1">
        Birat Adhikari
      </span>
      <div className=" text-white flex-1 justify-self-end">
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
