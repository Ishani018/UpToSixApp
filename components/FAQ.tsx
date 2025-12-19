'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are the UptoSix Phonics Apps?",
    answer: "Interactive phonics learning tools that help children master reading and spelling using synthetic phonics. Perfect for ages 3-8, beginners, or older children struggling with literacy."
  },
  {
    question: "How many apps are there and what's the difference?",
    answer: "Two apps: UptoSix Phonics (Foundation) for beginners with basic concepts, and UptoSix Phonics PLUS (Advanced) with complex rules, digraphs, blends, tricky words, and extensive practice."
  },
  {
    question: "Do we need to buy all the UptoSix apps separately?",
    answer: "Yes, each app is purchased separately to allow flexibility based on your child's learning level and needs."
  },
  {
    question: "Which app is ideal for which age?",
    answer: "Foundation app: Ages 3-5. Phonics PLUS: Ages 5+ and older children needing extra support."
  },
  {
    question: "Can I use the apps on a computer?",
    answer: "Designed for mobile devices, but you can mirror your Android screen to a computer for a larger display."
  },
  {
    question: "What is the Letter Formation App?",
    answer: "Teaches proper letter and number formation through animations. Unlike other apps, it doesn't auto-correct, ensuring children learn true finger control and proper strokes."
  },
  {
    question: "What is the Spell Board App?",
    answer: "A spelling-focused app using phonics-based techniques with fun, engaging exercises to practice spelling."
  },
  {
    question: "Are the UptoSix apps ad-free?",
    answer: "Yes, all UptoSix apps are completely ad-free, ensuring a safe and distraction-free learning environment for your child."
  },
  {
    question: "Why choose UptoSix apps?",
    answer: "Developed by experienced teachers, loved by parents worldwide. Offers systematic lessons, endless practice, and interactive activities for effective learning."
  },
  {
    question: "Is there a subscription fee?",
    answer: "No! One-time payment only. No recurring fees."
  },
  {
    question: "Do the apps work offline?",
    answer: "Yes, once downloaded, all apps work perfectly without internet connection."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-800 text-base md:text-lg pr-4">{faq.question}</span>
              {openIndex === index ? <ChevronUp className="text-blue-500 shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
            </button>
            <AnimatePresence mode="wait">
              {openIndex === index && (
                <motion.div
                  key={`faq-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

