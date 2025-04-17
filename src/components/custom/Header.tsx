"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { pressStart } from '@/app/fonts';
import { FaBars, FaTimes, FaGamepad } from "react-icons/fa";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <header className="relative text-white py-6 px-6 sm:px-10 bg-[#0f0f0f] border-b-[12px] z-30 
                       after:content-[''] after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoOTApIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] after:opacity-50 after:pointer-events-none after:z-[-1]">

      <div className="relative flex justify-between items-center max-w-7xl mx-auto z-[2]">
        <Link
          href="/"
          className={`group flex items-center justify-center text-3xl sm:text-4xl font-bold uppercase tracking-widest transform transition-all ease-in-out ${pressStart.className} ${glitchActive ? 'skew-x-3 text-[#0FF] scale-105' : ''
            } relative`}
        >
          <span className="mr-2 flex items-center justify-center transform hover:rotate-12 transition-transform">
            <FaGamepad className="text-[#00FFFF] w-12 h-12 mr-4 filter drop-shadow-[4px_4px_0_rgba(255,0,255,0.5)]" />
          </span>
          <span
            className="bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] bg-clip-text text-center text-transparent relative inline-block
               hover:animate-pulse"
          >
            Arcade Paradise
          </span>
        </Link>

        <nav className="hidden sm:flex gap-8 text-xl font-bold">
          <Link
            href="/about"
            className="group relative transform hover:translate-y-[-4px] transition-all"
          >
            <span className="relative z-10 px-5 py-2 block uppercase tracking-wider
                           bg-[#FF00FF] text-[#120F1E] hover:bg-[#cc82ee] 
                           border-4 border-white hover:border-[#000]
                           transition-all duration-200
                           shadow-[8px_8px_0px_#000]
                           hover:shadow-[12px_12px_0px_#000]">
              About
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                           group-hover:translate-x-1 group-hover:translate-y-1 
                           transition-all duration-200"></span>
          </Link>
          <Link
            href="/contact"
            className="group relative transform hover:translate-y-[-4px] transition-all"
          >
            <span className="relative z-10 px-5 py-2 block uppercase tracking-wider
                           bg-[#FFFF00] text-[#120F1E] hover:bg-[#ffea8f] 
                           border-4 border-white hover:border-[#000]
                           transition-all duration-200
                           shadow-[8px_8px_0px_#000]
                           hover:shadow-[12px_12px_0px_#000]">
              Contact
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                           group-hover:translate-x-1 group-hover:translate-y-1 
                           transition-all duration-200"></span>
          </Link>
        </nav>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sm:hidden text-3xl text-[#FFFF00] hover:text-[#00FFFF] 
                   p-2 hover:border-[#00FFFF]
                   hover:shadow-[6px_6px_0px_#000]
                   transition-all duration-200 transform hover:translate-y-[-2px]"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[280px] 
                  bg-[#120F1E]
                  z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }
                  after:content-[''] after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjRkYwMEZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] after:opacity-50 after:pointer-events-none after:z-[-1]`}
      >
        <div className="flex flex-col gap-8 p-8 text-xl font-bold">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="self-end text-3xl text-[#FFFF00] hover:text-[#00FFFF] 
                     border-4 border-[#FF00FF] p-2 hover:border-[#00FFFF]
                     shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]
                     transition-all duration-200"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <Link
            href="/about"
            onClick={() => setIsSidebarOpen(false)}
            className="uppercase tracking-wider px-4 py-3 
                     bg-[#FF00FF] text-[#120F1E] hover:bg-[#00FFFF]
                     border-4 border-white hover:border-[#FFFF00]
                     transition-all duration-200
                     shadow-[8px_8px_0px_#000]
                     hover:shadow-[12px_12px_0px_#000]
                     transform hover:translate-y-[-2px]"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="uppercase tracking-wider px-4 py-3 
                     bg-[#FFFF00] text-[#120F1E] hover:bg-[#00FFFF]
                     border-4 border-white hover:border-[#FF00FF]
                     transition-all duration-200
                     shadow-[8px_8px_0px_#000]
                     hover:shadow-[12px_12px_0px_#000]
                     transform hover:translate-y-[-2px]"
          >
            Contact
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 sm:hidden bg-black/80 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}