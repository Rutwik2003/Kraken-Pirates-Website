import React, { useState } from 'react';
import { UserPlus, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JoinCrew = () => {
  const [selectedDivision, setSelectedDivision] = useState<'blox' | 'rell' | null>(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const bloxFruitsFaqs = [
    {
      question: "How to join discord?",
      answer: "To join Discord, click the 'Apply to Blox Fruits Division' button below. You’ll be redirected to our Discord server, where you can find the Crew channel and join the Blox Fruits Division."
    },
    {
      question: "How to join Roblox Group?",
      answer: "To join our Roblox Group, visit our official group page at !DUCKGANG! and click 'Join Group'. Then, head to the Crew channel in Discord for further instructions."
    },
    {
      question: "How active do I need to be?",
      answer: "We expect members to participate in at least 2 crew activities per week and be active in our Discord community."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, new members undergo a 2-week trial period during which they must participate in crew activities and demonstrate their loyalty and teamwork."
    }
  ];

  const rellSeasFaqs = [
    {
      question: "How to join discord?",
      answer: "To join Discord, click the 'Apply to Rell Seas Division' button below. You’ll be redirected to our Discord server, where you can find the Crew channel and join the Rell Seas Division."
    },
    {
      question: "How to join Roblox Group?",
      answer: "To join our Roblox Group, visit our official group page at !DUCKGANG! and click 'Join Group'. Then, head to the Crew channel in Discord for further instructions."
    },
  ];

  // Define separate join links for each division
  const joinLinks = {
    blox: "https://discord.xyz/quacky", // Replace with your Blox Fruits Discord invite link
    rell: "https://discord.gg/5T8Yp7PWqC", // Replace with your Rell Seas Discord invite link
  };

  return (
    <section id="join-crew" className="py-20 bg-primary-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-primary-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-primary-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-900 rounded-full mb-4">
            <UserPlus className="text-primary-600" size={24} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Join Our Crews</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your division and become part of the legendary DuckGang
          </p>
        </div>
        
        {/* Division Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <button
            onClick={() => setSelectedDivision(selectedDivision === 'blox' ? null : 'blox')}
            className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              selectedDivision === 'blox' 
                ? 'border-primary-600 bg-primary-800/50' 
                : 'border-primary-600/20 bg-gray-800/30 hover:border-primary-600/50'
            }`}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Blox Fruits Division</h3>
              <p className="text-gray-300 mb-4">Join the Blox Fruit Division and dominate the seas with teamwork and epic adventures. Rise to the top with Duck Gang in Blox Fruit!</p>
              <div className="flex items-center text-primary-600">
                <span className="mr-2">View Details</span>
                {selectedDivision === 'blox' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedDivision(selectedDivision === 'rell' ? null : 'rell')}
            className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              selectedDivision === 'rell' 
                ? 'border-primary-600 bg-primary-800/50' 
                : 'border-primary-600/20 bg-gray-800/30 hover:border-primary-600/50'
            }`}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Rell Seas Division</h3>
              <p className="text-gray-300 mb-4">Be part of Duck Gang's Rell Seas Division! Get ready for legendary adventures, as we dominate the new world of Rell Seas from day one!</p>
              <div className="flex items-center text-primary-600">
                <span className="mr-2">View Details</span>
                {selectedDivision === 'rell' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
          </button>
        </div>

        {/* Division Details */}
        <AnimatePresence>
          {selectedDivision && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Requirements and Process */}
                <div>
                  <div className="space-y-6">
                    <div className="bg-gray-800/20 rounded-lg p-6 border border-primary-600/20">
                      <h4 className="text-xl font-bold mb-4 text-white">Requirements</h4>
                      <ul className="space-y-3">
                        {selectedDivision === 'blox' ? (
                          <>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>Join the Roblox Group:</strong> Become an official member by joining our Roblox group: <strong>!DUCKGANG!</strong> It’s where the true Duck Gang stands united.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>Discord Account:</strong> Communication is key! You must have a Discord account to stay connected with the crew.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>Minimum Bounty:</strong> You must have at least 20 million bounty to show your worth on the seas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>Duckgang Gear:</strong> Equip yourself with the "Tiny Duck" skin or proudly wear our Duck Gang merch, available in our official group store. <strong>!DUCKGANG!</strong>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>PvP Challenge:</strong> To prove your skills and gain entry, you'll need to PvP one of our members. Ready to show us what you’ve got? Simply call out any Duck Gang member in our Discord to challenge them.</span>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>Join the Roblox Group:</strong> Become an official member by joining our Roblox group: <strong>!DUCKGANG!</strong> It’s where the true Duck Gang stands united.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} className="text-primary-400" />
                              </div>
                              <span className="text-gray-300"><strong>Discord Account:</strong> Communication is key! You must have a Discord account to stay connected with the crew.</span>
                            </li>
                          </>
                        )}
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={14} className="text-primary-400" />
                          </div>
                          <span className="text-gray-300"><strong>Active Participation:</strong> We’re all about engagement! You need to participate in at least 2 events per week to keep the crew active and thriving.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="bg-gray-800/20 rounded-lg p-6 border border-primary-600/20">
                  <h4 className="text-xl font-bold mb-4 text-white">Frequently Asked Questions</h4>
                  <div className="space-y-3">
                    {(selectedDivision === 'blox' ? bloxFruitsFaqs : rellSeasFaqs).map((faq, index) => (
                      <div 
                        key={index} 
                        className={`border ${
                          expandedFaq === index 
                            ? 'border-primary-600/30 bg-gray-800/30' 
                            : 'border-primary-600/20 bg-gray-800/20'
                        } rounded-lg transition-all`}
                      >
                        <button
                          className="w-full px-4 py-3 flex justify-between items-center"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium text-left text-white">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp size={18} className="text-primary-600" />
                          ) : (
                            <ChevronDown size={18} className="text-gray-400" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="px-4 pb-3 text-gray-300">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href={selectedDivision === 'blox' ? joinLinks.blox : joinLinks.rell} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-md transition-colors shadow-lg">
                    Apply to {selectedDivision === 'blox' ? 'Blox Fruits' : 'Rell Seas'} Division
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default JoinCrew;