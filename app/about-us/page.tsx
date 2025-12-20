'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, BookCheck, Users, Sparkles, Heart, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

const appsData = [
  { 
    name: 'UptoSix Phonics', 
    description: 'Foundation app for beginners with basic phonics concepts', 
    icon: '/images/app-phonics.jpeg',
    screenshot: '/images/example.jpg', // Placeholder - replace with actual screenshot
    color: 'from-blue-400 to-blue-600'
  },
  { 
    name: 'UptoSix Phonics PLUS', 
    description: 'Advanced app with complex rules, digraphs, blends, and tricky words', 
    icon: '/images/app-phonics-plus.jpeg',
    screenshot: '/images/example1.jpg', // Placeholder - replace with actual screenshot
    color: 'from-purple-400 to-purple-600'
  },
  { 
    name: 'UptoSix Letter Formation', 
    description: 'Teaches proper letter and number formation through animations', 
    icon: '/images/app-letter-formation.jpeg',
    screenshot: '/images/example2.jpg', // Placeholder - replace with actual screenshot
    color: 'from-green-400 to-green-600'
  },
  { 
    name: 'UptoSix Spell Board', 
    description: 'Spelling-focused app using phonics-based techniques', 
    icon: '/images/app-spell-board.jpeg',
    screenshot: '/images/example3.jpg', // Placeholder - replace with actual screenshot
    color: 'from-orange-400 to-orange-600'
  },
];

const teamMembers = [
  { name: 'Sampa Chakraborty', role: 'Co-Founder & Lead Teacher', funFact: 'Passionate Educator', emoji: '👩‍🏫', color: 'from-blue-400 to-blue-600' },
  { name: 'Sumanta Chakraborty', role: 'Co-Founder & Developer', funFact: 'Tech Innovator', emoji: '👨‍💻', color: 'from-purple-400 to-purple-600' },
];

const galleryImages = [
  { src: '/images/example.jpg', alt: 'Kids learning', category: 'learning' },
  { src: '/images/example1.jpg', alt: 'Team working', category: 'team' },
  { src: '/images/example2.jpg', alt: 'App development', category: 'dev' },
  { src: '/images/example3.jpg', alt: 'Happy kids', category: 'learning' },
  { src: '/images/ipad-example1.PNG', alt: 'Behind the scenes', category: 'team' },
  { src: '/images/ipad-example2.PNG', alt: 'Kids using app', category: 'learning' },
  { src: '/images/ipad-example3.PNG', alt: 'Workshop', category: 'team' },
  { src: '/images/ipad-example4.PNG', alt: 'Celebration', category: 'team' },
  { src: '/images/ipad-example5.PNG', alt: 'Learning experience', category: 'learning' },
  { src: '/images/ipad-example6.PNG', alt: 'Interactive sessions', category: 'learning' },
  { src: '/images/ipad-example7.PNG', alt: 'Educational content', category: 'learning' },
  { src: '/images/ipad-example8.PNG', alt: 'App features', category: 'learning' },
  { src: '/images/ipad-example9.PNG', alt: 'User interface', category: 'learning' },
  { src: '/images/ipad-example10.PNG', alt: 'Learning activities', category: 'learning' },
];

export default function AboutUsPage() {
  const collageRef = useRef(null);
  const timelineRef = useRef(null);
  const problemRef = useRef(null);
  const teamRef = useRef(null);
  const galleryRef = useRef(null);

  const collageInView = useInView(collageRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });
  const problemInView = useInView(problemRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

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
                Building the Future,
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  One Sound at a Time.
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We're a passionate team of educators and technologists creating joyful learning experiences for children everywhere.
              </p>
            </motion.div>

            {/* Right: Polaroid Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {[
                '/images/about-hero-1.jpg.PNG',
                '/images/about-hero-2.jpg.PNG',
                '/images/about-hero-3.jpg.PNG',
                '/images/about-hero-4.jpg.PNG',
              ].map((imageSrc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={collageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  className="bg-white p-1.5 md:p-2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="w-full aspect-[4/3] rounded overflow-hidden relative bg-white">
                    <Image
                      src={imageSrc}
                      alt={`Team photo ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-1.5 md:mt-2 h-0.5 md:h-1 bg-white rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solvers - Fact Cards */}
      <section ref={problemRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Problem We're Solving
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Sad Book */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-red-50 rounded-3xl p-8 text-center border-4 border-red-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">😔</div>
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2/3 Can't Read</h3>
              <p className="text-gray-700 leading-relaxed">
                Nearly two-thirds of 10-year-olds struggle to read simple text
              </p>
            </motion.div>

            {/* Card 2: 600 Million */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-orange-50 rounded-3xl p-8 text-center border-4 border-orange-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">📚</div>
              <Users className="w-16 h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">600 Million</h3>
              <p className="text-gray-700 leading-relaxed">
                Children worldwide lack basic reading and math skills
              </p>
            </motion.div>

            {/* Card 3: Happy Book */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-green-50 rounded-3xl p-8 text-center border-4 border-green-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">✨</div>
              <BookCheck className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                Synthetic phonics makes learning fun and effective
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apps Timeline Section */}
      <section ref={timelineRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Apps
            </h2>
            <p className="text-lg text-gray-600">
              A growing family of educational apps designed for children
            </p>
          </motion.div>

          {/* Horizontal Timeline Line */}
          <div className="relative mb-12 hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transform -translate-y-1/2 rounded-full"></div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appsData.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* App Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100 h-full flex flex-col">
                  {/* App Screenshot Placeholder */}
                  <div className="relative w-full aspect-video mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={app.screenshot}
                      alt={`${app.name} screenshot`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* App Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} p-2 shadow-lg`}>
                      <Image
                        src={app.icon}
                        alt={`${app.name} icon`}
                        width={64}
                        height={64}
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                  </div>

                  {/* App Name & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{app.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center grow">{app.description}</p>

                  {/* Timeline Node (on desktop) */}
                  <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-br ${app.color} rounded-full shadow-lg border-4 border-white`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Makers */}
      <section ref={teamRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Makers
            </h2>
            <p className="text-lg text-gray-600">
              The passionate team behind UptoSix Kids
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl">
                      {member.emoji}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                
                {/* Fun Fact Badge */}
                <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">{member.funFact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section ref={galleryRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-lg text-gray-600">
              Kids learning, team working, moments that inspire us
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
