import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 sm:px-20 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
      
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">Arcade Paradise</h3>
          <p className="text-gray-400 text-sm">
            Where Pixels Meet Nostalgia 🕹️
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h4 className="text-xl font-bold uppercase tracking-wider mb-2">Quick Links</h4>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold uppercase tracking-wider mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={24} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </Link>
          
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </Link>
           
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Arcade Paradise. All rights reserved.
      </div>
    </footer>
  );
}