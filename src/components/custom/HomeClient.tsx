"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaGamepad, FaArrowRight } from "react-icons/fa";

export default function HomeClient() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiCodePosition, setKonamiCodePosition] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, Math.random() * 8000 + 5000);

    return () => clearInterval(glitchInterval);
  }, []);

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
          const successSound = new Audio("/powerup.mp3");
          successSound.volume = 0.6;
          successSound.play();
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
    { name: "Tekken 3", route: "/tekken-3", color: "bg-[#7B68EE]" },
    { name: "Pac-Man", route: "/pac-man", color: "bg-[#FFFF00]" },
    { name: "Tetris", route: "/tetris", color: "bg-[#FF00FF]" },
    { name: "Donkey Kong", route: "/donkey-kong", color: "bg-[#00FF7F]" },
    { name: "Galaga", route: "/galaga", color: "bg-[#00FFFF]" },
    { name: "Frogger", route: "/frogger", color: "bg-[#FF8C00]" },
    { name: "Sonic", route: "/sonic", color: "bg-[#4EEAFF]" },
    { name: "Asteroids", route: "/asteroids", color: "bg-[#808080]" },
    { name: "Centipede", route: "/centipede", color: "bg-[#32CD32]" },
    { name: "Breakout", route: "/breakout", color: "bg-[#FF4500]" },
    { name: "Pong", route: "/pong", color: "bg-[#FFFFFF] text-[#120F1E]" },
    { name: "Street Fighter", route: "/street-fighter", color: "bg-[#0000CD]" },
  ];

  return (
    <main 
      ref={containerRef}
      className={`min-h-screen text-white overflow-x-hidden px-4 sm:px-10 py-10 flex flex-col items-center gap-12 relative ${
        glitchActive ? 'translate-x-[2px]' : ''
      }`}
    >
   
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        <div className="flex flex-col justify-center space-y-8 ml-0 lg:ml-6 relative">
          
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-[#FF00FF] z-[-1]"></div>
          
          <h1 className={`font-press-start text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider 
                       ${glitchActive ? 'text-[#00FFFF] skew-x-2' : ''} relative`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] 
                           drop-shadow-[0_0_2px_rgba(255,0,255,0.8)] relative inline-block">
              RETRO GAMING
              <br className="hidden md:block" /> REINVENTED
            </span>
            
            <span className="absolute top-0 left-[2px] text-[#FF00FF]/30 z-[-1] hidden md:inline">
              RETRO GAMING
              <br className="hidden md:block" /> REINVENTED
            </span>
            <span className="absolute top-[2px] left-0 text-[#00FFFF]/30 z-[-1] hidden md:inline">
              RETRO GAMING
              <br className="hidden md:block" /> REINVENTED
            </span>
          </h1>
          
          <p className="font-vt323 mt-4 text-2xl sm:text-3xl text-[#CCCCCC] relative">
            <span className="relative z-[1]">
              Relive the Unforgettable Days
              <br /> of Arcade Gaming History
            </span>
            <span className="absolute bottom-0 left-0 h-3 w-1/2 bg-[#FF00FF]/50"></span>
          </p>
          
          <button 
            className="group relative self-start px-8 py-4 border-[4px] border-[#FFFF00] bg-[#120F1E] 
                    font-press-start text-[#FFFF00] text-sm md:text-base uppercase tracking-widest
                    shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000]
                    transform transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1"
            onClick={() => {
              if (containerRef.current) {
                const gamesSection = containerRef.current.querySelector('#games-section');
                gamesSection?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="flex items-center gap-2">
              Play Now <FaGamepad className="text-xl animate-pulse" />
            </span>
            <span className="absolute inset-0 w-full h-full bg-[#FFFF00]/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>

          <div className="text-sm text-[#AAAAAA] font-vt323 mt-6 p-4 border-l-4 border-[#FF00FF] bg-[#1A1730]">
            <p>Tip: Use the Konami Code to unlock a secret game!</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {KONAMI_CODE.map((key, i) => (
                <span 
                  key={i} 
                  className={`inline-block px-2 py-1 bg-[#2A2740] border border-[#FF00FF]/30 text-white/80 font-press-start text-xs ${
                    i < konamiCodePosition ? 'bg-[#FF00FF]/30' : ''
                  }`}
                >
                  {key === " " ? "SPACE" : key.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full h-auto">
          <div 
            className="relative w-full h-full cursor-pointer overflow-hidden transition-transform duration-200 
                      hover:scale-[1.02]"
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
              className="object-contain z-[1] relative"
              priority
              unoptimized
            />
         
            <div className={`absolute inset-0 bg-[#00FFFF]/10 mix-blend-color pointer-events-none z-[2] ${
              glitchActive ? 'opacity-20' : 'opacity-0'
            } transition-opacity`}></div>
          </div>
        </div>
      </div>

      <div id="games-section" className="w-full max-w-6xl text-center mt-16 mb-10">
        <h2 className="font-press-start text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-8 relative inline-block">
          <span className="relative z-[1]">
            Select Your Game
          </span>
          <span className="absolute -bottom-3 left-0 h-[6px] w-full bg-[#FF00FF]"></span>
          <span className="absolute -bottom-3 left-[4px] h-[6px] w-full bg-[#00FFFF]/70"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Link href={game.route} key={index}>
              <div
                className={`group relative p-6 border-[6px] border-black
                          shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[16px_16px_0_rgba(0,0,0,1)] 
                          hover:-translate-x-2 hover:-translate-y-2 
                          transition-all duration-200 cursor-pointer ${game.color} 
                          font-press-start uppercase tracking-wide text-sm sm:text-base`}
              >
                <div className="absolute -inset-[3px] bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                
                <div className="relative flex justify-between items-center">
                  <span>{game.name}</span>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </div>
               
                <div className="absolute top-0 left-0 w-4 h-4 bg-white/30"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white/30"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-white/30"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <div className="absolute inset-0 pointer-events-none opacity-10"
               style={{
                 backgroundSize: '100% 2px',
                 backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 2px)`
               }}></div>
               
          <div className="relative text-center p-4 max-w-[90vw] md:max-w-[720px]">            
            <div className="relative p-6 bg-[#1A1730] border-2 border-[#68ff5b] shadow-[0_0_20px_rgba(255,0,255,0.3)]">
              <h2 className="font-press-start text-2xl sm:text-3xl font-bold text-[#00ff55] mb-6">
                SECRET UNLOCKED!
              </h2>
              
              <p className="font-vt323 text-xl sm:text-2xl text-white mb-6">
                Here&apos;s a bonus game for you:
              </p>
              
              <div className="relative mb-6">
                <iframe
                  src="https://www.retrogames.cc/embed/36036-super-mario-bros.html"
                  width="640"
                  height="480"
                  className="w-full max-w-[640px] h-[300px] sm:h-[480px]"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              <button
                onClick={() => setShowEasterEgg(false)}
                className="group relative px-8 py-4 border-[4px] border-[#FF00FF] bg-[#120F1E] 
                         font-press-start text-[#FF00FF] text-base uppercase tracking-widest
                         shadow-[8px_8px_0_rgba(0,0,0,1)] 
                         hover:shadow-[12px_12px_0_rgba(0,0,0,1)]
                         transform transition-all duration-200 
                         hover:-translate-x-1 hover:-translate-y-1"
              >
                <span>Close</span>
                <span className="absolute inset-0 w-full h-full bg-[#FF00FF]/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Animated Pixel Corners */}
      <div className="fixed top-0 left-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-[#FFFF00] border-l-[#FFFF00] z-[60]"></div>
      <div className="fixed top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-[#FF00FF] border-r-[#FF00FF] z-[60]"></div>
      <div className="fixed bottom-0 left-0 w-0 h-0 border-b-[30px] border-l-[30px] border-b-[#00FFFF] border-l-[#00FFFF] z-[60]"></div>
      <div className="fixed bottom-0 right-0 w-0 h-0 border-b-[30px] border-r-[30px] border-b-[#FFFF00] border-r-[#FFFF00] z-[60]"></div>
    </main>
  );
}