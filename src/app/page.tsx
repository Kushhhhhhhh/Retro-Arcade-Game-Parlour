import HomeClient from "@/components/custom/HomeClient";
import Hero from "@/components/custom/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade Paradise - Relive the Glory Days of Gaming | Kush",
  description: "Experience the ultimate retro gaming paradise at Arcade Paradise made by Kush. Play classic arcade games, unlock secrets with the Konami Code, and dive into nostalgic gaming history.",
  keywords: "Arcade Paradise Kush, retro arcade games, Konami Code, classic gaming, arcade machine, 80s arcade, gaming nostalgia",
  openGraph: {
    title: "Arcade Paradise Kush - Relive the Glory Days of Gaming",
    description: "Experience the ultimate retro gaming paradise at Arcade Paradise Kush. Play classic arcade games, unlock secrets with the Konami Code, and dive into nostalgic gaming history.",
    url: "https://retro-arcade-game-parlour.vercel.app ",
    images: [
      {
        url: "https://retro-arcade-game-parlour.vercel.app/favicon.ico",
        alt: "Retro Arcade Machine",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://retro-arcade-game-parlour.vercel.app ",
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeClient />
    </main>
  );
}