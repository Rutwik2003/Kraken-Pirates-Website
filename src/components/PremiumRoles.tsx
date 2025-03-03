import React from 'react';
import { Crown, Check, CreditCard, Shield, Zap, Gift, Star, Award } from 'lucide-react';

const PremiumRoles = () => {
  const premiumTiers = [
    {
      name: "Exclusive Role",
      price: "$2.99",
      icon: <Star className="text-yellow-400" size={24} />,
      color: "from-yellow-600/20 to-yellow-700/20",
      borderColor: "border-yellow-600/30",
      features: [
        "Custom Discord role with unique color",
        "Access to exclusive Discord channels",
        "Priority queue for crew events",
        "10% boost to crew resource sharing",
        "Monthly exclusive in-game item"
      ]
    },
    {
      name: "Premium Role",
      price: "$4.99",
      icon: <Award className="text-yellow-400" size={24} />,
      color: "from-yellow-600/30 to-yellow-700/30",
      borderColor: "border-yellow-600/40",
      features: [
        "All Exclusive Role benefits",
        "Custom profile badge on Discord",
        "Access to premium trading channels",
        "25% boost to crew resource sharing",
        "Weekly exclusive in-game items",
        "Priority support from crew leaders"
      ]
    },
    {
      name: "Elite Role",
      price: "$9.99",
      icon: <Crown className="text-yellow-400" size={24} />,
      color: "from-yellow-500/30 to-yellow-700/30",
      borderColor: "border-yellow-500/50",
      features: [
        "All Premium Role benefits",
        "Custom title in Discord and in-game",
        "Private voice channels for you and friends",
        "50% boost to crew resource sharing",
        "Daily exclusive in-game items",
        "Direct access to crew leadership",
        "Input on future crew activities",
        "Exclusive monthly training sessions"
      ]
    }
  ];

  return (
    <section id="premium" className="py-20 bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-yellow-600/20 rounded-full mb-4">
            <Crown className="text-yellow-500" size={24} />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Premium Roles</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enhance your DuckGang experience with exclusive benefits and perks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {premiumTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${tier.borderColor} relative`}
            >
              <div className={`bg-gradient-to-br ${tier.color} p-8`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                    <div className="text-3xl font-bold text-yellow-400">{tier.price}</div>
                    <div className="text-sm text-gray-300 mt-1">per month</div>
                  </div>
                  <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center">
                    {tier.icon}
                  </div>
                </div>
                
                <button className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-md transition-colors mt-4 flex items-center justify-center gap-2">
                  <CreditCard size={18} />
                  <span>Subscribe Now</span>
                </button>
              </div>
              
              <div className="bg-gray-800 p-6">
                <h4 className="font-bold text-white mb-4">Features</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-yellow-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Secure Payment</h3>
              <p className="text-gray-300 mb-6">
                All transactions are processed securely through our payment provider. Your financial information is never stored on our servers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-md">
                  <CreditCard size={20} className="text-gray-400" />
                  <span className="text-gray-300">Credit Card</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-md">
                  <Shield size={20} className="text-gray-400" />
                  <span className="text-gray-300">PayPal</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-md">
                  <Zap size={20} className="text-gray-400" />
                  <span className="text-gray-300">Crypto</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-700/30 rounded-lg p-6 border border-yellow-600/10">
                <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                  <Gift className="text-yellow-500" size={20} />
                  <span>Gift a Premium Role</span>
                </h4>
                <p className="text-gray-300 mb-4">
                  Want to surprise a friend or crew mate? You can gift any premium role to another member.
                </p>
                <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-md transition-colors border border-yellow-600/30">
                  Gift Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumRoles;