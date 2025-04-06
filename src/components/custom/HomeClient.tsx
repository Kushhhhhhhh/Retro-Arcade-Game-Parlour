"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function HomeClient() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiCodePosition, setKonamiCodePosition] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const KONAMI_CODE = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "k", "u", "s", "h"];

  useEffect(() => {
    audioRef.current = new Audio("/arcade.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiCodePosition]) {
        const nextPosition = konamiCodePosition + 1;
        if (nextPosition === KONAMI_CODE.length) {
          setShowEasterEgg(true);
          setKonamiCodePosition(0);
        } else {
          setKonamiCodePosition(nextPosition);
        }
      } else {
        setKonamiCodePosition(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiCodePosition]);

  const games = [
    { name: "Tekken 3", route: "/tekken-3", color: "bg-indigo-400" },
    { name: "Pac-Man", route: "/pac-man", color: "bg-yellow-400" },
    { name: "Tetris", route: "/tetris", color: "bg-pink-500" },
    { name: "Donkey Kong", route: "/donkey-kong", color: "bg-green-600" },
    { name: "Galaga", route: "/galaga", color: "bg-blue-500" },
    { name: "Frogger", route: "/frogger", color: "bg-orange-500" },
    { name: "Sonic the Hedgehog", route: "/sonic", color: "bg-cyan-500" },
    { name: "Asteroids", route: "/asteroids", color: "bg-gray-800" },
    { name: "Centipede", route: "/centipede", color: "bg-green-700" },
    { name: "Breakout", route: "/breakout", color: "bg-red-500" },
    { name: "Pong", route: "/pong", color: "bg-white text-black" },
    { name: "Street Fighter II", route: "/street-fighter", color: "bg-blue-700" },
  ];

  return (
    <main className="min-h-screen text-white overflow-x-hidden px-4 sm:px-20 py-10 flex flex-col items-center gap-12">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-4 ml-0 lg:ml-30">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Retro Gaming, Reinvented
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 font-medium">
            Relive the Unforgettable Days of Arcade Gaming History
          </p>
        </div>

        <div
          className="relative aspect-square w-full h-auto rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={() => audioRef.current?.play()}
          onMouseLeave={() => {
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
          }}
        >
          <Image
            src="/arcade-machine.gif"
            alt="Arcade Machine"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="w-full max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-8">
          Select Your Game
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Link href={game.route} key={index}>
              <div
                className={`p-6 border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-150 cursor-pointer ${game.color} text-black font-bold uppercase tracking-wide text-lg`}
              >
                {game.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
          <div className="text-center p-8 bg-black border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,1)] rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">
              You Found the Secret!
            </h2>
            <p className="text-lg sm:text-xl text-white mb-6">Here&apos;s a bonus game for you:</p>
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
              className="mt-6 px-6 py-3 text-lg sm:text-xl font-bold uppercase bg-red-600 text-white border-4 border-black shadow-[8px_8px_0_rgba(255,255,255,1)] hover:shadow-[12px_12px_0_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-150"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}