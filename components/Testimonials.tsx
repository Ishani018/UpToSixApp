'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "This is an amazing app to teach reading skills to young learners. It gives a step by step guidance on how to build reading skills in kids. Children and parents can use this simple user friendly app to steer the learning journey. A must have app for parents of young learners.",
    author: "Aparna Chakma",
    date: "3 March 2023",
    rotation: -2
  },
  {
    text: "This app is so helpful in learning letter -sound relationship with the help of various games and stories. My daughter enjoys so much to learn phonics from this app. Tysm all the team & teachers to help our kids build a strong foundation in reading and spelling. 🙏❤️😍",
    author: "Amrin Motlani",
    date: "9 August 2022",
    rotation: 1
  },
  {
    text: "Love the Uptosix Phonics app. Best phonics app to introduce phonics skills to kindergarten kids. Very nicely designed, easy to use, perfect for daily reading practice.",
    author: "Kohli Kingdom",
    date: "10 September 2023",
    rotation: -1.5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Parents & Teachers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ transform: `rotate(${testimonial.rotation}deg)` }}
              className="bg-white p-6 rounded-2xl shadow-lg border-4 border-transparent hover:border-pink-300 transition-all hover:scale-105"
            >
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
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
        </div>
      </div>
    </section>
  );
}

