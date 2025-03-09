import React from "react";
import { Users, Anchor, Sword, Ship, Compass, Crown } from "lucide-react";

const CrewInfo = () => {
  return (
    <section id="crew-info" className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-800/20 rounded-full mb-4">
            <Users className="text-primary-600" size={24} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Crew Information
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn about the history and achievements of the legendary Kraken
            Pirates
          </p>
        </div>

        <div className="md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600">
              Our History
            </h3>
            <p className="text-gray-300 mb-6">
              The story of Kraken Pirates begins with a simple vision: a group
              of passionate gamers coming together to create something
              legendary. United by their love for adventure and competitive
              gameplay, the crew quickly made a name for themselves, dominating
              the seas with unwavering teamwork and unity.
            </p>
            <p className="text-gray-300 mb-6">
              With the announcement of Rell Seas, Kraken Pirates knew it was
              time to think bigger. Even before the game's launch, the crew
              began preparing to conquer the new oceans, determined to rise as a
              dominant force. Their mission remained clear: to dominate, achieve
              greatness, and have fun along the way.
            </p>
            <p className="text-gray-300 mb-6">
              Driven by friendship and a desire for success, Kraken Pirates'
              journey is just beginning. No matter where the seas lead, they are
              ready to rise to the top, one adventure at a time.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">
                  2024
                </span>
                <span>Founded</span>
              </div>
              <div className="h-0.5 flex-1 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">50+</span>
                <span>Members</span>
              </div>
              <div className="h-0.5 flex-1 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">3</span>
                <span>Divisions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/20 rounded-xl p-4 sm:p-8 border border-primary-600/20 mb-20">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center">
            Our Divisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary-900 rounded-lg p-4 border border-primary-600/10 hover:border-primary-600/30 transition-all hover:bg-gray-700/50">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Whale 🐳
              </h4>
              <p className="text-primary-600 text-sm mb-2">Elite tier</p>
              <p className="text-gray-300">Elite Division</p>
              <p className="text-gray-300">Focused on military diplomacy</p>
            </div>
            <div className="bg-primary-900 rounded-lg p-4 border border-primary-600/10 hover:border-primary-600/30 transition-all hover:bg-gray-700/50">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Shark 🦈
              </h4>
              <p className="text-primary-600 text-sm mb-2">Middle tier</p>
              <p className="text-gray-300">Warrior division</p>
              <p className="text-gray-300">Focused on warfare</p>
            </div>
            <div className="bg-primary-900 rounded-lg p-4 border border-primary-600/10 hover:border-primary-600/30 transition-all hover:bg-gray-700/50">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Shrimp 🦐
              </h4>
              <p className="text-primary-600 text-sm mb-2">Common tier</p>
              <p className="text-gray-300">New recruits division</p>
              <p className="text-gray-300">
                Made to help new players reach their full potential.
              </p>
              <p className="text-gray-300">
                Focused on progression and honing skills
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/20 rounded-xl p-4 sm:p-8 border border-primary-600/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center">
            Notable Members
          </h3>
          <div className="flex flex-col gap-4 sm:gap-4">
            {[
              {
                name: "REDNTH1",
                role: "Captain",
                bounty: "10,000,000",
                achievement: "Owner of Kraken Pirates",
                robloxProfile: "https://www.roblox.com/users/5132391259/profile",
              },
              {
                name: "MrDramaLlama",
                role: "Vice-Captain",
                bounty: "10,000,000",
                achievement: "Founded the Kraken Pirates",
                robloxProfile: "https://www.roblox.com/users/1168418967/profile",
              },
              {
                name: "LIGHTNINGQUICK9",
                role: "Commander",
                bounty: "10,000,000",
                achievement: "Commanding the Kraken Pirates",
                robloxProfile: "https://www.roblox.com/users/1865268547/profile",
              },
              {
                name: "SANGASPAR",
                role: "Commander",
                bounty: "10,000,000",
                achievement: "Commanding of the Kraken Pirates",
                robloxProfile: "https://www.roblox.com/users/3754096744/profile",
              },
              {
                name: "WITHMEBUCKS",
                role: "Commander",
                bounty: "10,000,000",
                achievement: "Commanding the Kraken Pirates",
                robloxProfile: "https://www.roblox.com/users/1579812253/profile",
              },
              {
                name: "GABENINJA03",
                role: "Chef",
                bounty: "10,000,000",
                achievement: "Cooked up the Fruit",
                robloxProfile: "https://www.roblox.com/users/72643883/profile",
              },
              {
                name: "XAPOIX929",
                role: "Adventurer",
                bounty: "10,000,000",
                achievement: "Unveiled the World",
                robloxProfile: "https://www.roblox.com/users/1597352583/profile",
              },
              {
                name: "THEHAVOX",
                role: "Sniper",
                bounty: "10,000,000",
                achievement: "Split the SNOWY seas with a single shot",
                robloxProfile: "https://www.roblox.com/users/349542076/profile",
              },
              {
                name: "ROKYKANIN0910",
                role: "Supporter",
                bounty: "10,000,000",
                achievement: "The Kraken Pirates' Supporter",
                robloxProfile: "https://www.roblox.com/users/1414703004/profile",
              },
            ].map((member, index) => (
              <a
                key={index}
                href={member.robloxProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-900 rounded-lg p-4 border border-primary-600/10 hover:border-primary-600/30 transition-all hover:bg-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {member.name}
                      </h4>
                      <div className="px-2 py-1 bg-primary-900/20 rounded text-xs text-primary-600 font-bold">
                        B$ {member.bounty}
                      </div>
                    </div>
                    <p className="text-primary-600 text-sm mb-1">{member.role}</p>
                    <p className="text-gray-400 text-sm">
                      <span className="font-bold">Achievement:</span>{" "}
                      {member.achievement}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewInfo;