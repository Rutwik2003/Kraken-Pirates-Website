import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
      setIsScrolled(window.pageYOffset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <Parallax 
        translateY={[0, 22]} 
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('Kraken-Pirates_1_1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter:'brightness(0.8) blur(0px)', 
            transition: 'all 0.5s ease-in-out'
          }}
        />
      </Parallax>
      
      {/* Hero content */}
      <Parallax translateY={[0, -20]} className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <motion.img 
                className='w-16 h-16 sm:w-20 sm:h-20' 
                src='/kraken_pirate_logo.png' 
                alt="DuckGang Logo"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-primary-300 drop-shadow-lg">
            Kraken Pirates
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 px-4">
            The most prominent crew on the high seas of Roblox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a 
              href='#crew-info' 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="w-full sm:w-auto px-8 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors shadow-lg">
                Join Our Crew
              </button>
            </motion.a>
            <motion.a 
              href='#community' 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="w-full sm:w-auto px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-md transition-colors border border-primary-900/50 shadow-lg">
                Discord Server
              </button>
            </motion.a>
          </div>
        </motion.div>
      </Parallax>
    </section>
  );
};

export default Hero;
