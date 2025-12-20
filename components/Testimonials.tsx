'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "This is an amazing app to teach reading skills to young learners. It gives a step by step guidance on how to build reading skills in kids. Children and parents can use this simple user friendly app to steer the learning journey. A must have app for parents of young learners.",
    author: "Aparna Chakma",
    date: "3 March 2023",
  },
  {
    text: "This app is so helpful in learning letter -sound relationship with the help of various games and stories. My daughter enjoys so much to learn phonics from this app. Tysm all the team & teachers to help our kids build a strong foundation in reading and spelling. 🙏❤️😍",
    author: "Amrin Motlani",
    date: "9 August 2022",
  },
  {
    text: "Love the Uptosix Phonics app. Best phonics app to introduce phonics skills to kindergarten kids. Very nicely designed, easy to use, perfect for daily reading practice.",
    author: "Kohli Kingdom",
    date: "10 September 2023",
  },
  {
    text: "Best Phonics app for kids. Systematic step by step Phonics lessons are very easy for parents and teachers to follow. Even if they don't have any prior Phonics knowledge. Unlimited blending and segmenting practice opportunities helps children to master the reading and spelling skills. Colourful graphics, fun games . Children love them. Few minutes of screen time each day and children learn something that prepares their base in reading and spelling, which is the most essential skill for life.",
    author: "Sampa Chakraborty",
    date: "31 July 2022",
  },
  {
    text: "Rhymes are taught in a very funny and enthusiastic way . My brother learnt a lot form it ....",
    author: "Nikhil Kapoor",
    date: "25 September 2023",
  },
  {
    text: "Very nicely handcrafted with new way of learning about phonetics. Great way to engage kids in learning new words",
    author: "Sanchari Bairagi",
    date: "16 October 2022",
  },
  {
    text: "Wonderful app for learning phonics from age grp 3 to 6. As a parent very satisfied with the app my children loved the application...",
    author: "Tapapriya Mitra",
    date: "26 May 2022",
  },
  {
    text: "It's a simple to use and easy to understand app. It explains things about Phonics like digraphs, tricky words, magic 'e', alternative spelling and so on. There are a lot of practice lessons, and the step-by-step Phonics lessons are very easy to follow for everyone: parents, teachers and students who don't have any knowledge on Phonics. I didn't know much about it either before. I highly recommend it!",
    author: "Bobby Kumar",
    date: "26 September 2023",
  },
  {
    text: "Happy user .. Highly recommended for the kids to know the language .. immensely helps to cater to the language learners ..",
    author: "Dipanjan Ganguly",
    date: "15 August 2023",
  },
];

// Duplicate testimonials multiple times for seamless scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 30, damping: 25 });
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollRef = useRef(0);

  // Calculate the distance to move (width of one set of testimonials)
  const cardWidth = 384; // w-96 = 384px
  const gap = 24; // gap-6 = 24px
  const moveDistance = (cardWidth + gap) * testimonials.length;

  useEffect(() => {
    let animationFrame: number;
    const baseSpeed = 0.3; // Slower speed

    const animate = () => {
      if (!isPaused && !isDragging) {
        autoScrollRef.current -= baseSpeed;
        
        // Wrap around for infinite scroll - seamlessly continue
        // When we've scrolled one full set, reset to 0 (which looks identical due to duplicates)
        if (autoScrollRef.current <= -moveDistance) {
          autoScrollRef.current = 0;
        }
        
        x.set(autoScrollRef.current);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isPaused, isDragging, x, moveDistance]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = x.get();
    autoScrollRef.current = scrollLeft.current; // Save current position
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const xPos = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (xPos - startX.current) * 1.5;
    const newX = scrollLeft.current - walk;
    x.set(newX);
    autoScrollRef.current = newX; // Update saved position
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    }
  };

  const navigateLeft = () => {
    const currentX = x.get();
    let newX = currentX + (cardWidth + gap) * 2; // Move 2 cards left
    
    // Wrap around seamlessly
    if (newX > 0) {
      newX = newX - moveDistance;
    }
    
    x.set(newX);
    autoScrollRef.current = newX;
  };

  const navigateRight = () => {
    const currentX = x.get();
    let newX = currentX - (cardWidth + gap) * 2; // Move 2 cards right
    
    // Wrap around seamlessly - when we reach the end, reset to 0
    if (newX <= -moveDistance) {
      newX = 0;
    }
    
    x.set(newX);
    autoScrollRef.current = newX;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
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
          className="fill-white"
        />
      </svg>
      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 Q240,40 480,80 T960,80 T1440,80 L1440,120 L0,120 Z"
          className="fill-gray-50"
        />
      </svg>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Parents & Teachers Say
        </h2>
        
        {/* Horizontal Scrolling Container with Arrows */}
        <div className="relative">
          {/* Navigation Arrows - Positioned outside testimonials */}
          <button
            onClick={navigateLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={navigateRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          <div 
            ref={containerRef}
            className="overflow-hidden pb-8 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <style jsx global>{`
            .testimonials-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <motion.div
            className="flex gap-6 testimonials-scroll select-none"
            style={{ 
              width: 'max-content',
              x: springX,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="shrink-0 w-80 md:w-96 bg-white rounded-2xl p-6 shadow-lg relative hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white"></div>
                <div className="absolute -bottom-[13px] left-8 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-200"></div>
                
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 font-semibold">
                    — {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
