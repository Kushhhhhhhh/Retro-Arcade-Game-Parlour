"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="text-white py-4 px-6 sm:px-10 bg-[#1E1E2F] border-b-8 border-[#FF5733] z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFD700] via-[#FF6F61] to-[#33FF57] bg-clip-text text-transparent"
        >
          Arcade Paradise
        </Link>

        <nav className="hidden sm:flex gap-6 text-lg font-medium">
          <Link
            href="/about"
            className="hover:bg-[#FF5733] hover:text-black px-3 py-1 rounded transition-colors duration-200 border-2 border-transparent hover:border-[#FFC300]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-[#FF5733] hover:text-black px-3 py-1 rounded transition-colors duration-200 border-2 border-transparent hover:border-[#FFC300]"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sm:hidden text-2xl text-white hover:text-[#FFC300] transition-colors duration-200"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#1E1E2F] border-l-8 border-[#FFC300] shadow-[12px_0_0_rgba(255,255,255,1)] z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 text-lg font-medium">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="self-end text-2xl text-[#FFC300] hover:text-[#FF5733] transition-colors duration-200"
          >
            <FaTimes />
          </button>

          <Link
            href="/about"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-[#FFC300] transition-colors duration-200 border-b border-[#FFC300] pb-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="hover:text-[#FFC300] transition-colors duration-200 border-b border-[#FFC300] pb-2"
          >
            Contact
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 sm:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}