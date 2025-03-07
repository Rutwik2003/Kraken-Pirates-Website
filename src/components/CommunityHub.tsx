import React from 'react';
import { MessageSquare, Calendar, Image, ExternalLink, Disc as Discord, Twitter, Youtube, Instagram } from 'lucide-react';

const CommunityHub = () => {
  const events = [
    // {
    //   name: "Weekly Raid Night",
    //   date: "Every Friday",
    //   time: "8:00 PM EST",
    //   description: "Join forces with crew members to tackle the toughest raids"
    // },
    // {
    //   name: "PvP Tournament",
    //   date: "Last Saturday of Month",
    //   time: "3:00 PM EST",
    //   description: "Test your skills against other crew members for prizes and glory"
    // },
    // {
    //   name: "Newbie Training",
    //   date: "Every Tuesday",
    //   time: "7:00 PM EST",
    //   description: "Learn game mechanics and strategies from veteran players"
    // },
    // {
    //   name: "Boss Hunt",
    //   date: "Every Sunday",
    //   time: "2:00 PM EST",
    //   description: "Group expedition to hunt rare bosses and collect valuable loot"
    // }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Crew Victory"
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Sea Battle"
    },
    {
      url: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Treasure Hunt"
    },
    {
      url: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Crew Meeting"
    },
    {
      url: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Island Exploration"
    },
    {
      url: "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Naval Battle"
    }
  ];

  return (
    <section id="community" className="py-20 bg-primary-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-800/20 rounded-full mb-4">
            <MessageSquare className="text-primary-600" size={24} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Community Hub</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow crew members and stay updated on all DuckGang activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Discord Server */}
          <div className="bg-primary-900 rounded-xl overflow-hidden border border-primary-600/20">
            <div className="bg-primary-800/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Discord className="text-primary-600" size={32} />
                <h3 className="text-2xl font-bold text-white">Discord Server</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Join our active Discord community to connect with other members, participate in events, and stay updated on all crew activities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-700/50 px-4 py-2 rounded-md text-gray-300">
                  <span className="font-bold text-primary-600">6000+</span> Members
                </div>
                <div className="bg-gray-700/50 px-4 py-2 rounded-md text-gray-300">
                  <span className="font-bold text-primary-600">50+</span> Channels
                </div>
                <div className="bg-gray-700/50 px-4 py-2 rounded-md text-gray-300">
                  <span className="font-bold text-primary-600">20+</span> Voice Rooms
                </div>
              </div>
            </div>
            <div className="p-6 bg-primary-900">
              <h4 className="font-bold text-white mb-4">Key Channels</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-light">
                  <span className="text-primary-600">#</span>
                  <span>Announcements</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-primary-600">#</span>
                  <span>Roles</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-primary-600">#</span>
                  <span>Chat</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-primary-600">#</span>
                  <span>Giveaways</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-primary-600">#</span>
                  <span>Events</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-primary-600">#</span>
                  <span>Rell seas info</span>
                </div>
              </div>
              <a href='https://discord.xyz/quacky' target='_blank'>
              <button className="w-full py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors flex items-center justify-center gap-2">
                <Discord size={18} />
                <span>Join Our Discord</span>
              </button></a>
            </div>
          </div>
          
          {/* Events Calendar */}
          <div className="bg-primary-900 rounded-xl overflow-hidden border border-primary-600/20">
            <div className="bg-primary-800/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary-600" size={32} />
                <h3 className="text-2xl font-bold text-white">Events Calendar</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Never miss an important crew event. Our calendar keeps you updated on all scheduled activities, raids, and special occasions.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-white mb-4">Upcoming Events</h4>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-4 border border-primary-600/10">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-white">{event.name}</h5>
                      <div className="px-2 py-1 bg-primary-800/20 rounded text-xs text-primary-600 font-bold">
                        {event.date}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{event.description}</p>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock size={14} className="text-primary-600" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors mt-6 flex items-center justify-center gap-2 border border-primary-600/30">
                <Calendar size={18} />
                <span>View Full Calendar</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        {/* <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Image className="text-primary-600" size={24} />
              <h3 className="text-2xl font-bold text-white">Screenshots Gallery</h3>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors border border-gray-700">
              <span>View All</span>
              <ExternalLink size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* Social Media */}
        <div className="bg-primary-900 rounded-xl p-8 border border-primary-600/20">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Follow Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <a href="https://discord.xyz/quacky" target='_blank' className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-800/20 flex items-center justify-center">
                <Discord className="text-primary-600" size={24} />
              </div>
              <span className="font-bold text-white">Discord</span>
              <span className="text-gray-400 text-sm">@DuckGang</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-800/20 flex items-center justify-center">
                <Twitter className="text-primary-600" size={24} />
              </div>
              <span className="font-bold text-white">Twitter</span>
              <span className="text-gray-400 text-sm">@DuckGangCrew</span>
            </a>
            <a href="https://www.youtube.com/@Duck_Law" target='_blank' className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-800/20 flex items-center justify-center">
                <Youtube className="text-primary-600" size={24} />
              </div>
              <span className="font-bold text-white">YouTube</span>
              <span className="text-gray-400 text-sm">DuckGang Official</span>
            </a>
            {/* <a href="#" className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-primary-700/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-800/20 flex items-center justify-center">
                <Instagram className="text-primary-600" size={24} />
              </div>
              <span className="font-bold text-white">Instagram</span>
              <span className="text-gray-400 text-sm">@duckgang_official</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the missing Clock component
const Clock = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};

export default CommunityHub;