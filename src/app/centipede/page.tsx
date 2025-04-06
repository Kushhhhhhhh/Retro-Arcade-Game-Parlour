"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Centipede() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
        Centipede
      </h1>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-[480px] sm:h-[640px] rounded-lg shadow-lg animate-pulse">
          <p className="text-xl text-gray-400">Loading Game...</p>
        </div>
      ) : (
        <iframe
          src="https://www.retrogames.cc/embed/33263-centipede-revision-4.html"
          className="w-full max-w-[640px] h-[480px] sm:h-[640px] rounded-lg shadow-lg border-4 border-green-500"
          allowFullScreen
          title="Centipede Game"
        ></iframe>
      )}

      <Link
        href="/"
        className="mt-6 px-6 py-3 text-lg font-bold uppercase bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}