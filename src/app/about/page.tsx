"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const laserAudioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    laserAudioRef.current?.play();
  };

  const handleMouseLeave = () => {
    laserAudioRef.current?.pause();
    laserAudioRef.current!.currentTime = 0;
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden px-4 sm:px-20 py-20 flex flex-col items-center gap-12">

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 bg-clip-text text-transparent">
            About Arcade Paradise
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-medium">
            Arcade Paradise is your gateway to the golden age of gaming. We bring the nostalgia of retro arcade games into the modern era with a cloud-based platform that lets you play anytime, anywhere.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 font-medium">
            Our mission is simple: to preserve the magic of classic gaming while embracing cutting-edge technology. Whether you're reliving your childhood or discovering these games for the first time, Arcade Paradise is here to deliver an unforgettable experience.
          </p>
          <Link href="/" className="self-start px-6 py-3 text-lg sm:text-xl font-bold uppercase bg-white text-black border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200">
            Back to Home
          </Link>
        </div>

        <div className="relative aspect-square w-full h-auto rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/prop-4.gif"
            alt="About Retro Gaming"
            fill
            className="object-contain"
            priority
            unoptimized
          />
          <audio ref={laserAudioRef} src="/laser.mp3" preload="auto" />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-8 bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 bg-clip-text text-transparent">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="flex flex-col items-center gap-4 p-6 border-4 border-black shadow-[8px_8px_0_rgba(255,255,255,1)] hover:shadow-[12px_12px_0_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200 hover:bg-indigo-500 rounded-lg">
            <Image
              src="/kush-1.jpeg"
              alt="Team Member 1"
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-white"
            />
            <h3 className="text-xl font-bold">Kush Sharma</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 border-4 border-black shadow-[8px_8px_0_rgba(255,255,255,1)] hover:shadow-[12px_12px_0_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200 hover:bg-red-500 rounded-lg">
            <Image
              src="/kush-2.jpeg"
              alt="Team Member 2"
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-white"
            />
            <h3 className="text-xl font-bold">Kush Sharma</h3>
            <p className="text-gray-400 text-sm">Designer & UX Specialist</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 border-4 border-black shadow-[8px_8px_0_rgba(255,255,255,1)] hover:shadow-[12px_12px_0_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200 hover:bg-green-700 rounded-lg">
            <Image
              src="/kush-3.jpeg"
              alt="Team Member 3"
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-white"
            />
            <h3 className="text-xl font-bold">Kush Sharma</h3>
            <p className="text-gray-400 text-sm">Game Curator & Tester</p>
          </div>
        </div>
      </div>

    </main>
  );
}