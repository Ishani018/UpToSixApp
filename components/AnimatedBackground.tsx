'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Create motion values for mouse position (normalized -1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring values for smooth animation
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Create transforms for each blob's movement distance
  const blob1X = useTransform(springX, (v) => v * 120);
  const blob1Y = useTransform(springY, (v) => v * 120);
  const blob2X = useTransform(springX, (v) => v * 100);
  const blob2Y = useTransform(springY, (v) => v * 100);
  const blob3X = useTransform(springX, (v) => v * 110);
  const blob3Y = useTransform(springY, (v) => v * 110);
  const blob4X = useTransform(springX, (v) => v * 90);
  const blob4Y = useTransform(springY, (v) => v * 90);
  const blob5X = useTransform(springX, (v) => v * 105);
  const blob5Y = useTransform(springY, (v) => v * 105);
  const blob6X = useTransform(springX, (v) => v * 95);
  const blob6Y = useTransform(springY, (v) => v * 95);
  const blob7X = useTransform(springX, (v) => v * 115);
  const blob7Y = useTransform(springY, (v) => v * 115);

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
      // Set motion values directly without triggering re-renders
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop, mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Blue Blob - Hero gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
        style={{ 
          top: '10%', 
          left: '10%',
          x: isDesktop ? blob1X : 0,
          y: isDesktop ? blob1Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 1.2, 0.8, 1.2, 1],
        } : {
          x: [0, 200, 0, -160, 0],
          y: [0, 100, 0, -120, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        transition={isDesktop ? {
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
        style={{ 
          top: '50%', 
          right: '10%',
          x: isDesktop ? blob2X : 0,
          y: isDesktop ? blob2Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 0.8, 1.2, 0.8, 1],
        } : {
          x: [0, -160, 0, 200, 0],
          y: [0, 200, 0, -100, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        transition={isDesktop ? {
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
        style={{ 
          bottom: '10%', 
          left: '30%',
          x: isDesktop ? blob3X : 0,
          y: isDesktop ? blob3Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 1.2, 0.8, 1.2, 1],
        } : {
          x: [0, 120, 0, -200, 0],
          y: [0, -160, 0, 180, 0],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        transition={isDesktop ? {
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
        style={{ 
          top: '30%', 
          left: '50%',
          x: isDesktop ? blob4X : 0,
          y: isDesktop ? blob4Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 0.8, 1.2, 0.8, 1],
        } : {
          x: [0, -180, 0, 140, 0],
          y: [0, 150, 0, -140, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        transition={isDesktop ? {
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
        style={{ 
          top: '20%', 
          right: '30%',
          x: isDesktop ? blob5X : 0,
          y: isDesktop ? blob5Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 1.1, 0.9, 1.2, 1],
        } : {
          x: [0, 150, 0, -180, 0],
          y: [0, -120, 0, 160, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={isDesktop ? {
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
        style={{ 
          bottom: '20%', 
          right: '20%',
          x: isDesktop ? blob6X : 0,
          y: isDesktop ? blob6Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 0.9, 1.1, 0.8, 1],
        } : {
          x: [0, -140, 0, 170, 0],
          y: [0, 130, 0, -150, 0],
          scale: [1, 0.9, 1.1, 0.8, 1],
        }}
        transition={isDesktop ? {
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
        style={{ 
          top: '60%', 
          left: '20%',
          x: isDesktop ? blob7X : 0,
          y: isDesktop ? blob7Y : 0,
        }}
        animate={isDesktop ? {
          scale: [1, 1.2, 0.8, 1.1, 1],
        } : {
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

