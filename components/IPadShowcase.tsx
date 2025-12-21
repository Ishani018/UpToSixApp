'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const screenshots = [
  '/images/ipad-example1.PNG',
  '/images/ipad-example2.PNG',
  '/images/ipad-example3.PNG',
  '/images/ipad-example4.PNG',
  '/images/ipad-example5.PNG',
  '/images/ipad-example6.PNG',
  '/images/ipad-example7.PNG',
  '/images/ipad-example8.PNG',
  '/images/ipad-example9.PNG',
  '/images/ipad-example10.PNG',
];

export default function IPadShowcase() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 relative overflow-hidden">
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
          className="fill-blue-50"
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-12 md:gap-16">
          {/* Text Content */}
          <div className="text-center md:text-left text-gray-900 max-w-xl order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for Tablets & iPads
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Experience our apps on a larger screen. The tablet-optimized interface makes learning even more engaging and interactive for your child.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <span className="font-semibold text-gray-800">Optimized for iPad</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <span className="font-semibold text-gray-800">Larger Screen Experience</span>
              </div>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
                <Play className="w-4 h-4" fill="currentColor" />
                <span className="font-semibold">Click on the iPad to try</span>
              </div>
            </div>
          </div>

          {/* iPad Mockup */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 order-1 md:order-2 ml-6 md:ml-10"
          >
            {/* iPad Frame - Landscape Orientation */}
            <div className="relative w-[750px] h-[500px] md:w-[850px] md:h-[600px]">
              {/* iPad Body - Clickable Link */}
              <Link 
                href="/virtual-playroom"
                className="block absolute inset-0 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gray-800 rounded-4xl p-4 shadow-2xl group-hover:shadow-3xl transition-shadow">
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
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
                            alt={`UptoSix App Screenshot ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 500px, 600px"
                            priority={currentIndex === 0}
                            unoptimized
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  prevScreenshot();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-30"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  nextScreenshot();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-30"
                aria-label="Next screenshot"
              >
                <ChevronRight size={28} />
              </button>
              
              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-gray-800 w-6' 
                        : 'bg-gray-800/50 hover:bg-gray-800/75'
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

