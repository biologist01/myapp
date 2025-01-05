// components/Header.js
"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-pink-200 text-gray-800 sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Website Logo and Name */}
          <div className="text-3xl font-extrabold text-purple-600 tracking-wide">
            <span>Glow More</span>
            <span className="  text-pink-600 font-semibold flex items-center justify-center">With us
            <span className="mr-2 text-3xl text-red-600 flex grid-flow-row">&#10084;</span>
            </span>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/blogs" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Blogs
              </span>
            </Link>
            <Link href="/contact-us" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-pink-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12' // Close icon
                    : 'M4 6h16M4 12h16m-7 6h7' // Hamburger menu icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pt-4">
            <Link href="/" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/blogs" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Blogs
              </span>
            </Link>
            <Link href="/contact-us" passHref>
              <span className="hover:text-pink-600 transition duration-300 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
