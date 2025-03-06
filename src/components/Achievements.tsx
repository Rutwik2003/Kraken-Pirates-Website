import React, { useState } from 'react';
import { Trophy, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Achievements = () => {
  const [currentPoster, setCurrentPoster] = useState(0);
  
  const wantedPosters = [
    {
      name: "ThunderDuck",
      bounty: "120,000,000",
      achievement: "Defeated the Sea King boss solo",
      description: "Known for his lightning-fast attacks and strategic mind, ThunderDuck has become a legend among the crew for his solo defeat of the fearsome Sea King boss that had terrorized our waters for months."
    },
    {
      name: "QuackAttack",
      bounty: "95,000,000",
      achievement: "Undefeated in 50 consecutive duels",
      description: "A master of PvP combat, QuackAttack has developed a fighting style that combines unpredictable movements with devastating combos, leading to an unprecedented 50-win streak."
    },
    {
      name: "GoldenBill",
      bounty: "85,000,000",
      achievement: "Discovered the legendary Duck Fruit",
      description: "After months of searching ancient maps and following cryptic clues, GoldenBill uncovered the mythical Duck Fruit, granting its user the ability to transform and control water currents."
    },
    {
      name: "WaveDiver",
      bounty: "70,000,000",
      achievement: "Mapped the entire Grand Quack Line",
      description: "Braving treacherous waters and hostile territories, WaveDiver has created the most comprehensive map of the Grand Quack Line, revealing hidden islands and secret passages."
    },
    {
      name: "FeatherStorm",
      bounty: "110,000,000",
      achievement: "Orchestrated the Great Duck Invasion",
      description: "A tactical genius, FeatherStorm planned and executed the legendary Great Duck Invasion, allowing our crew to claim three major territories in a single coordinated attack."
    }
  ];
  
  const achievements = [
    {
      title: "Blox Fruits Champions",
      date: "August 2023",
      description: "Defeated all raid bosses in a single day with no casualties",
      icon: <Trophy className="text-primary-500" size={24} />
    },
    {
      title: "Territory Dominance",
      date: "October 2023",
      description: "Controlled 5 major territories simultaneously for over a month",
      icon: <Trophy className="text-primary-500" size={24} />
    },
    {
      title: "Legendary Alliance",
      date: "December 2023",
      description: "Formed the Grand Quack Alliance with 3 other major crews",
      icon: <Trophy className="text-primary-500" size={24} />
    },
    {
      title: "Rell Seas Armada",
      date: "February 2024",
      description: "Assembled a fleet of 20+ Tier 5 ships, the largest in the game",
      icon: <Trophy className="text-primary-500" size={24} />
    },
    {
      title: "Community Growth",
      date: "April 2024",
      description: "Reached 500 active members across all divisions",
      icon: <Trophy className="text-primary-500" size={24} />
    },
    {
      title: "Charity Event",
      date: "May 2024",
      description: "Raised $5,000 for children's charity through in-game events",
      icon: <Trophy className="text-primary-500" size={24} />
    }
  ];
  
  const stats = [
    // { label: "Crew Members", value: "500+" },
    // { label: "Territories", value: "8" },
    // { label: "Raid Bosses Defeated", value: "250+" },
    // { label: "PvP Win Rate", value: "78%" },
    // { label: "Alliance Partners", value: "12" },
    // { label: "Total Bounty", value: "1.2B" }
  ];

  const nextPoster = () => {
    setCurrentPoster((prev) => (prev === wantedPosters.length - 1 ? 0 : prev + 1));
  };

  const prevPoster = () => {
    setCurrentPoster((prev) => (prev === 0 ? wantedPosters.length - 1 : prev - 1));
  };

  return (
    <section id="achievements" className="py-20 bg-primary-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-600/20 rounded-full mb-4">
            <Trophy className="text-primary-500" size={24} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Crew Achievements</h2>
          <p className="text-xl text-primary-400 max-w-2xl mx-auto">
            Explore the legendary accomplishments and notorious members of the DuckGang
          </p>
        </div>
        
        {/* Wanted Posters Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Most Wanted Crew Members</h3>
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-primary-800/30 rounded-lg border-2 border-primary-600 p-6 backdrop-blur-sm">
                  <div className="text-center text-primary-400 font-bold text-xl mb-4">WANTED</div>
                  <div className="w-32 h-32 mx-auto bg-primary-900/50 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-500">{wantedPosters[currentPoster].name.charAt(0)}</span>
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="text-2xl font-bold text-white">{wantedPosters[currentPoster].name}</h4>
                    <p className="text-gray-300">{wantedPosters[currentPoster].achievement}</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 text-center">
                    {wantedPosters[currentPoster].description}
                  </p>
                  <div className="text-center text-primary-400 font-bold">
                    <div className="text-lg">REWARD</div>
                    <div className="text-3xl">B$ {wantedPosters[currentPoster].bounty}</div>
                  </div>
                </div>
                
                <button 
                  onClick={prevPoster}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center border border-primary-600/30 hover:bg-primary-900 transition-colors"
                >
                  <ChevronLeft className="text-primary-500" size={20} />
                </button>
                <button 
                  onClick={nextPoster}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center border border-primary-600/30 hover:bg-primary-900 transition-colors"
                >
                  <ChevronRight className="text-primary-500" size={20} />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {wantedPosters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPoster(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentPoster === index ? 'bg-primary-500' : 'bg-light'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Notable Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Allies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all hover:bg-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                    <p className="text-primary-400 text-sm mb-2">{achievement.date}</p>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Crew Statistics */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Crew Statistics</h3>
          <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
            {/* <div className="mt-8 pt-8 border-t border-gray-700"> */}
              <div className="flex items-center gap-3 justify-center">
                <Star className="text-primary-500" size={20} />
                <h4 className="text-xl font-bold text-white">Global Ranking: #1</h4>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;