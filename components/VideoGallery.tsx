'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 'aQC8x2CEwHg',
    title: 'What is Phonics?',
  },
  {
    id: 'iamWq0TVd0o',
    title: 'What is UptoSix Phonics?',
  },
  {
    id: 'HsCskXr_v-Y',
    title: 'Spell Board Demo',
  },
  {
    id: '_SZ_sNt5V3I',
    title: 'Phonics PLUS Overview',
  },
];

interface Video {
  id: string;
  title: string;
}

interface VideoGalleryProps {
  limit?: number;
  topWaveColor?: string;
  bottomWaveColor?: string;
  backgroundColor?: string;
  customVideos?: Video[];
}

export default function VideoGallery({ 
  limit, 
  topWaveColor = 'fill-white',
  bottomWaveColor = 'fill-blue-900',
  backgroundColor = 'bg-blue-900',
  customVideos
}: VideoGalleryProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const videosToDisplay = customVideos || videos;
  const displayVideos = limit ? videosToDisplay.slice(0, limit) : videosToDisplay;
  const isSingleVideo = limit === 1 || displayVideos.length === 1;
  const gridCols = isSingleVideo ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
  const maxWidth = isSingleVideo ? 'max-w-[44rem]' : 'max-w-7xl';

  return (
    <>
      <section ref={ref} className={`py-32 md:py-40 px-4 sm:px-6 lg:px-8 ${backgroundColor} relative z-10`}>
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
            className={topWaveColor}
          />
        </svg>

        <div className={`${maxWidth} mx-auto relative z-10`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            {limit === 1 ? 'Watch Our Video' : 'Watch Our Videos'}
          </h2>
          <div className={`grid ${gridCols} gap-8 md:gap-10`}>
            {displayVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => openModal(video.id)}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl transition-all">
                  <motion.img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <motion.div 
                      className="bg-white/90 rounded-full p-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Play size={32} className="text-indigo-900 ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/20 transition-colors rounded-lg"></div>
                </div>
                <motion.h3 
                  className="mt-3 text-center font-semibold text-white"
                  whileHover={{ color: index < 2 ? "#ffffff" : "#a5b4fc" }}
                >
                  {video.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>

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
            className={bottomWaveColor}
          />
        </svg>
      </section>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title={videosToDisplay.find(v => v.id === selectedVideo)?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

