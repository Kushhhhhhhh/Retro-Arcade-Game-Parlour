"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { pressStart } from "@/app/fonts";

export default function Hero() {
  const iconPositions = [
    { top: '10%', left: '10%' },
    { top: '10%', left: '85%' },
    { top: '30%', left: '20%' },
    { top: '35%', left: '80%' },
    { top: '65%', left: '15%' },
    { top: '75%', left: '65%' },
    { top: '85%', left: '80%' },
    { top: '90%', left: '30%' },
  ];

  const welcomeText = "WELCOME TO THE\nARCADE PARADISE";

  return (
    <section className="relative h-[60vh] md:h-[90vh] text-white flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen blur-xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen blur-xl opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Arcade Machine Frame */}
      <div className="relative z-20 w-full max-w-4xl aspect-video p-6 md:p-10">
        <div className="absolute inset-0 border-8 from-purple-500 via-pink-500 to-blue-400 bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] bg-gradient-to-br">
          
          {/* CRT Screen with Glitch & Scanline */}
          <div className="absolute inset-8 bg-black overflow-hidden group">
            {/* CRT Glitch Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none glitch-overlay"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  to bottom,
                  rgba(255,0,255,0.05) 0px,
                  rgba(255,0,255,0.05) 1px,
                  transparent 1px,
                  transparent 2px
                )`,
                animation: 'scanlines 2s infinite linear, glitch 4s infinite',
              }}
            />

            {/* Interactive Glitch on Hover */}
            <div className="absolute inset-0 z-10 pointer-events-none glitch-hover hidden group-hover:block"
              style={{
                animation: 'glitchHover 0.5s ease-in-out infinite alternate'
              }}
            ></div>

            {/* Scanlines Overlay */}
            <div className="absolute inset-0 opacity-30 z-20 scanlines"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.1) 0px,
                  rgba(0,0,0,0.1) 2px,
                  transparent 2px,
                  transparent 4px
                )`,
              }}
            />

            {/* Animated Heading */}
            <motion.h1
              className={`${pressStart.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 text-center whitespace-pre sm:text-xl md:text-3xl lg:text-5xl z-30`}
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  textShadow: "0 0 2px #fff, 0 0 5px #000, 0 0 5px #fff",
                }
              }}
              aria-label="Welcome to the Arcade Paradise"
            >
              {welcomeText.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 20,
                      textShadow: "0 0 0 transparent"
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      textShadow: "0 0 2px #fff, 0 0 5px #000, 0 0 5px #fff",
                    },
                  }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 260,
                    damping: 18,
                    delay: i * 0.05 
                  }}
                >
                  {char === '\n' ? <br /> : char}
                </motion.span>
              ))}
              
            </motion.h1>
          </div>

          {/* Control Panel Buttons */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="w-4 md:w-8 h-4 md:h-8 rounded-full" style={{
              backgroundColor: '#ef4444',
              boxShadow: '0 0 8px #ef4444, 0 0 16px #ef4444',
            }}></div>
            <div className="w-4 md:w-8 h-4 md:h-8 rounded-full" style={{
              backgroundColor: '#22c55e',
              boxShadow: '0 0 8px #22c55e, 0 0 16px #22c55e',
            }}></div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 whitespace-nowrap overflow-hidden"
      >
        <motion.div
          className="inline-block"
          animate={{
            x: ['-100%', '0%'],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span className={`${pressStart.className} text-pink-400 text-base sm:text-lg md:text-xl lg:text-3xl`}>
            {" • INSERT COIN TO START • POWER UP FOR EXTRA LIVES • HIGH SCORES LOADED • JABBA THE HUTT APPROVES THIS GAME • CAUTION: MAY CAUSE ADDICTION • PRESS START TO ENTER THE PARADISE • NO CONTINUOUS PLAY WITHOUT COINS • BUILT WITH PIXEL LOVE • GET READY TO LEVEL UP • DO NOT FEED AFTER MIDNIGHT • DANGER: RETRO OVERLOAD • YOU HAVE 3 LIVES • BEWARE OF GLITCHY DRAGONS • POWERED BY NOSTALGIA • TILT DETECTED • GAME ON, GAMER • UNTIL WARRIORS NEED COINS • EAT SLEEP GAME REPEAT • ARCADE MODE ACTIVATED • WARNING: FLASHING LIGHTS"}
          </span>
          <span className={`${pressStart.className} text-pink-400 text-base sm:text-lg md:text-xl lg:text-3xl`}>
            {" • INSERT COIN TO START • POWER UP FOR EXTRA LIVES • HIGH SCORES LOADED • JABBA THE HUTT APPROVES THIS GAME • CAUTION: MAY CAUSE ADDICTION • PRESS START TO ENTER THE PARADISE • NO CONTINUOUS PLAY WITHOUT COINS • BUILT WITH PIXEL LOVE • GET READY TO LEVEL UP • DO NOT FEED AFTER MIDNIGHT • DANGER: RETRO OVERLOAD • YOU HAVE 3 LIVES • BEWARE OF GLITCHY DRAGONS • POWERED BY NOSTALGIA • TILT DETECTED • GAME ON, GAMER • UNTIL WARRIORS NEED COINS • EAT SLEEP GAME REPEAT • ARCADE MODE ACTIVATED • WARNING: FLASHING LIGHTS"}
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Game Icons */}
      {iconPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute z-20"
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.4,
          }}
        >
          <img
            src={`/icon-${i + 1}.png`}
            alt={`icon ${i + 1}`}
            className="object-contain w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32"
            style={{
              filter: `drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))`,
            }}
          />
        </motion.div>
      ))}

      {/* CRT Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.1) 60%)`,
          backgroundSize: '100% 4px',
        }}
      />
    </section>
  );
}