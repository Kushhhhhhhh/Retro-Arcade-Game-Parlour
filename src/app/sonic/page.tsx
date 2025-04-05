"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SonicTheHedgehog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Sonic the Hedgehog</h1>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-[480px] sm:h-[640px] rounded-lg shadow-lg animate-pulse">
          <p className="text-xl">Loading Game...</p>
        </div>
      ) : (
        <iframe
          src="https://www.retrogames.cc/embed/36033-sonic-the-hedgehog.html"
          className="w-full max-w-[640px] h-[480px] sm:h-[640px] rounded-lg shadow-lg"
          allowFullScreen
        />
      )}
      <Link 
        href="/" 
        className="mt-6 px-6 py-3 text-lg font-bold uppercase bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}