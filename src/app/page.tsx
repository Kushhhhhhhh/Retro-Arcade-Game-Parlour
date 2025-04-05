"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiCodePosition, setKonamiCodePosition] = useState(0);

  const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "k",
    "u",
    "s",
    "h"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiCodePosition]) {
        setKonamiCodePosition((prev) => prev + 1);
        if (konamiCodePosition === KONAMI_CODE.length - 1) {
          setShowEasterEgg(true);
          setKonamiCodePosition(0);
        }
      } else {
        setKonamiCodePosition(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiCodePosition]);

  const games = [
    { name: "Pac-Man", route: "/pac-man", color: "bg-yellow-300" },
    { name: "Space Invaders", route: "/space-invaders", color: "bg-purple-400" },
    { name: "Tetris", route: "/tetris", color: "bg-pink-400" },
    { name: "Donkey Kong", route: "/donkey-kong", color: "bg-green-400" },
    { name: "Galaga", route: "/galaga", color: "bg-blue-300" },
    { name: "Frogger", route: "/frogger", color: "bg-orange-300" },
  ];

  return (
    <main className="min-h-screen w-full text-white overflow-x-hidden overflow-y-auto px-4 sm:px-20 py-10 flex flex-col items-center gap-16">
     
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 drop-shadow-lg">
        Arcade Machine
      </h1>

      <p className="text-xl sm:text-2xl text-center text-gray-400 font-medium">
        Relive the Glory Days of Gaming
      </p>

      <div className="relative z-10 w-full max-w-4xl aspect-video flex justify-center">
        <Image
          src="/arcade-machine.gif"
          alt="Arcade Machine"
          fill
          className="object-contain rounded-lg shadow-lg"
          priority
          unoptimized
        />
      </div>

      <div className="w-full max-w-5xl text-center z-50">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-wider font-['Press_Start_2P']">
          Select Your Game
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Link href={game.route} key={index}>
              <div
                className={`p-6 border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-100 cursor-pointer ${game.color} text-black font-extrabold uppercase tracking-wide text-lg`}
              >
                {game.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-500 mb-4">
              You Found the Secret!
            </h2>
            <p className="text-xl text-white mb-6">Here's a bonus game for you:</p>
            <iframe
              src="https://www.retrogames.cc/embed/36036-super-mario-bros.html"
              width="640"
              height="480"
              className="rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <button
              onClick={() => setShowEasterEgg(false)}
              className="mt-6 px-6 py-3 text-lg font-bold uppercase bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}