import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#aboutme", "#service", "#projects", "#contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="bg-nav-color sticky z-50 top-0 flex justify-between items-center 
        min-w-[787px] w-[100%] p-5"
      >
        <div>
          <span className="text-costume-color font-semibold sm:text-3xl flex-1">
            Birat Adhikari
          </span>
        </div>
        <div className="text-white flex justify-self-end">
          <ul className="sm:flex sm:flex-row flex-col md:items-center hidden gap-8">
            <li>
              <AnchorLink
                href="#hero"
                className={activeLink === "#hero" ? "text-costume-color" : ""}
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#aboutme"
                className={activeLink === "#aboutme" ? "text-costume-color" : ""}
              >
                About Me
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#service"
                className={activeLink === "#service" ? "text-costume-color" : ""}
              >
                Service
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#projects"
                className={activeLink === "#projects" ? "text-costume-color" : ""}
              >
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className={activeLink === "#contact" ? "text-costume-color" : ""}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
