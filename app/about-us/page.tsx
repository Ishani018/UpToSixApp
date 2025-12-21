'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Schoolbell } from 'next/font/google';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin'],
});

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
    <span className={schoolbell.className} style={{ fontWeight: 'bold' }}>
      {letters.map((item, index) => (
        <span key={index} style={{ color: item.color }}>
          {item.letter}
        </span>
      ))}
    </span>
  );
};

const appsData = [
  {
    id: 1,
    name: 'UptoSix Phonics',
    subtitle: 'Ages 3–5',
    description: "Build a strong reading foundation with the proven synthetic phonics approach. Perfect for children aged 3 to 5, this app makes learning to read simple and effective. Unlike other apps, we focus on systematic, step-by-step lessons without distractions.",
    features: [
      "What they learn: 24 letter sounds, proper formation, blending, and segmenting.",
      "Why it works: 100% interactive, designed by teachers, and completely ad-free.",
      "The Result: Your child will gain the confidence to read and spell independently."
    ],
    icon: '/images/app-phonics.jpeg',
    screenshots: [
      '/images/phonics-ipad-1.png',
      '/images/phonics-ipad-2.png',
      '/images/phonics-ipad-3.png',
      '/images/phonics-ipad-4.png',
    ]
  },
  {
    id: 2,
    name: 'UptoSix Phonics PLUS',
    subtitle: 'Ages 5+',
    description: "Take reading fluency to the next level. Designed for children aged 5+ or those needing extra support, this app bridges the gap between basic phonics and advanced reading.",
    features: [
      "Advanced Skills: Master digraphs, consonant blends, magic 'e', and tricky words.",
      "Huge Library: Access thousands of words and engaging stories for endless practice.",
      "Fluency Focus: Comprehensive blending and segmenting tools to turn readers into fluent speakers."
    ],
    icon: '/images/app-phonics-plus.jpeg',
    screenshots: [
      '/images/phonics-plus-ipad-1.png',
      '/images/phonics-plus-ipad-2.png',
      '/images/phonics-plus-ipad-3.png',
      '/images/phonics-plus-ipad-4.png',
    ]
  },
  {
    id: 3,
    name: 'UptoSix Letter Formation',
    subtitle: '',
    description: "Master handwriting without the crutch of auto-correction. We believe in genuine progress. This app teaches kids how to write letters and numbers correctly using step-by-step animations, not just tracing.",
    features: [
      "Unique Method: Uses fun \"Chicken, Giraffe, and Monkey\" groupings to make formation memorable.",
      "True Learning: No auto-correct means kids develop actual muscle memory and fine motor skills.",
      "Features: Includes 60 pre-writing practice pages and a freehand drawing canvas."
    ],
    icon: '/images/app-letter-formation.jpeg',
    screenshots: [
      '/images/letter-formation-ipad-1.png',
      '/images/letter-formation-ipad-2.png',
      '/images/letter-formation-ipad-3.png',
      '/images/letter-formation-ipad-4.png',
    ]
  },
  {
    id: 4,
    name: 'UptoSix Spell Board',
    subtitle: '',
    description: "Boost spelling confidence through phonics-based play. Turn spelling drills into an interactive experience. This app moves beyond memorization by helping kids understand the sounds inside words.",
    features: [
      "Customizable: Adjustable difficulty levels suitable for beginners to advanced spellers.",
      "Skill Building: Features dictation activities, phonics games, and progress tracking.",
      "Safe Environment: A completely ad-free space focused on uninterrupted learning."
    ],
    icon: '/images/app-spell-board.jpeg',
    screenshots: [
      '/images/spell-board-ipad-1.PNG',
      '/images/spell-board-ipad-2.PNG',
      '/images/spell-board-ipad-3.jpeg',
      '/images/spell-board-ipad-4.jpeg',
    ]
  },
];

export default function AboutUsPage() {
  const collageRef = useRef(null);
  const appsRef = useRef(null);

  const collageInView = useInView(collageRef, { once: true, margin: '-100px' });
  const appsInView = useInView(appsRef, { once: true, margin: '-100px' });

  const [selectedApp, setSelectedApp] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const selectedAppData = appsData[selectedApp];
  const currentScreenshots = selectedAppData?.screenshots || [];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % currentScreenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + currentScreenshots.length) % currentScreenshots.length);
  };

  const handleAppChange = (index: number) => {
    setSelectedApp(index);
    setCurrentScreenshot(0);
  };

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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Discover the power of <PhonicsText />
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
                  src="/images/about-hero.gif"
                  alt="UptoSix Kids animation"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Apps Section */}
      <section ref={appsRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={appsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Apps
            </h2>
            <p className="text-lg text-gray-600">
              Explore our collection of educational apps designed for children
            </p>
          </motion.div>

          {/* App Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
            {appsData.map((app, index) => (
              <button
                key={app.id}
                onClick={() => handleAppChange(index)}
                className={`flex items-center gap-3 px-4 md:px-6 py-3 rounded-2xl transition-all min-w-[140px] justify-center relative ${
                  selectedApp === index
                    ? 'bg-gray-200 text-gray-900 border-b-4 border-gray-900 shadow-inner scale-[0.98]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105 hover:-translate-y-0.5'
                }`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-sm md:text-base whitespace-nowrap">{app.name}</span>
              </button>
            ))}
          </div>

          {/* App Content - Alternating Layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedApp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col ${selectedApp % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-12 md:gap-16`}
            >
              {/* iPad Mockup */}
              <motion.div
                initial={{ x: selectedApp % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 shrink-0"
              >
                {/* iPad Frame - Landscape Orientation */}
                <div className="relative w-[600px] h-[400px] md:w-[700px] md:h-[500px]">
                  {/* iPad Body */}
                  <div className="absolute inset-0 bg-gray-800 rounded-4xl p-4 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
                      {/* Screen Content with Slideshow */}
                      <div className="w-full h-full relative">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentScreenshot}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <Image 
                              src={currentScreenshots[currentScreenshot]}
                              alt={`${selectedAppData.name} Screenshot ${currentScreenshot + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 600px, 700px"
                              priority={currentScreenshot === 0}
                              unoptimized
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  {currentScreenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevScreenshot}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-30"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={28} />
                      </button>
                      <button
                        onClick={nextScreenshot}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-30"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={28} />
                      </button>
                      
                      {/* Dot Indicators */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {currentScreenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentScreenshot(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentScreenshot 
                                ? 'bg-white w-6' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to screenshot ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ x: selectedApp % 2 === 0 ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center md:text-left text-gray-900 max-w-xl"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {selectedAppData.name}
                </h3>
                {selectedAppData.subtitle && (
                  <p className="text-lg text-gray-500 mb-4 font-medium">
                    {selectedAppData.subtitle}
                  </p>
                )}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedAppData.description}
                </p>
                {selectedAppData.features && (
                  <ul className="space-y-3 text-left">
                    {selectedAppData.features.map((feature, index) => (
                      <li key={index} className="text-base text-gray-600 leading-relaxed flex items-start">
                        <span className="text-purple-600 mr-2 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
