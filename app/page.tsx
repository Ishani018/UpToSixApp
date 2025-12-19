'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        {/* Moving Blob Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue Blob - Hero gradient */}
          <motion.div
            className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 200, 0, -160, 0],
              y: [0, 100, 0, -120, 0],
              scale: [1, 1.2, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: '10%', left: '10%' }}
          />
          {/* Purple Blob - App Cards */}
          <motion.div
            className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -160, 0, 200, 0],
              y: [0, 200, 0, -100, 0],
              scale: [1, 0.8, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ top: '50%', right: '10%' }}
          />
          {/* Orange Blob - Stats/Unicef section */}
          <motion.div
            className="absolute w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 120, 0, -200, 0],
              y: [0, -160, 0, 180, 0],
              scale: [1, 1.2, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ bottom: '10%', left: '30%' }}
          />
          {/* Green Blob - Solution section */}
          <motion.div
            className="absolute w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -180, 0, 140, 0],
              y: [0, 150, 0, -140, 0],
              scale: [1, 0.8, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{ top: '30%', left: '50%' }}
          />
        </div>
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
      </section>

      {/* Try Apps FREE Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Try the UptoSix Apps FREE!
          </h2>
          <div className="flex flex-wrap justify-center items-start gap-10 md:gap-16">
            {/* App 1: UptoSix Phonics */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.phonics_01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer">
                <Image 
                  src="/images/app-phonics.jpeg" 
                  alt="UptoSix Phonics App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Phonics</p>
            </a>

            {/* App 2: UptoSix Phonics PLUS */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.phonicsplus&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer">
                <Image 
                  src="/images/app-phonics-plus.jpeg" 
                  alt="UptoSix Phonics PLUS App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Phonics PLUS</p>
            </a>

            {/* App 3: UptoSix Letter Formation */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.letterformation&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer">
                <Image 
                  src="/images/app-letter-formation.jpeg" 
                  alt="UptoSix Letter Formation App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Letter Formation</p>
            </a>

            {/* App 4: UptoSix Spell Board */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.uptosix.spellandwrite&hl=en_IN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer">
                <Image 
                  src="/images/app-spell-board.jpeg" 
                  alt="UptoSix Spell Board App Icon" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 font-medium text-base md:text-lg text-center">UptoSix Spell Board</p>
            </a>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <AppShowcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* View All Apps Button */}
      <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="https://play.google.com/store/apps/dev?id=9044915143269037579&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All UptoSix Apps on Google Play
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* About Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                Our vision is to reach every child in the world's most remote areas using technology and high-quality education apps for kids. <span className="font-semibold">No kid is left behind.</span>
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                With our high-quality educational apps created by experienced teachers, we make learning <span className="font-semibold">simple and affordable.</span>
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
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
