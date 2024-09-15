import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { fadeIn } from "../../variants";
function Footer() {
  return (
    <footer className="rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="sm:flex sm:items-center sm:justify-between"
        >
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          ></a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-costume-color sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.hr
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <motion.span
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="block text-sm mt-0 text-gray-500 sm:text-center dark:text-gray-400"
        >
          © 2023{" "}
          . All Rights Reserved.
        </motion.span>
      </div>
    </footer>
  );
}

export default Footer;
