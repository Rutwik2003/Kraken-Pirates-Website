import React from 'react';
import { Anchor, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 border-t border-primary-600/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Anchor className="text-primary-600" size={24} /> */}
              <img src="kraken_pirate_logo.png" alt="Kraken Pirates" className="w-10 h-10" />
              <span className="text-xl font-bold text-primary-600">Kraken Pirates</span>
            </div>
            <p className="text-gray-400 mb-6">
              The most fearsome gaming crew on the high seas of Roblox. Join us for adventure, camaraderie, and glory!
            </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors">
              <Mail size={16} />
              <span>Contact Us</span>
            </button>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#crew-info" className="text-gray-400 hover:text-primary-600 transition-colors">Crew Information</a>
              </li>
              <li>
                <a href="#join-crew" className="text-gray-400 hover:text-primary-600 transition-colors">Join Our Crews</a>
              </li>
              <li>
                <a href="#premium" className="text-gray-400 hover:text-primary-600 transition-colors">Premium Roles</a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-primary-600 transition-colors">Community Hub</a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-primary-600 transition-colors">Achievements</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Games</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://blox-fruits.fandom.com/wiki/Blox_Fruits" target='_blank' className="text-gray-400 hover:text-primary-600 transition-colors flex items-center gap-1">
                  Blox Fruits
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://rellseas.fandom.com/wiki/RELL_Seas" target='_blank' className="text-gray-400 hover:text-primary-600 transition-colors flex items-center gap-1">
                  Rell Seas
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">Code of Conduct</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Kraken Pirates. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary-600" /> by the Kraken Pirate Crew
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;