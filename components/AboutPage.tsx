'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, BookCheck, Users, Sparkles, Heart, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

const timelineData = [
  { year: '2020', title: 'The Idea', description: 'Teachers and developers come together with a vision', icon: Sparkles },
  { year: '2021', title: 'First Prototype', description: 'Building the foundation with synthetic phonics', icon: BookOpen },
  { year: '2022', title: 'First App Launch', description: 'UptoSix Phonics goes live on app stores', icon: GraduationCap },
  { year: '2024', title: 'Global Reach', description: 'Reaching children in over 50 countries', icon: Heart },
];

const teamMembers = [
  { name: 'Sarah Chen', role: 'Lead Teacher', funFact: 'Loves Lego', emoji: '🧱', color: 'from-blue-400 to-blue-600' },
  { name: 'Mike Johnson', role: 'App Developer', funFact: 'Spelling Bee Champ', emoji: '🏆', color: 'from-purple-400 to-purple-600' },
  { name: 'Emma Williams', role: 'Curriculum Designer', funFact: 'Coffee Enthusiast', emoji: '☕', color: 'from-pink-400 to-pink-600' },
  { name: 'David Park', role: 'UX Designer', funFact: 'Gaming Pro', emoji: '🎮', color: 'from-green-400 to-green-600' },
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

const AboutPage = () => {
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

            {/* Right: Floating Polaroid Collage */}
            <div className="relative h-96 lg:h-[500px]">
              {[
                { top: '10%', left: '10%', rotate: -12, delay: 0.1 },
                { top: '20%', right: '15%', rotate: 8, delay: 0.2 },
                { bottom: '15%', left: '20%', rotate: -8, delay: 0.3 },
                { bottom: '25%', right: '10%', rotate: 15, delay: 0.4 },
              ].map((style, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: style.rotate - 20 }}
                  animate={collageInView ? { opacity: 1, scale: 1, rotate: style.rotate } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: style.delay, type: 'spring', stiffness: 200 }}
                  className="absolute bg-white p-2 rounded-lg shadow-2xl"
                  style={{
                    top: style.top,
                    left: style.left,
                    right: style.right,
                    bottom: style.bottom,
                    transform: `rotate(${style.rotate}deg)`,
                  }}
                >
                  <div className="w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">👶</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
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

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="relative">
            {/* Dashed Line */}
            <svg
              className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block"
              width="2"
              height="100%"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
            </svg>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                        <div className="text-3xl font-bold text-purple-600 mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Icon Node */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer for alternating */}
                    <div className="hidden md:block flex-1"></div>
                  </motion.div>
                );
              })}
            </div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
};

export default AboutPage;
