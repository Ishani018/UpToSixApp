'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const sounds = [
  { letter: 'A', sound: '/ah/', color: 'bg-red-400 hover:bg-red-500' },
  { letter: 'B', sound: '/buh/', color: 'bg-blue-400 hover:bg-blue-500' },
  { letter: 'C', sound: '/kuh/', color: 'bg-green-400 hover:bg-green-500' },
  { letter: 'S', sound: '/sss/', color: 'bg-yellow-400 hover:bg-yellow-500' },
];

export default function InteractivePhonicsDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (sound: string) => {
    alert(`Playing sound: ${sound}!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto lg:mx-0"
    >
      <div className="bg-purple-100 rounded-3xl p-8 shadow-2xl border-4 border-white">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Try It Out!
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {sounds.map((item, index) => (
            <motion.button
              key={item.letter}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(item.sound)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`${item.color} text-white text-4xl font-bold rounded-2xl p-8 shadow-lg transition-colors`}
            >
              {item.letter}
            </motion.button>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-4 text-sm">
          Click a letter to hear the sound!
        </p>
      </div>
    </motion.div>
  );
}

