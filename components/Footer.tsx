import { Facebook, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Important Links */}
        <div>
          <h5 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Important Links</h5>
          <ul className="space-y-2">
            <li><Link href="/about-us" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
            <li><Link href="/refund" className="hover:text-blue-400 transition">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Empty Col for Spacing (Matches original layout) */}
        <div className="hidden md:block"></div>

        {/* Support */}
        <div>
          <h5 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Support</h5>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-blue-400">✉</span> dev@uptosix.co.in
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-blue-400">📍</span> Whitefield, Bangalore
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a 
              href="https://www.facebook.com/PhonicsWithMsSam/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.youtube.com/@phonics_reading" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition"
              aria-label="Visit our YouTube channel"
            >
              <Youtube size={18} />
            </a>
            <a 
              href="https://www.instagram.com/phonics.reading/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-pink-600 transition"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-800 mt-12 pt-8 px-6 sm:px-8 lg:px-12 xl:px-16 text-sm text-gray-500">
        Copyright @2025 | UptoSix Kids Private Limited | All rights reserved
      </div>
    </footer>
  );
}

