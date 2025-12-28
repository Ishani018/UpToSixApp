'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react'; 
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import VideoGallery from '@/components/VideoGallery';
import IPadShowcase from '@/components/IPadShowcase';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

const APPS_DATA = [
  {
    id: 'phonics',
    href: 'https://play.google.com/store/apps/details?id=com.uptosix.phonics_01',
    imageSrc: '/images/app-icons/app-phonics.jpeg',
    title: 'UptoSix Phonics',
    borderColor: 'border-blue-500',
    hoverRotate: 2,
  },
  {
    id: 'phonics-plus',
    href: 'https://play.google.com/store/apps/details?id=com.uptosix.phonicsplus&hl=en_IN',
    imageSrc: '/images/app-icons/app-phonics-plus.jpeg',
    title: 'UptoSix Phonics PLUS',
    borderColor: 'border-purple-500',
    hoverRotate: -1.5,
  },
  {
    id: 'letter-formation',
    href: 'https://play.google.com/store/apps/details?id=com.uptosix.letterformation&hl=en_IN',
    imageSrc: '/images/app-icons/app-letter-formation.jpeg',
    title: 'UptoSix Letter Formation',
    borderColor: 'border-green-500',
    hoverRotate: 1.8,
  },
  {
    id: 'spell-board',
    href: 'https://play.google.com/store/apps/details?id=com.uptosix.spellandwrite&hl=en_IN',
    imageSrc: '/images/app-icons/app-spell-board.jpeg',
    title: 'UptoSix Spell Board',
    borderColor: 'border-orange-500',
    hoverRotate: -2,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
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
            className="fill-transparent"
          />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center py-20 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Interactive Self-Learning<br />
              Phonics Apps for Kids
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Master reading and spelling with the synthetic phonics approach.<br />
              Made by teachers, trusted by parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://apps.apple.com/in/app/uptosix-phonics/id1617850099" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/logos/app_store.png" 
                  alt="Download on App Store" 
                  width={200}
                  height={66}
                  className="h-16 w-auto"
                  unoptimized
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.uptosix.phonics_01" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/logos/google_play.png" 
                  alt="Get it on Google Play" 
                  width={200}
                  height={66}
                  className="h-16 w-auto"
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 Q240,40 480,80 T960,80 T1440,80 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </section>

      {/* Try Apps FREE Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
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
            className="fill-white"
          />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Try the UptoSix Apps FREE!
          </h2>
          <div className="flex flex-wrap justify-center items-start gap-10 md:gap-16">
            {APPS_DATA.map((app) => (
              <motion.a 
                key={app.id}
                href={app.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: app.hoverRotate }}
                className="flex flex-col items-center"
              >
                <div className={`w-36 h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4 cursor-pointer border-b-4 ${app.borderColor}`}>
                  <Image 
                    src={app.imageSrc} 
                    alt={`${app.title} App Icon`} 
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <p className="text-gray-700 font-medium text-base md:text-lg text-center">{app.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* App Showcase Section */}
      <AppShowcase />

      {/* iPad Showcase Section */}
      <IPadShowcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you! Reach out to us through any of these channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 max-w-4xl mx-auto">
            {/* Email */}
            <motion.a
              href="mailto:Dev@uptosix.co.in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Send us an email</p>
              <p className="text-blue-600 font-semibold">Dev@uptosix.co.in</p>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+918660087285"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 transition-colors">
                <Phone className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Reach us on phone</p>
              <p className="text-pink-600 font-semibold">+91 8660087285</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
