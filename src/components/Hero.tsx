import React, { useEffect, useState } from 'react';
import { Anchor } from 'lucide-react';

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
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://w0.peakpx.com/wallpaper/30/145/HD-wallpaper-polygonal-abstract-red-dark-background-abstract-dark-red-deviantart.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) blur(8px)',
          transform: `translateY(${offset * 0.5}px)`
        }}
      />
      
      {/* Floating wanted posters */}
      {/* <div className="absolute inset-0 z-10 overflow-hidden">
        <div 
          className="absolute top-20 left-[10%] w-48 h-62 bg-primary-800/40 rounded-md border-2 border-primary-600 backdrop-blur-sm transform rotate-[-5deg]"
          style={{ transform: `rotate(-5deg) translateY(${offset * 0.2}px)` }}
        >
          <div className="p-3">
            <div className=" object-cover">
              <img src='/wanted_poster_duck.png'></img>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute top-40 right-[15%] w-48 h-64 bg-primary-800/40 rounded-md border-2 border-primary-600 backdrop-blur-sm transform rotate-[8deg]"
          style={{ transform: `rotate(8deg) translateY(${offset * 0.3}px)` }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="text-center text-primary-600 font-bold">WANTED</div>
            <div className="my-2 h-32 bg-gray-600/50 flex items-center justify-center">
              <span className="text-gray-400">Crew Member</span>
            </div>
            <div className="text-center text-primary-600 font-bold mt-auto">
              <div>REWARD</div>
              <div>B$ 75,000,000</div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-20 left-[20%] w-48 h-64 bg-primary-800/40 rounded-md border-2 border-primary-600 backdrop-blur-sm transform rotate-[3deg]"
          style={{ transform: `rotate(3deg) translateY(${offset * -0.15}px)` }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="text-center text-primary-600 font-bold">WANTED</div>
            <div className="my-2 h-32 bg-gray-600/50 flex items-center justify-center">
              <span className="text-gray-400">Crew Member</span>
            </div>
            <div className="text-center text-primary-600 font-bold mt-auto">
              <div>REWARD</div>
              <div>B$ 50,000,000</div>
            </div>
          </div>
        </div>
      </div>
       */}
      {/* Hero content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* <Anchor className="text-primary-600" size={80} /> */}
            <img className='w-20 h-20' src='/duckgang_logo.png'></img>
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* <span className="text-2xl font-bold">DG</span> */}
            </div>
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
          </button></a>
          <a href='#community'>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-md transition-colors border border-primary-900/50 shadow-lg">
            Discord Server
          </button></a>
        </div>
      </div>
      
      {/* Wave overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#1D1616" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;