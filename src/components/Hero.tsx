import React, { useEffect, useState } from 'react';

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

  // Wanted poster images
  const wantedImages = [
    "/public/wanted_poster_duck.png", // Replace with actual paths
    "/public/wanted2.png",
    "/public/wanted3.png"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          transform: `translateY(${offset * 0.5}px)`
        }}
      />
      
      {/* Floating wanted posters */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Poster 1 */}
        <div 
          className="absolute top-20 left-[10%] w-48 h-64 bg-yellow-700/40 rounded-md border-2 border-yellow-600 backdrop-blur-sm transform rotate-[-5deg]"
          style={{ transform: `rotate(-5deg) translateY(${offset * 0.2}px)` }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="text-center text-yellow-300 font-bold">WANTED</div>
            <div className="my-2 h-32 bg-gray-600/50 flex items-center justify-center">
              <img src={wantedImages[0]} alt="Wanted Crew Member" className="full full " />
            </div>
            {/* <div className="text-center text-yellow-300 font-bold mt-auto">
              <div>REWARD</div>
              <div>B$ 30,000,000</div>
            </div> */}
          </div>
        </div>
        
        {/* Poster 2 */}
        <div 
          className="absolute top-40 right-[15%] w-48 h-64 bg-yellow-700/40 rounded-md border-2 border-yellow-600 backdrop-blur-sm transform rotate-[8deg]"
          style={{ transform: `rotate(8deg) translateY(${offset * 0.3}px)` }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="text-center text-yellow-300 font-bold">WANTED</div>
            <div className="my-2 h-32 bg-gray-600/50 flex items-center justify-center">
              <img src={wantedImages[1]} alt="Wanted Crew Member" className="w-full h-full object-cover" />
            </div>
            <div className="text-center text-yellow-300 font-bold mt-auto">
              <div>REWARD</div>
              <div>B$ 75,000,000</div>
            </div>
          </div>
        </div>
        
        {/* Poster 3 */}
        <div 
          className="absolute bottom-20 left-[20%] w-48 h-64 bg-yellow-700/40 rounded-md border-2 border-yellow-600 backdrop-blur-sm transform rotate-[3deg]"
          style={{ transform: `rotate(3deg) translateY(${offset * -0.15}px)` }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="text-center text-yellow-300 font-bold">WANTED</div>
            <div className="my-2 h-32 bg-gray-600/50 flex items-center justify-center">
              <img src={wantedImages[2]} alt="Wanted Crew Member" className="w-full h-full object-cover" />
            </div>
            <div className="text-center text-yellow-300 font-bold mt-auto">
              <div>REWARD</div>
              <div>B$ 50,000,000</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            <img 
              src="/public/duckgang_logo.png" 
              alt="DuckGang Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
          DuckGang
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          The most fearsome gaming crew on the high seas of Roblox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-md transition-colors shadow-lg">
            Join Our Crew
          </button>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-md transition-colors border border-yellow-600/50 shadow-lg">
            Discord Server
          </button>
        </div>
      </div>
      
      {/* Wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#111827" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
