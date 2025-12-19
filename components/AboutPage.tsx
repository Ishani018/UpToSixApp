'use client';

import { useState } from 'react';
import { Menu, X, Search, Facebook, Youtube, Instagram } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- HEADER --- */}
      <header className="border-b shadow-sm sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="https://uptosix.co.in/wp-content/uploads/2022/04/UptoSix-Logo-Swan.png" 
              alt="UptoSix Kids Logo" 
              width={64}
              height={64}
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-600">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/sahaj-bangla" className="hover:text-blue-600 transition">Sahaj Bangla</a>
            <a href="/worksheets" className="hover:text-blue-600 transition">Worksheets</a>
            <button className="text-gray-500 hover:text-blue-600">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50 border-t">
            <div className="flex flex-col p-4 space-y-4">
              <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
              <a href="/sahaj-bangla" className="block text-gray-700 hover:text-blue-600">Sahaj Bangla</a>
              <a href="/worksheets" className="block text-gray-700 hover:text-blue-600">Worksheets</a>
            </div>
          </nav>
        )}
      </header>

      {/* --- HERO TITLE --- */}
      <section className="bg-blue-50 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide">About Us</h1>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-4 py-12 max-w-4xl space-y-12 text-lg leading-relaxed text-gray-700">
        
        {/* Intro Stats */}
        <section className="space-y-6">
          <p className="font-semibold text-xl text-gray-900">
            <a href="https://www.unicef.org/learning-crisis" className="text-blue-600 hover:underline">Unicef</a> reports that nearly two-thirds of 10-year-olds are unable to read and comprehend a simple text.
          </p>
          <p>
            Over 600 million children and adolescents worldwide cannot attain minimum proficiency levels in reading and mathematics, even though two-thirds of them are in school.
          </p>
          <p>
            Learning any subject—whether math, science, art, or history—becomes difficult for a child who struggles to read and spell. Reading and writing difficulties hinder academic progress and lead to a lack of confidence.
          </p>
          <p>
            Synthetic phonics is an effective method of teaching young children to read and spell. We have seen how quickly children learn using this method. The ability to read and write independently instills confidence in children.
          </p>
          <p className="border-l-4 border-blue-500 pl-4 italic bg-gray-50 py-2">
            At UptoSix Kids, we are a group of experienced teachers and software professionals attempting to develop educational apps for children which focus on building a strong foundation in math and language skills.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* Vision */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-xl font-light">
            Our vision is to reach every child in the world's most remote areas using technology and high-quality education apps for kids. <span className="font-semibold">No kid is left behind.</span>
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* Mission */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-xl font-light">
            With our high-quality educational apps created by experienced teachers, we make learning simple and affordable.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* Philosophy */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
          <p className="text-xl font-light">
            No child should struggle with primary language and math skills. We help children establish a solid foundation to have a smooth lifelong learning journey.
          </p>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Important Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Important Links</h5>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
              <li><a href="/refund" className="hover:text-blue-400 transition">Refund Policy</a></li>
            </ul>
          </div>

          {/* Empty Col for Spacing (Matches original layout) */}
          <div className="hidden md:block"></div>

          {/* Support */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Support</h5>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-blue-400">✉</span> dev@uptosix.co.in
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-blue-400">📍</span> Whitefield, Bangalore
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition"><Youtube size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-pink-600 transition"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500">
          Copyright @2025 | UptoSix Kids Private Limited | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

