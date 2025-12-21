'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, BookCheck, Users, Sparkles, Heart, GraduationCap, Plus } from 'lucide-react';
import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

const appsData = [
  {
    id: 1,
    title: 'UptoSix Phonics',
    description: 'Foundation app for beginners',
    icon: '/images/app-phonics.jpeg',
    color: 'from-pink-400 to-blue-500'
  },
  {
    id: 2,
    title: 'UptoSix Phonics PLUS',
    description: 'Advanced app with complex rules',
    icon: '/images/app-phonics-plus.jpeg',
    color: 'from-blue-400 to-pink-500'
  },
  {
    id: 3,
    title: 'UptoSix Letter Formation',
    description: 'Teaches proper letter formation',
    icon: '/images/app-letter-formation.jpeg',
    color: 'from-pink-400 to-blue-500'
  },
  {
    id: 4,
    title: 'UptoSix Spell Board',
    description: 'Spelling-focused app',
    icon: '/images/app-spell-board.jpeg',
    color: 'from-blue-400 to-pink-500'
  },
  {
    id: 5,
    title: 'More Apps',
    description: 'Coming soon...',
    icon: null,
    color: 'from-gray-400 to-gray-500',
    isPlaceholder: true
  }
];

export default function AboutUsPage() {
  const collageRef = useRef(null);
  const problemRef = useRef(null);
  const timelineRef = useRef(null);

  const collageInView = useInView(collageRef, { once: true, margin: '-100px' });
  const problemInView = useInView(problemRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

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

      {/* Our Apps Timeline Section */}
      <section ref={timelineRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative z-10">
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

          {/* Timeline Container */}
          <div className="relative py-16" style={{ minHeight: '400px' }}>
            {/* Central Horizontal Axis Line */}
            <div className="hidden md:block absolute left-0 right-0 h-1 bg-blue-500 rounded-full z-0" style={{ top: '50%', transform: 'translateY(-50%)' }}></div>
            
            {/* Scrollable Timeline Items */}
            <div className="overflow-x-auto overflow-y-visible pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="relative min-w-max md:min-w-full flex md:justify-between items-start gap-16 md:gap-12 px-4 md:px-0">
                {appsData.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative shrink-0 flex flex-col items-center"
                    style={{ minWidth: '220px', width: '220px' }}
                  >
                    {/* Top: App Icon */}
                    <div className="relative mb-4 z-20">
                      {app.isPlaceholder ? (
                        <div className="w-32 h-32 rounded-2xl border-4 border-dashed border-gray-400 bg-white flex items-center justify-center shadow-lg">
                          <Plus className="w-14 h-14 text-gray-400" />
                        </div>
                      ) : app.icon ? (
                        <div className="w-32 h-32 rounded-2xl p-2 shadow-xl bg-white border-2 border-transparent hover:border-pink-300 transition-colors">
                          <Image
                            src={app.icon}
                            alt={`${app.title} icon`}
                            width={128}
                            height={128}
                            className="w-full h-full rounded-xl object-cover"
                          />
                        </div>
                      ) : null}
                    </div>

                    {/* Connector: Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 w-0.5 bg-gradient-to-b from-pink-400 to-blue-500 z-10" style={{ 
                      top: '112px', 
                      bottom: '50%',
                      transform: 'translateX(-50%)'
                    }}></div>

                    {/* Middle (Axis): Circle/Dot on Timeline */}
                    <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg z-20" style={{ 
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}></div>

                    {/* Bottom: Title and Description */}
                    <div className="text-center mt-4 z-20" style={{ marginTop: 'calc(50% + 12px)' }}>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">{app.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
