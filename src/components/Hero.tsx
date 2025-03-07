import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <Parallax 
        translateY={[0, 22]} 
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://w0.peakpx.com/wallpaper/30/145/HD-wallpaper-polygonal-abstract-red-dark-background-abstract-dark-red-deviantart.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // filter: 'brightness(0.4) blur(8px)',
          }}
        />
      </Parallax>
      
      {/* Hero content */}
      <Parallax translateY={[0, -20]} className="container mx-auto px-4 z-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img className='w-20 h-20' src='/duckgang_logo.png' alt="DuckGang Logo" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary-600 drop-shadow-lg">
          DuckGang
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          The most fearsome gaming crew on the high seas of Roblox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href='#crew-info'>
            <button className="px-8 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors shadow-lg">
              Join Our Crew
            </button>
          </a>
          <a href='#community'>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-md transition-colors border border-primary-900/50 shadow-lg">
              Discord Server
            </button>
          </a>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;