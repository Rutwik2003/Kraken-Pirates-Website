import React from 'react';
import { Users, Anchor, Sword, Ship, Compass, Crown } from 'lucide-react';

const CrewInfo = () => {
  return (
    <section id="crew-info" className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-800/20 rounded-full mb-4">
            <Users className="text-primary-600" size={24} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Crew Information</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn about the history and achievements of the legendary DuckGang
          </p>
        </div>
        
        <div className=" md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600">Our History</h3>
            <p className="text-gray-300 mb-6">
            The story of Duck Gang begins with a simple vision: a group of passionate gamers coming together to create something legendary. Initially starting out in the world of Blox Fruit, the gang was formed by a small group of friends united by their love for adventure and competitive gameplay. It didn’t take long for the crew to make a mark, as they quickly dominated the seas. The crew’s signature trait? Their unwavering teamwork and unity. They didn’t just play together—they supported each other and rose as a true family, thriving together through every obstacle.
            </p>
            <p className="text-gray-300 mb-6">
            As the world of Blox Fruit expanded, so did the ambition of Duck Gang. The members’ passion didn’t stop there. With the announcement of the upcoming game Rell Seas, Duck Gang knew it was time to think bigger. Even before the game officially launched, the crew made preparations to conquer the new oceans of Rell Sea's. Duck Gang’s mission remained the same: to dominate, achieve greatness, and have a blast while doing so. The legendary crews in Rell Seas didn’t know what was coming, as Duck Gang was already getting ready to make its mark as a dominant force in the game.
            </p>
            <p className="text-gray-300 mb-6">
            In every corner of the gaming world, Duck Gang strives to create unforgettable memories. With a strong foundation built on friendship, support, and a desire for greatness, the journey of Duck Gang is only just beginning. And no matter where the seas may lead, the crew’s destiny is clear—they will rise to the top, one adventure at a time.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">2024</span>
                <span>Founded</span>
              </div>
              <div className="h-0.5 flex-1 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">6000+</span>
                <span>Members</span>
              </div>
              <div className="h-0.5 flex-1 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">2</span>
                <span>Divisions</span>
              </div>
            </div>
          </div>
          
          {/* <div className="relative">
            <div className="absolute -inset-4 bg-primary-800/20 rounded-lg blur-xl opacity-70"></div>
            <div className="relative bg-gray-800 rounded-lg p-6 border border-primary-600/30">
              <h3 className="text-2xl font-bold mb-6 text-primary-600 flex items-center gap-2">
                <Anchor size={20} />
                Leadership Structure
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-800/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Crown className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Fleet Admiral</h4>
                    <p className="text-gray-400">DuckKing - Founder and supreme leader of the DuckGang alliance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-800/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sword className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Admirals</h4>
                    <p className="text-gray-400">QuackMaster & SeaDuck - Commanders of our Blox Fruits and Rell Seas divisions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-800/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Ship className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Vice Admirals</h4>
                    <p className="text-gray-400">A council of 5 elite members who oversee daily operations and training</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-800/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Navigators</h4>
                    <p className="text-gray-400">Community moderators who guide new members and maintain order</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        
        <div className="bg-gray-800/20 rounded-xl p-8 border border-primary-600/20">
          <h3 className="text-2xl font-bold mb-6 text-light text-center">Notable Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "REDNTH1",
                role: "Captain",
                bounty: "10,000,000",
                achievement: "Created the Duck Gang"
              },
              {
                name: "LIGHTNINGQUICK9",
                role: "Vice Captain",
                bounty: "10,000,000",
                achievement: "Led the crew with his sharp strategic mind"
              },
              {
                name: "GABENINJA18",
                role: "Chef",
                bounty: "10,000,000",
                achievement: "Cooked up the Duck Fruit"
              },
              {
                name: "XAPOIX929",
                role: "Adventurer",
                bounty: "10,000,000",
                achievement: "Unveiled the Duck World"
              },
            ].map((member, index) => (
              <div key={index} className="bg-primary-900 rounded-lg p-2 border border-primary-600/10 hover:border-primary-600/30 transition-all hover:bg-gray-700/50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <div className="px-2 py-1 bg-primary-900/20 rounded text-xs text-primary-600 font-bold">
                    B$ {member.bounty}
                  </div>
                </div>
                <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">
                  <span className="font-bold">Achievement:</span> {member.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewInfo;