'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Blue Blob - Hero gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
        style={{ 
          top: '10%', 
          left: '10%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 200, 0, -160, 0],
          y: [0, 100, 0, -120, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Purple Blob - App Cards */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
        style={{ 
          top: '50%', 
          right: '10%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -160, 0, 200, 0],
          y: [0, 200, 0, -100, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      {/* Orange Blob - Stats/Unicef section */}
      <motion.div
        className="absolute w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20"
        style={{ 
          bottom: '10%', 
          left: '30%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 120, 0, -200, 0],
          y: [0, -160, 0, 180, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Green Blob - Solution section */}
      <motion.div
        className="absolute w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"
        style={{ 
          top: '30%', 
          left: '50%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -180, 0, 140, 0],
          y: [0, 150, 0, -140, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      {/* Pink Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
        style={{ 
          top: '20%', 
          right: '30%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 150, 0, -180, 0],
          y: [0, -120, 0, 160, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
      {/* Pink Blob 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
        style={{ 
          bottom: '20%', 
          right: '20%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -140, 0, 170, 0],
          y: [0, 130, 0, -150, 0],
          scale: [1, 0.9, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Pink Blob 3 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
        style={{ 
          top: '60%', 
          left: '20%',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 180, 0, -130, 0],
          y: [0, -140, 0, 120, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
    </div>
  );
}

