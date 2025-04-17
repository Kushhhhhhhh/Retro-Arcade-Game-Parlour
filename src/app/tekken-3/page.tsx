"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { pressStart } from '@/app/fonts';

export default function Tekken3() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        
        <h1 className={`text-3xl ${pressStart.className} sm:text-4xl md:text-5xl font-black mb-8 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-red-400 via-orange-500 to-yellow-300 
          drop-shadow-[0_2px_4px_rgba(255,0,0,0.3)]`}>
          TEKKEN 3
        </h1>

        <div className="relative w-full max-w-2xl h-[480px] sm:h-[640px] 
          bg-black rounded-lg shadow-[0_0_0_8px_rgba(255,69,0,0.8)] 
          overflow-hidden transform transition-transform hover:scale-[1.02]">
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 text-center">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-4 h-4 bg-red-500 rounded-full 
                      animate-bounce" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <p className="text-xl font-bold text-gray-300 uppercase 
                  tracking-wider">
                  Initializing Arcade...
                </p>
              </div>
            </div>
          )}

          <iframe
            src="https://www.retrogames.cc/embed/40238-tekken-3.html"
            className={`w-full h-full ${isLoading ? 'hidden' : ''}`}
            allowFullScreen
            title="Tekken 3 Game"
          />
        </div>

        <Link
          href="/"
          className="mt-10 px-8 py-4 text-xl font-bold uppercase 
          bg-red-700 text-white shadow-[4px_4px_0px_rgba(0,0,0,0.3)] 
          hover:shadow-[6px_6px_0px_rgba(0,0,0,0.7)] 
          transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px]"
        >
          Return to Lobby
        </Link>
      </div>
    </div>
  );
}