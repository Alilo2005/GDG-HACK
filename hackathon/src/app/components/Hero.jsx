"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full min-h-screen bg-gray-900 border border-blue-400 border-opacity-50">
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <nav className="sticky top-0 z-50 bg-gray-900 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 md:hidden hover:text-gray-400 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </button>
            <p className="text-2xl font-extrabold text-blue-400 font-mono md:text-3xl">GDG Hackathon.</p>
          </div>

          <div
            className={`${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            } absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-gray-900 top-16 md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center`}
          >
            <a
              href="#home"
              className="block text-white transition-colors duration-300 md:px-6 hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#bootcamps"
              className="block text-white transition-colors duration-300 md:px-6 hover:text-blue-400"
            >
              Bootcamps
            </a>
            <a
              href="#about"
              className="block text-white transition-colors duration-300 md:px-6 hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#contacts"
              className="block text-white transition-colors duration-300 md:px-6 hover:text-blue-400"
            >
              Contacts
            </a>

            <button className="w-full px-5 py-3 transition-colors duration-300 bg-gray-800 rounded-md md:w-auto md:mx-6 hover:bg-gray-700">
              <div className="flex items-center justify-center -mx-1">
                <p className="text-sm text-white mx-6">
                  Login
                </p>
              </div>
            </button>
          </div>
        </nav>

        <section className="flex items-center flex-1">
          <div className="flex flex-col w-full text-center">
            <motion.h1
              className="text-5xl font-extrabold lg:text-7xl 2xl:text-8xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-200 via-indigo-300 to-sky-500">
                GDG 
              </span>

              <span className="text-transparent bg-gradient-to-tr bg-clip-text from-sky-300 via-pink-300 to-red-500">
                HACK
              </span>
            </motion.h1>

            <motion.p
              className="max-w-3xl mx-auto mt-6 text-lg text-white md:text-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A 3-days hackathon for developers, designers, and entrepreneurs to build and launch a project.
            </motion.p>

            <motion.div
              className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <input
                id="email"
                type="text"
                className="px-6 py-3 text-gray-300 bg-gray-900 border rounded-md border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring sm:mx-2"
                placeholder="Email Address"
                required
              />

              <button type="submit" className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Notify Me
              </button>
            </motion.div>

            <motion.p
              className="mt-8 text-center text-white text-md md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Notify me when Hackathon is launched ❤️
            </motion.p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;