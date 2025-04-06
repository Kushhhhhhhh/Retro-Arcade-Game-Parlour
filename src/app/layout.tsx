import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcade Paradise",
  description: "Relive the Glory Days of Gaming with our retro arcade collection.",
  keywords: [
    "arcade games",
    "retro gaming",
    "classic video games",
    "Arcade Paradise",
    "online arcade",
    "nostalgia games",
  ],
  authors: [{ name: "Kush Sharma", url: "https://kush-sharma.vercel.app" }],
  metadataBase: new URL("https://retro-arcade-game-parlour.vercel.app"),
  openGraph: {
    title: "Arcade Paradise",
    description: "Relive the Glory Days of Gaming with our retro arcade collection.",
    url: "https://yourwebsite.com",
    siteName: "Arcade Paradise",
    images: [
      {
        url: "https://retro-arcade-game-parlour.vercel.app/arcade-image.gif",
        width: 1200,
        height: 630,
        alt: "Arcade Paradise Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcade Paradise",
    description: "Relive the Glory Days of Gaming with our retro arcade collection.",
    creator: "@KushSha06747704",
    images: ["https://retro-arcade-game-parlour.vercel.app/arcade-image.gif"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <Header />

        <div className="fixed inset-0 z-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-10 pointer-events-none">
          {Array.from({ length: 64 }).map((_, idx) => (
            <div key={idx} className="bg-white/5 border border-gray-950" />
          ))}
        </div>

        <div className="hidden md:block fixed top-0 left-0 z-0 w-32 h-auto pointer-events-none">
          <Image
            src="/prop-1.png"
            alt="Prop 1"
            width={200}
            height={200}
            priority
            className="w-full h-auto mt-20"
          />
        </div>

        <div className="hidden md:block fixed top-0 right-0 z-0 w-32 h-auto pointer-events-none">
          <Image
            src="/prop-2.png"
            alt="Prop 2"
            width={200}
            height={200}
            priority
            className="w-full h-auto mt-20"
          />
        </div>

        <div className="hidden sm:block fixed top-10 left-10 z-0 w-28 h-28 bg-red-700 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" />
        <div className="hidden sm:block fixed bottom-10 right-10 z-0 w-28 h-28 bg-blue-700 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" />
        <div className="hidden sm:block fixed top-10 right-10 z-0 w-28 h-28 bg-pink-700 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" />
        <div className="hidden sm:block fixed bottom-10 left-10 z-0 w-28 h-28 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" />

        <main className="relative z-10 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}