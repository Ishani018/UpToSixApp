'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Volume2, PenTool } from 'lucide-react';
import { useRef } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

export default function SahajBanglaPage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });

  const featureCards = [
    {
      icon: BookOpen,
      title: 'Based on Barnoporichoy & Sahaj Path',
      description: 'Rooted in timeless Bengali literature by Vidyasagar and Tagore',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Volume2,
      title: 'No Ads, 100% Education',
      description: 'A distraction-free learning environment focused entirely on education',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: PenTool,
      title: 'Learn Reading & Writing',
      description: 'Comprehensive skills development for Bengali language mastery',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />

      {/* Hero Section */}
      <section 
        ref={heroRef}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sahaj Bangla | সহজ বাংলা
              </h1>
              
              {/* Bengali Subheadline */}
              <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-medium">
                শ্রীঈশ্বরচন্দ্র বিদ্যাসাগারের 'বর্ণপরিচয়' এবং কবিগুরু রবীন্দ্রনাথ ঠাকুরের 'সহজপাঠ' অবলম্বনে নির্মিত।
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                An interactive educational app designed to make learning Bengali engaging and easy for all ages. It supports both reading and writing skills.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://apps.apple.com/in/app/sahaj-bangla/id6744576285" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
                  href="https://play.google.com/store/apps/details?id=com.uptosix.sahajbangla" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Get it on Google Play
                </a>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/iphone-example1.png"
                  alt="Sahaj Bangla App Interface"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
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

      {/* App Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore the App</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3].map((index, i) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative w-64 md:w-80"
                style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` }}
              >
                <Image
                  src={`/images/iphone-example${index}.png`}
                  alt={`Sahaj Bangla Screenshot ${index}`}
                  width={320}
                  height={640}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voiceover Spotlight Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Narration by Bratati Bandyopadhyay</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-orange-200 to-orange-400 shadow-xl border-4 border-white overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-6xl md:text-7xl">
                    🎭
                  </div>
                </div>
              </motion.div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                The app is brought to life by the distinct and captivating voice of Bratati Bandyopadhyay, a renowned voice artist, making every lesson a delightful experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sahaj Bangla - Features Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Sahaj Bangla?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rooted in the rich tradition of Bengali literature, our app brings together timeless educational wisdom with modern interactive learning.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center md:text-left">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Source Material & No Ads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Source Material
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                The lessons are primarily based on Rabindranath Tagore's <em className="font-semibold">Sahaj Path</em> and Ishwarchandra Vidyasagar's <em className="font-semibold">Barnoporichoy</em>—timeless works that have shaped Bengali literacy for generations.
              </p>
              <div className="bg-white rounded-xl p-6 text-center border-2 border-indigo-200">
                <p className="text-xl md:text-2xl font-bold text-indigo-900">
                  100% educational content and no advertisements for a distraction-free experience.
                </p>
              </div>
              <p className="text-lg text-gray-700 mt-6 text-center">
                The app covers both <strong>Reading</strong> and <strong>Writing</strong> skills, providing a comprehensive learning experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

