import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { pressStart } from '@/app/fonts';

export default function Footer() {
  return (
    <footer className={`w-full bg-[#131313] text-white ${pressStart.className} py-12 px-6 sm:px-20 mt-16 border-t-[6px] border-[#ffe8ff] relative`}>
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] blur-md"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <h3 className="font-press-start text-3xl md:text-4xl text-[#FFD700] tracking-wider">
            Arcade Paradise
          </h3>
          <p className="mt-2 text-gray-300 font-vt323 text-lg italic">
            Where Pixels Meet Nostalgia 🕹️
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-[#FF6F61]">
            Quick Links
          </h4>
          <Link
            href="/"
            className="text-gray-300 hover:text-[#FF5733] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-[#FF5733] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-[#FF5733] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-[#33FF57] font-press-start">
            Follow Us
          </h4>
          <div className="flex gap-6 mt-4">
            {[
              { href: "https://x.com/KushSha06747704?mx=2", icon: FaTwitter, color: "#1DA1F2" },
              { href: "https://instagram.com/kushhhhhhh._", icon: FaInstagram, color: "#E1306C" },
              { href: "https://linkedin.com/in/kushsharma738", icon: FaLinkedin, color: "#0077B5" },
              { href: "https://github.com/Kushhhhhhhh", icon: FaGithub, color: "#6E549" },
            ].map(({ href, icon: Icon, color }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition-transform"
                style={{ color }}
              >
                <Icon size={28} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-4 border-t-[3px] border-[#FFC300] text-center text-gray-500 font-vt323 text-sm">
        &copy; {new Date().getFullYear()} Arcade Paradise. All Rights Reserved.
      </div>
    </footer>
  );
}