"use client"; 

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ModeToggle } from './toogle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=" font-georgia text-2xl">Theo Deannata</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
          <ModeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#home" className="block py-2 hover:text-gray-400">
            Home
          </a>
          <a href="#projects" className="block py-2 hover:text-gray-400">
            Projects
          </a>
          <a href="#about" className="block py-2 hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="block py-2 hover:text-gray-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
