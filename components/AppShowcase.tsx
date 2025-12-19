'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AppShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                  {/* Screen Content */}
                  <div className="w-full h-full relative">
                    <Image 
                      src="/images/example.jpg" 
                      alt="UptoSix Phonics App Screenshot" 
                      width={300}
                      height={600}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 6%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm z-20"
            >
              ✓ No Ads
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm z-20"
            >
              🛡️ 100% Safe
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

