import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Info, Swords, Users, Star, Award } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isAtHero, setIsAtHero] = useState(true);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsAtHero(heroBottom > 0);
      }
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/crew-info', label: 'Crew Info', icon: Info },
    { href: '/join-crew', label: 'Join Crew', icon: Swords },
    { href: '/community', label: 'Community', icon: Users },
    { href: '/achievements', label: 'Achievements', icon: Award },
  ];

  const shouldShowBackground = (isScrolled && !isAtHero) || isMenuOpen || !isHomePage;

  return (
    <nav className={`fixed top-0 sm:top-2 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowBackground ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src='/duckgang_logo.png' className='w-6 h-6 sm:w-8 sm:h-8' alt="DuckGang Logo" />
            <span className="text-lg sm:text-xl font-bold text-light">DuckGang</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`group relative p-2 hover:bg-primary-800/30 rounded-lg transition-colors ${
                    location.pathname === link.href ? 'text-primary-600' : 'text-light'
                  }`}
                >
                  <Icon size={24} />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary-800 text-light px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <a 
              href="https://discord.xyz/quacky" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 sm:px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors text-sm sm:text-base"
            >
              Join Discord
            </a>
            <a 
              href="https://www.roblox.com/communities/35512357/DUCKGANG#!/about" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden lg:block px-3 sm:px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors text-sm sm:text-base"
            >
              Join Roblox Group
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-800/30">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex items-center gap-3 text-light hover:text-primary-600 transition-colors px-2 py-2 rounded-md ${
                      location.pathname === link.href ? 'text-primary-600 bg-primary-800/20' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <a 
                href="https://discord.xyz/quacky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Discord
              </a>
              <a 
                href="https://www.roblox.com/communities/35512357/DUCKGANG#!/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Roblox Group
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;