"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="text-white py-4 px-6 sm:px-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">   
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-700 via-purple-800 to-blue-800 bg-clip-text text-transparent"
        >
          Arcade Paradise
        </Link>

        <nav className="hidden sm:flex gap-6 text-lg font-medium">
          <Link
            href="/"
            className="hover:bg-white hover:text-black px-3 py-1 rounded transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:bg-white hover:text-black px-3 py-1 rounded transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-white hover:text-black px-3 py-1 rounded transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sm:hidden text-2xl text-white"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-black border-l-8 border-white shadow-[12px_0_0_rgba(255,255,255,1)] z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 text-lg font-medium">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="self-end text-2xl text-white hover:text-gray-400 transition-colors duration-200"
          >
            <FaTimes />
          </button>

          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-gray-400 transition-colors duration-200 border-b border-gray-700 pb-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-gray-400 transition-colors duration-200 border-b border-gray-700 pb-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-gray-400 transition-colors duration-200 border-b border-gray-700 pb-2"
          >
            Contact
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}