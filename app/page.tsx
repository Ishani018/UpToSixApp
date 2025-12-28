'use client';

import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react'; 
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import VideoGallery from '@/components/VideoGallery';
import IPadShowcase from '@/components/IPadShowcase';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

const APPS_DATA = [
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
];

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
    icon: '/images/app-icons/app-phonics.jpeg',
    screenshots: [
      '/images/screenshots/ipad/phonics-ipad-1.PNG',
      '/images/screenshots/ipad/phonics-ipad-2.PNG',
      '/images/screenshots/ipad/phonics-ipad-3.PNG',
      '/images/screenshots/ipad/phonics-ipad-4.PNG',
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
    icon: '/images/app-icons/app-phonics-plus.jpeg',
    screenshots: [
      '/images/screenshots/ipad/phonics-plus-ipad-1.PNG',
      '/images/screenshots/ipad/phonics-plus-ipad-2.PNG',
      '/images/screenshots/ipad/phonics-plus-ipad-3.PNG',
      '/images/screenshots/ipad/phonics-plus-ipad-4.PNG',
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
    icon: '/images/app-icons/app-letter-formation.jpeg',
    screenshots: [
      '/images/screenshots/ipad/letter-formation-ipad-1.PNG',
      '/images/screenshots/ipad/letter-formation-ipad-2.PNG',
      '/images/screenshots/ipad/letter-formation-ipad-3.PNG',
      '/images/screenshots/ipad/letter-formation-ipad-4.PNG',
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
    icon: '/images/app-icons/app-spell-board.jpeg',
    screenshots: [
      '/images/screenshots/ipad/spell-board-ipad-1.PNG',
      '/images/screenshots/ipad/spell-board-ipad-2.PNG',
      '/images/screenshots/ipad/spell-board-ipad-3.jpeg',
      '/images/screenshots/ipad/spell-board-ipad-4.jpeg',
    ]
  },
];

export default function Home() {
  const appsRef = useRef(null);
  const appsInView = useInView(appsRef, { once: true, margin: '-100px' });
  const [selectedApp, setSelectedApp] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/logos/app_store.png" 
                  alt="Download on App Store" 
                  width={200}
                  height={66}
                  className="h-16 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.uptosix.phonics_01" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/logos/google_play.png" 
                  alt="Get it on Google Play" 
                  width={200}
                  height={66}
                  className="h-16 w-auto"
                />
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
                initial={isMobile ? {} : { x: selectedApp % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={isMobile ? {} : { x: 0, opacity: 1 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
                className="relative z-10 shrink-0"
                style={isMobile ? { opacity: 1, x: 0 } : {}}
              >
                {/* iPad Frame - Landscape Orientation */}
                <div className="relative w-[500px] h-[333px] sm:w-[550px] sm:h-[367px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] mx-auto">
                  {/* iPad Body */}
                  <div className="absolute inset-0 bg-gray-800 rounded-4xl p-4 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
                      {/* Screen Content with Slideshow */}
                      <div className="w-full h-full relative">
                        {isMobile ? (
                          <Image 
                            src={currentScreenshots[currentScreenshot]}
                            alt={`${selectedAppData.name} Screenshot ${currentScreenshot + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 600px, 700px"
                            priority={currentScreenshot === 0}
                          />
                        ) : (
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
                              />
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  {currentScreenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevScreenshot}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-30 ${isMobile ? '' : 'hover:scale-110 transition-transform'}`}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={28} />
                      </button>
                      <button
                        onClick={nextScreenshot}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-30 ${isMobile ? '' : 'hover:scale-110 transition-transform'}`}
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

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you! Reach out to us through any of these channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 max-w-4xl mx-auto">
            {/* Email */}
            <motion.a
              href="mailto:Dev@uptosix.co.in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Send us an email</p>
              <p className="text-blue-600 font-semibold">Dev@uptosix.co.in</p>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+918660087285"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 transition-colors">
                <Phone className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Reach us on phone</p>
              <p className="text-pink-600 font-semibold">+91 8660087285</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
