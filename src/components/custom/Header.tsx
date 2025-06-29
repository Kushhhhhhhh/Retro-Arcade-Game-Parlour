"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { pressStart } from '@/app/fonts';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  // Glitch effect for desktop logo
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <header className="relative text-white py-4 px-4 sm:px-6 bg-[#0f0f0f] border-b-[6px] sm:border-b-[12px] border-[#ffffff] z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`hidden md:flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-extrabold uppercase transform transition-all duration-300 ${pressStart.className} ${glitchActive ? 'skew-x-3 text-[#0FF] scale-105' : ''}`}
          >
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] bg-clip-text text-transparent relative inline-block hover:animate-pulse">
              Arcade Paradise
            </span>
          </Link>

          <Link
            href="/"
            className={`flex md:hidden items-center justify-center text-lg font-extrabold uppercase ${pressStart.className}`}
          >
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] bg-clip-text text-transparent">
              Arcade
            </span>
            <span className="bg-gradient-to-r from-[#FF00FF] to-[#FFFF00] bg-clip-text text-transparent ml-1">
              Paradise
            </span>
          </Link>

          <nav className="hidden md:flex gap-4 sm:gap-6 lg:gap-8">
            <Link
              href="/about"
              className="group relative transform hover:translate-y-[-4px] transition-all duration-200"
            >
              <span className="relative z-10 px-3 sm:px-4 py-2 block uppercase tracking-wider border-2 border-white
                             bg-indigo-400 text-white font-semibold hover:bg-indigo-500
                             transition-all duration-200 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]">
                About
              </span>
            </Link>
            <Link
              href="/contact"
              className="group relative transform hover:translate-y-[-4px] transition-all duration-200"
            >
              <span className="relative z-10 px-3 sm:px-4 py-2 block uppercase tracking-wider border-2 border-white
                             bg-lime-400 text-white font-semibold hover:bg-lime-500
                             transition-all duration-200 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]">
                Contact
              </span>
            </Link>
          </nav>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-2xl sm:text-3xl text-[#FFFF00] hover:text-[#00FFFF]
                     p-2 hover:border-[#00FFFF] rounded-md
                     hover:shadow-[4px_4px_0px_#000]
                     transition-all duration-200 transform hover:translate-y-[-2px]"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-3/4 md:w-1/2 lg:w-1/3
                  bg-[#120F1E] z-50 transform transition-transform duration-300 ease-in-out
                  ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6 sm:p-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl sm:text-3xl text-[#FFFF00] hover:text-[#00FFFF]
                       border-2 border-[#FF00FF] p-2 hover:border-[#00FFFF]
                       rounded-md shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]
                       transition-all duration-200 transform hover:translate-y-[-2px]"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-12">
            <Link
              href="/about"
              onClick={() => setIsSidebarOpen(false)}
              className="uppercase tracking-wider px-4 py-3 text-center
                       bg-[#FF00FF] text-[#120F1E] hover:bg-[#00FFFF]
                       border-2 border-white rounded-md
                       transition-all duration-200 shadow-[4px_4px_0px_#000]
                       hover:shadow-[6px_6px_0px_#000]
                       transform hover:translate-y-[-2px] text-lg"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsSidebarOpen(false)}
              className="uppercase tracking-wider px-4 py-3 text-center
                       bg-[#FFFF00] text-[#120F1E] hover:bg-[#00FFFF]
                       border-2 border-white rounded-md
                       transition-all duration-200 shadow-[4px_4px_0px_#000]
                       hover:shadow-[6px_6px_0px_#000]
                       transform hover:translate-y-[-2px] text-lg"
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto pt-12 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Arcade Paradise</p>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}