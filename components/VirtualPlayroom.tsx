'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const appIcons = [
  { src: '/images/app-phonics.jpeg', name: 'Phonics' },
  { src: '/images/app-phonics-plus.jpeg', name: 'Phonics PLUS' },
  { src: '/images/app-letter-formation.jpeg', name: 'Letter Formation' },
  { src: '/images/app-spell-board.jpeg', name: 'Spell Board' },
];

const screenshots = [
  '/images/example.jpg',
  '/images/example1.jpg',
  '/images/example2.jpg',
  '/images/example3.jpg',
];

export default function VirtualPlayroom() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Try It Out!
            </h2>
            <p className="text-lg text-gray-600">
              Tap the iPad to explore our apps
            </p>
          </div>

          <div className="flex justify-center items-center min-h-96">
            <motion.div
              className="relative cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              animate={{
                rotateY: mousePosition.x * 5,
                rotateX: -mousePosition.y * 5,
                y: Math.sin(Date.now() / 2000) * 10,
              }}
              transition={{
                rotateY: { type: 'spring', stiffness: 100, damping: 30 },
                rotateX: { type: 'spring', stiffness: 100, damping: 30 },
                y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* iPad Frame */}
              <div className="relative w-80 md:w-96 h-56 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                {/* Screen Bezel */}
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4 flex flex-col">
                    {/* Home Screen Grid */}
                    <div className="grid grid-cols-4 gap-3 flex-1 items-center justify-center">
                      {appIcons.map((app, index) => (
                        <motion.div
                          key={app.name}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                            <Image
                              src={app.src}
                              alt={app.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                          <span className="text-xs text-white mt-1 font-medium text-center leading-tight">
                            {app.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tap to Play Badge */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 text-purple-600" fill="currentColor" />
                    <span className="text-sm font-bold text-gray-900">Tap to Play</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Glassmorphism Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl p-4 md:p-8 shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Carousel */}
              <div className="relative">
                <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-black/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScreenshot}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={screenshots[currentScreenshot]}
                        alt={`Screenshot ${currentScreenshot + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevScreenshot();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextScreenshot();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentScreenshot(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentScreenshot
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

