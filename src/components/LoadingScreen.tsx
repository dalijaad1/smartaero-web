import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface LoadingScreenProps {
  isDarkMode: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isDarkMode }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Smart.', 'Aero.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Full Green Background */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900' 
          : 'bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600'
      }`} />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${isDarkMode ? 'text-emerald-400/30' : 'text-white/30'}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: -100,
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

      <div className="relative text-center">
        {/* Kinetic Typography */}
        <div className="h-48 relative flex justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="text-9xl md:text-[12rem] font-bold text-white"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Loading Bar */}
        <motion.div
          className="mt-8 w-64 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;