'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  '/images/example.jpg',
  '/images/example1.jpg',
  '/images/example2.jpg',
  '/images/example3.jpg',
];

export default function AppShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScreenshot = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-indigo-900 via-blue-900 to-indigo-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Phone Mockup */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            {/* Phone Frame */}
            <div className="relative w-64 h-[500px] md:w-80 md:h-[600px]">
              {/* Phone Body */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  {/* Screen Content with Slideshow */}
                  <div className="w-full h-full relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={screenshots[currentIndex]}
                          alt={`UptoSix Phonics App Screenshot ${currentIndex + 1}`}
                          fill
                          className="object-cover object-center"
                          style={{ objectPosition: '55% 30%' }}
                          sizes="(max-width: 768px) 256px, 320px"
                          priority={currentIndex === 0}
                          unoptimized
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevScreenshot}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-30"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextScreenshot}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-30"
                aria-label="Next screenshot"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl font-semibold text-sm z-20 backdrop-blur-sm border-2 border-white/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>No Ads</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-5 py-3 rounded-full shadow-xl font-semibold text-sm z-20 backdrop-blur-sm border-2 border-white/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>100% Safe</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Learning Made Fun & Interactive
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience our apps in action. Watch your child master phonics, reading, and writing through engaging, teacher-designed activities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">50K+ Downloads</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Teacher Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

