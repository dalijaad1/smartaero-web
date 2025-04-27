import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Leaf, ArrowRight, Globe, Clock, Mail, Phone } from 'lucide-react';

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'SmartAero Journey', href: '/journey' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61568452772855' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/smartaerotun/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/smartaero/' }
  ];

  return (
    <footer className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900' : 'bg-gradient-to-b from-gray-100 via-gray-100/95 to-gray-100'}`} />
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${isDarkMode ? 'text-emerald-400/20' : 'text-emerald-500/20'}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <Leaf size={Math.random() * 30 + 20} />
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <div className={`relative border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Higher Institute of Computer Science of Mahdia
            </p>
          </div>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.2037605450364!2d11.028060611862884!3d35.52396203848244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302216985cb127d%3A0x24a342e23e50c326!2sHigher%20Institute%20of%20Computer%20Science%20Mahdia!5e0!3m2!1sen!2stn!4v1745551361704!5m2!1sen!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <img src="/logo.png" alt="SmartAero" className="h-8" />
              </Link>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Revolutionizing agriculture through innovative IoT solutions and smart technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-emerald-500' 
                          : 'bg-white hover:bg-emerald-500'
                      } transition-all duration-300 hover:text-white`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    onHoverStart={() => setHoveredLink(link.name)}
                    onHoverEnd={() => setHoveredLink(null)}
                    className="relative"
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center ${
                        isDarkMode ? 'hover:text-emerald-400' : 'hover:text-emerald-600'
                      } transition-colors`}
                    >
                      <AnimatePresence>
                        {hoveredLink === link.name && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ width: 0 }}
                            className="absolute bottom-0 left-0 h-0.5 bg-emerald-500"
                          />
                        )}
                      </AnimatePresence>
                      <ArrowRight 
                        size={16}
                        className={`mr-2 transition-transform ${
                          hoveredLink === link.name ? 'translate-x-1' : ''
                        }`}
                      />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Globe className="text-emerald-500 mt-1" size={20} />
                  <span>
                    Higher Institute of Computer Science of Mahdia,<br />
                    Route de Réjiche,<br />
                    Mahdia 5121
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-emerald-500" size={20} />
                  <span>+216 26531980</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-emerald-500" size={20} />
                  <span>mohamedali.jaadari@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="text-emerald-500" size={20} />
                  <span>Mon - Fri: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className={`hover:text-emerald-500 transition-colors`}>Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className={`hover:text-emerald-500 transition-colors`}>Terms of Service</a>
                </li>
                <li>
                  <a href="#" className={`hover:text-emerald-500 transition-colors`}>Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`relative border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} SmartAero. All rights reserved.
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Made with ❤️ in Tunisia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;