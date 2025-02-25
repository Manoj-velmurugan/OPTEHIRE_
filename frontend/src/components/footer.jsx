import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4">
      {/* Top Row: Logo and Links */}
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            F
          </span> */}
          <span className="text-3xl text-black font-bold">OpteHire</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="/about" className="hover:text-white text-black transition-colors duration-200 font-semibold">
            About
          </a>
          <a href="/privacy-policy" className="hover:text-white text-black transition-colors duration-200 font-semibold">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:text-white text-black transition-colors duration-200 font-semibold">
            Licensing
          </a>
          <a href="/contact" className="hover:text-white text-black transition-colors duration-200 font-semibold">
            Contact
          </a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-black">
        © 2023 OpteHire™. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;