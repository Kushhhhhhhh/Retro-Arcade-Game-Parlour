"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function RoadRash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
    
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-green-600 via-green-300 to-green-800 
          drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          ROAD RASH
        </h1>

        <div className="relative w-full max-w-2xl aspect-[4/3] 
          bg-black rounded-lg border-4 border-green-600 shadow-[0_0_20px_rgba(0,255,0,0.5)] 
          overflow-hidden transform transition-transform hover:scale-[1.02]">
          
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-4 h-4 bg-green-500 rounded-full 
                    animate-bounce" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <p className="text-xl font-bold text-gray-300 uppercase tracking-wider">
                Revving Up Engines...
              </p>
            </div>
          )}

          <iframe
            src="https://www.retrogames.cc/embed/41506-road-rash.html"
            className={`w-full h-full ${isLoading ? 'hidden' : ''}`}
            allowFullScreen
            title="Road Rash Game"
          />
        </div>

        <Link
          href="/"
          className="mt-10 px-8 py-4 text-xl font-bold uppercase 
          bg-green-700 text-white rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.5)] 
          hover:shadow-[6px_6px_0px_rgba(0,0,0,0.7)] 
          transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px]"
        >
          Return to Arcade
        </Link>
      </div>
    </div>
  );
}