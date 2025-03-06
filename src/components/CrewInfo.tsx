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
            Learn about the history, leadership, and achievements of the legendary DuckGang
          </p>
        </div>
        
        <div className=" md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600">Our History</h3>
            <p className="text-gray-300 mb-6">
              Founded in the treacherous waters of Roblox in 2021, DuckGang quickly rose to prominence through 
              strategic alliances and fearsome combat prowess. What started as a small band of adventurers has 
              grown into one of the most respected gaming communities.
            </p>
            <p className="text-gray-300 mb-6">
              Through countless battles and challenges, we've established ourselves as a dominant force in 
              both Blox Fruits and Rell Seas, with our reputation spreading across the digital seas.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">2021</span>
                <span>Founded</span>
              </div>
              <div className="h-0.5 flex-1 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">500+</span>
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
        
        <div className="bg-gray-800/50 rounded-xl p-8 border border-primary-600/20">
          <h3 className="text-2xl font-bold mb-6 text-primary-600 text-center">Notable Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "ThunderDuck",
                role: "Raid Specialist",
                bounty: "120,000,000",
                achievement: "Defeated the Sea King boss solo"
              },
              {
                name: "QuackAttack",
                role: "PvP Champion",
                bounty: "95,000,000",
                achievement: "Undefeated in 50 consecutive duels"
              },
              {
                name: "GoldenBill",
                role: "Treasure Hunter",
                bounty: "85,000,000",
                achievement: "Discovered the legendary Duck Fruit"
              },
              {
                name: "WaveDiver",
                role: "Explorer",
                bounty: "70,000,000",
                achievement: "Mapped the entire Grand Quack Line"
              },
              {
                name: "FeatherStorm",
                role: "Strategist",
                bounty: "110,000,000",
                achievement: "Orchestrated the Great Duck Invasion"
              },
              {
                name: "DuckTales",
                role: "Chronicler",
                bounty: "65,000,000",
                achievement: "Documented all DuckGang adventures"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 border border-primary-600/10 hover:border-primary-600/30 transition-all hover:bg-gray-700/50">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <div className="px-2 py-1 bg-primary-800/20 rounded text-xs text-primary-600 font-bold">
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