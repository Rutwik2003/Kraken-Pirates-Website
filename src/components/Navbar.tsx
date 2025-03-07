import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Info, Swords, Users, Star, Award } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/crew-info', label: 'Crew Info', icon: Info },
    { href: '/join-crew', label: 'Join Crew', icon: Swords },
    { href: '/community', label: 'Community', icon: Users },
    // { href: '/premium', label: 'Premium', icon: Star },
    { href: '/achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <nav className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src='/duckgang_logo.png' className='w-8 h-8' alt="DuckGang Logo" />
            <span className="text-xl font-bold text-light">DuckGang</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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
              className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors"
            >
              Join Discord
            </a>
            <a 
              href="https://www.roblox.com/communities/35512357/DUCKGANG#!/about" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors"
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
                    className={`flex items-center gap-3 text-light hover:text-primary-600 transition-colors ${
                      location.pathname === link.href ? 'text-primary-600' : ''
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
                className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors text-center"
              >
                Join Discord
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;