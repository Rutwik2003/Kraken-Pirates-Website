import React, { useState } from 'react';
import { UserPlus, ChevronDown, ChevronUp, Check } from 'lucide-react';

const JoinCrew = () => {
  const [activeTab, setActiveTab] = useState('blox');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const bloxFruitsFaqs = [
    {
      question: "What level do I need to be to join?",
      answer: "We require a minimum level of 1000 for regular members. However, exceptions can be made for dedicated players who show exceptional skill or potential."
    },
    {
      question: "Do I need to have specific Devil Fruits?",
      answer: "No specific Devil Fruit is required, but we do recommend having at least one Awakened fruit. Our crew values skill over specific abilities."
    },
    {
      question: "How active do I need to be?",
      answer: "We expect members to participate in at least 2 crew activities per week and be active in our Discord community."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, new members undergo a 2-week trial period during which they must participate in crew activities and demonstrate their skills and teamwork."
    }
  ];

  const rellSeasFaqs = [
    {
      question: "What are the ship requirements?",
      answer: "You should have at least a Tier 3 ship with basic combat capabilities. We can help newer players upgrade their vessels through crew activities."
    },
    {
      question: "Do I need specific weapons or abilities?",
      answer: "While not required, having at least one Mythical weapon or ability will help you contribute more effectively to crew activities."
    },
    {
      question: "How does the ranking system work?",
      answer: "New members start as Deckhands and can progress through ranks based on participation, contribution to crew goals, and skill demonstration."
    },
    {
      question: "Are there territory defense requirements?",
      answer: "Yes, all members are expected to participate in territory defense when called upon. This is a crucial part of maintaining our crew's standing."
    }
  ];

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
            Become part of the legendary DuckGang and sail the digital seas with the most fearsome crew
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md p-1 bg-gray-800">
            <button
              onClick={() => setActiveTab('blox')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'blox' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Blox Fruits Division
            </button>
            <button
              onClick={() => setActiveTab('rell')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'rell' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Rell Seas Division
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Requirements and Process */}
          <div>
            {activeTab === 'blox' ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-primary-600">Blox Fruits Division</h3>
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6 border border-primary-600/20">
                    <h4 className="text-xl font-bold mb-4 text-white">Requirements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Minimum Level 1000</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">At least one Awakened Devil Fruit (preferred)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Basic understanding of raid mechanics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Discord account for communication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Active participation (minimum 2 events per week)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6 border border-primary-600/20">
                    <h4 className="text-xl font-bold mb-4 text-white">Application Process</h4>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Join Our Discord</h5>
                          <p className="text-gray-400">Connect with our community and introduce yourself</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Complete Application Form</h5>
                          <p className="text-gray-400">Fill out our recruitment questionnaire</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Skill Assessment</h5>
                          <p className="text-gray-400">Participate in a raid or PvP session with current members</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">2-Week Trial Period</h5>
                          <p className="text-gray-400">Prove your worth and commitment to the crew</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">5</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Official Induction</h5>
                          <p className="text-gray-400">Receive your crew role and begin your journey</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-primary-600">Rell Seas Division</h3>
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6 border border-primary-600/20">
                    <h4 className="text-xl font-bold mb-4 text-white">Requirements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Tier 3 Ship or higher</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">At least one Mythical weapon/ability (preferred)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Understanding of naval combat tactics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Discord account for communication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-primary-400" />
                        </div>
                        <span className="text-gray-300">Willingness to participate in territory defense</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6 border border-primary-600/20">
                    <h4 className="text-xl font-bold mb-4 text-white">Application Process</h4>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Join Our Discord</h5>
                          <p className="text-gray-400">Connect with our community and introduce yourself</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Ship Inspection</h5>
                          <p className="text-gray-400">Showcase your vessel and equipment</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Naval Combat Trial</h5>
                          <p className="text-gray-400">Demonstrate your sailing and combat abilities</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">2-Week Trial Period</h5>
                          <p className="text-gray-400">Participate in crew activities and territory defense</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">5</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Official Induction</h5>
                          <p className="text-gray-400">Receive your crew rank and begin your journey</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Right side - Benefits and FAQs */}
          <div>
            <div className="bg-gray-800 rounded-lg p-6 border border-primary-600/20 mb-8">
              <h4 className="text-xl font-bold mb-4 text-white">Crew Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-light mb-2">Training & Mentorship</h5>
                  <p className="text-gray-300 text-sm">Learn from experienced players who will help you master game mechanics</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-light mb-2">Resource Sharing</h5>
                  <p className="text-gray-300 text-sm">Access to crew resources, items, and assistance with farming</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-light mb-2">Raid & Boss Teams</h5>
                  <p className="text-gray-300 text-sm">Organized teams for tackling difficult content and bosses</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-light mb-2">Territory Protection</h5>
                  <p className="text-gray-300 text-sm">Safe zones for farming and protection from rival crews</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-light mb-2">Weekly Events</h5>
                  <p className="text-gray-300 text-sm">Fun competitions with in-game and real prizes</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-light mb-2">Advancement Path</h5>
                  <p className="text-gray-300 text-sm">Clear progression system with increasing benefits and responsibilities</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-primary-600/20">
              <h4 className="text-xl font-bold mb-4 text-white">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {(activeTab === 'blox' ? bloxFruitsFaqs : rellSeasFaqs).map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border ${
                      expandedFaq === index 
                        ? 'border-primary-600/30 bg-gray-700/30' 
                        : 'border-gray-700 bg-gray-800'
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
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-md transition-colors shadow-lg">
            Apply to Join DuckGang
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCrew;