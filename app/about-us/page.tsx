'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

// Colorful Phonics Component
const PhonicsText = () => {
  const letters = [
    { letter: 'P', color: '#9C3295' }, // Purple
    { letter: 'h', color: '#2355A5' }, // Dark Blue
    { letter: 'o', color: '#2EA8E0' }, // Sky Blue
    { letter: 'n', color: '#00AC8E' }, // Teal
    { letter: 'i', color: '#FDB813' }, // Golden Yellow
    { letter: 'c', color: '#F47920' }, // Orange
    { letter: 's', color: '#EA1D76' }, // Pink
  ];

  return (
    <span style={{ fontWeight: 'bold' }}>
      {letters.map((item, index) => (
        <span key={index} style={{ color: item.color }}>
          {item.letter}
        </span>
      ))}
    </span>
  );
};

export default function AboutUsPage() {
  const collageRef = useRef(null);
  const collageInView = useInView(collageRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-white pt-16">
      <AnimatedBackground />

      {/* Collage Hero Section */}
      <section ref={collageRef} className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-96">
            {/* Left: Bold Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={collageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 group">
                <span>
                  Discover the power of{' '}
                </span>
                <span className="inline-block transition-all duration-300 hover:[text-shadow:0_0_20px_rgba(253,184,19,0.6),0_0_40px_rgba(253,184,19,0.4),0_0_60px_rgba(251,191,36,0.3)]">
                  <PhonicsText />
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We're a passionate team of educators and technologists creating joyful learning experiences for children everywhere.
              </p>
            </motion.div>

            {/* Right: GIF */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={collageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="w-full"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/about-hero.gif"
                  alt="UptoSix Kids animation"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
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
            {[
              {
                id: 'phonics',
                href: 'https://play.google.com/store/apps/details?id=com.uptosix.phonics_01',
                imageSrc: '/images/app-icons/app-phonics.jpeg',
                title: 'UptoSix Phonics',
                borderColor: 'border-blue-500',
                hoverRotate: 2,
              },
              {
                id: 'phonics-plus',
                href: 'https://play.google.com/store/apps/details?id=com.uptosix.phonicsplus&hl=en_IN',
                imageSrc: '/images/app-icons/app-phonics-plus.jpeg',
                title: 'UptoSix Phonics PLUS',
                borderColor: 'border-purple-500',
                hoverRotate: -1.5,
              },
              {
                id: 'letter-formation',
                href: 'https://play.google.com/store/apps/details?id=com.uptosix.letterformation&hl=en_IN',
                imageSrc: '/images/app-icons/app-letter-formation.jpeg',
                title: 'UptoSix Letter Formation',
                borderColor: 'border-green-500',
                hoverRotate: 1.8,
              },
              {
                id: 'spell-board',
                href: 'https://play.google.com/store/apps/details?id=com.uptosix.spellandwrite&hl=en_IN',
                imageSrc: '/images/app-icons/app-spell-board.jpeg',
                title: 'UptoSix Spell Board',
                borderColor: 'border-orange-500',
                hoverRotate: -2,
              },
            ].map((app) => (
              <motion.a 
                key={app.id}
                href={app.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: app.hoverRotate }}
                className="flex flex-col items-center"
              >
                <div className={`w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer border-b-4 ${app.borderColor}`}>
                  <Image 
                    src={app.imageSrc} 
                    alt={`${app.title} App Icon`} 
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <p className="text-gray-700 font-medium text-base md:text-lg text-center">{app.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
