'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to 1 range, centered at 0
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Blue Blob - Hero gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 120,
          y: mousePosition.y * 120,
          scale: [1, 1.2, 0.8, 1.2, 1],
        } : {
          x: [0, 200, 0, -160, 0],
          y: [0, 100, 0, -120, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        style={{ 
          top: '10%', 
          left: '10%',
        }}
        transition={isDesktop ? {
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        } : {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Purple Blob - App Cards */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
          scale: [1, 0.8, 1.2, 0.8, 1],
        } : {
          x: [0, -160, 0, 200, 0],
          y: [0, 200, 0, -100, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        style={{ 
          top: '50%', 
          right: '10%',
        }}
        transition={isDesktop ? {
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        } : {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      {/* Orange Blob - Stats/Unicef section */}
      <motion.div
        className="absolute w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 110,
          y: mousePosition.y * 110,
          scale: [1, 1.2, 0.8, 1.2, 1],
        } : {
          x: [0, 120, 0, -200, 0],
          y: [0, -160, 0, 180, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        style={{ 
          bottom: '10%', 
          left: '30%',
        }}
        transition={isDesktop ? {
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
        } : {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Green Blob - Solution section */}
      <motion.div
        className="absolute w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 90,
          y: mousePosition.y * 90,
          scale: [1, 0.8, 1.2, 0.8, 1],
        } : {
          x: [0, -180, 0, 140, 0],
          y: [0, 150, 0, -140, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        style={{ 
          top: '30%', 
          left: '50%',
        }}
        transition={isDesktop ? {
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        } : {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      {/* Pink Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 105,
          y: mousePosition.y * 105,
          scale: [1, 1.1, 0.9, 1.2, 1],
        } : {
          x: [0, 150, 0, -180, 0],
          y: [0, -120, 0, 160, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        style={{ 
          top: '20%', 
          right: '30%',
        }}
        transition={isDesktop ? {
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
        } : {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
      {/* Pink Blob 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 95,
          y: mousePosition.y * 95,
          scale: [1, 0.9, 1.1, 0.8, 1],
        } : {
          x: [0, -140, 0, 170, 0],
          y: [0, 130, 0, -150, 0],
          scale: [1, 0.9, 1.1, 0.8, 1],
        }}
        style={{ 
          bottom: '20%', 
          right: '20%',
        }}
        transition={isDesktop ? {
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
        } : {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Pink Blob 3 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
        animate={isDesktop ? {
          x: mousePosition.x * 115,
          y: mousePosition.y * 115,
          scale: [1, 1.2, 0.8, 1.1, 1],
        } : {
          x: [0, 180, 0, -130, 0],
          y: [0, -140, 0, 120, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        style={{ 
          top: '60%', 
          left: '20%',
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

