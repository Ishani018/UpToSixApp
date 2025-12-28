'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image 
              src="/images/logos/uptosix-logo.png" 
              alt="UptoSix Kids Logo" 
              width={64}
              height={64}
              className="h-12 md:h-16 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/sahaj-bangla" className="hover:text-blue-600 transition-colors">
              Sahaj Bangla
            </Link>
            <a 
              href="https://www.teacherspayteachers.com/store/uptosix-kids" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Worksheets
            </a>
            <Link href="/about-us" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <a
              href="https://play.google.com/store/apps/dev?id=9044915143269037579"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Download App
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50/95 backdrop-blur-sm border-t border-gray-200">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link 
                href="/sahaj-bangla" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Sahaj Bangla
              </Link>
              <a 
                href="https://www.teacherspayteachers.com/store/uptosix-kids" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Worksheets
              </a>
              <Link 
                href="/about-us" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <a
                href="https://play.google.com/store/apps/dev?id=9044915143269037579"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-center"
                onClick={handleLinkClick}
              >
                Download App
              </a>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

