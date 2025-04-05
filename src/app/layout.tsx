import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcade Paradise",
  description: "Relive the Glory Days of Gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >

        <div className="fixed inset-0 z-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-10 pointer-events-none">
          {Array.from({ length: 64 }).map((_, idx) => (
            <div key={idx} className="bg-white/5 border border-gray-800" />
          ))}
        </div>

        <div className="fixed top-10 left-10 z-0 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" />
        <div className="fixed bottom-10 right-10 z-0 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
