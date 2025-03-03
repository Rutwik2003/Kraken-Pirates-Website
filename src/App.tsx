import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Crown, MessageSquare, Trophy, Menu, X, Github, Twitter, Youtube, Disc as Discord } from 'lucide-react';
import Hero from './components/Hero';
import CrewInfo from './components/CrewInfo';
import JoinCrew from './components/JoinCrew';
import PremiumRoles from './components/PremiumRoles';
import CommunityHub from './components/CommunityHub';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const navItems = [
    { id: 'crew-info', label: 'Crew Info', icon: <Users size={20} /> },
    { id: 'join-crew', label: 'Join Our Crews', icon: <UserPlus size={20} /> },
    { id: 'premium', label: 'Premium Roles', icon: <Crown size={20} /> },
    { id: 'community', label: 'Community Hub', icon: <MessageSquare size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy size={20} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-yellow-600/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* DuckGang Logo */}
              <img 
                src="/public/duckgang_logo.png" 
                alt="DuckGang Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-yellow-500">DuckGang</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
                    activeSection === item.id 
                      ? 'bg-yellow-600/20 text-yellow-400' 
                      : 'hover:bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-b border-gray-700">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
                      activeSection === item.id 
                        ? 'bg-yellow-600/20 text-yellow-400' 
                        : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero />
        <CrewInfo />
        <JoinCrew />
        <PremiumRoles />
        <CommunityHub />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
}

export default App;
