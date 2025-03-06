import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#crew-info', label: 'Crew Info' },
    { href: '#join-crew', label: 'Join Crew' },
    { href: '#community', label: 'Community' },
    { href: '#premium', label: 'Premium' },
    { href: '#achievements', label: 'Achievements' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {/* <Anchor className="text-primary-600" size={24} /> */}
            <img src='/duckgang_logo.png' className='w-8 h-8'></img>
            <span className="text-xl font-bold text-light">DuckGang</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-light hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors">
              Join Discord
            </button>
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-light hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="px-4 py-2 bg-primary-800 hover:bg-primary-600 text-light rounded-md transition-colors">
                Join Discord
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;