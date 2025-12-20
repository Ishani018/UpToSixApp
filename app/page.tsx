'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import VideoGallery from '@/components/VideoGallery';
import IPadShowcase from '@/components/IPadShowcase';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Top Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 Q240,80 480,40 T960,40 T1440,40 L1440,0 L0,0 Z"
            className="fill-transparent"
          />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center py-20 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Interactive Self-Learning<br />
              Phonics Apps for Kids
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Master reading and spelling with the synthetic phonics approach.<br />
              Made by teachers, trusted by parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://apps.apple.com/in/app/uptosix-phonics/id1617850099" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
        <Image
                  src="/images/apple-logo.jpg" 
                  alt="Apple Logo" 
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.uptosix.phonics_01" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 Q240,40 480,80 T960,80 T1440,80 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </section>

      {/* Try Apps FREE Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        {/* Top Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 Q240,80 480,40 T960,40 T1440,40 L1440,0 L0,0 Z"
            className="fill-white"
          />
        </svg>
        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 Q240,40 480,80 T960,80 T1440,80 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Try the UptoSix Apps FREE!
          </h2>
          <div className="flex flex-wrap justify-center items-start gap-10 md:gap-16">
            {/* App 1: UptoSix Phonics */}
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.phonics_01" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex flex-col items-center"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer border-b-4 border-blue-500">
                <Image 
                  src="/images/app-phonics.jpeg" 
                  alt="UptoSix Phonics App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Phonics</p>
            </motion.a>

            {/* App 2: UptoSix Phonics PLUS */}
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.phonicsplus&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: -1.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer border-b-4 border-purple-500">
                <Image 
                  src="/images/app-phonics-plus.jpeg" 
                  alt="UptoSix Phonics PLUS App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Phonics PLUS</p>
            </motion.a>

            {/* App 3: UptoSix Letter Formation */}
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.letterformation&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 1.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer border-b-4 border-green-500">
                <Image 
                  src="/images/app-letter-formation.jpeg" 
                  alt="UptoSix Letter Formation App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Letter Formation</p>
            </motion.a>

            {/* App 4: UptoSix Spell Board */}
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.spellandwrite&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex flex-col items-center"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer border-b-4 border-orange-500">
                <Image 
                  src="/images/app-spell-board.jpeg" 
                  alt="UptoSix Spell Board App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Spell Board</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* App Showcase Section */}
      <AppShowcase />

      {/* iPad Showcase Section */}
      <IPadShowcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* About Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About UptoSix Kids</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              At <span className="font-bold text-blue-600">UptoSix Kids</span>, we are a group of experienced teachers and software professionals attempting to develop educational apps for children, which focus on building a strong foundation in math and language skills.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-purple-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                Our vision is to reach every child in the world's most remote areas using technology and high-quality education apps for kids. <span className="font-semibold">No kid is left behind.</span>
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-blue-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                With our high-quality educational apps created by experienced teachers, we make learning <span className="font-semibold">simple and affordable.</span>
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="bg-green-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
              <p className="text-white/90 leading-relaxed">
                No child should struggle with primary language and math skills. We're helping children establish a solid foundation in language and math skills to have a <span className="font-semibold">smooth lifelong learning journey.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">Have questions? We'd love to hear from you!</p>
          <a href="mailto:contact@uptosix.com" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
