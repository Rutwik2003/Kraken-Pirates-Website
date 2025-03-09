import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Swords,
  MessageSquare,
  Trophy,
  Crown,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <div>
      <Hero />
      
      <motion.section
        className="py-20 bg-primary-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          {/* Crew Info Preview */}
          <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <Users className="text-primary-600" size={28} />
              <h2 className="text-3xl font-bold text-white">
                Crew Information
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Our History
                </h3>
                <p className="text-gray-300 mb-6">
                  The story of Kraken Pirates begins with a simple vision: a group
                  of passionate gamers coming together to create something
                  legendary...
                </p>
                <Link
                  to="/crew-info"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Read Full History <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Notable Members
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      name: "REDNTH1",
                      role: "Captain",
                      icon: <Crown size={16} className="text-primary-600" />,
                    },
                    {
                      name: "MrDramaLlama",
                      role: "Vice Captain",
                      icon: <Crown size={16} className="text-primary-600" />,
                    },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="bg-primary-900/30 p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {member.icon}
                        <h4 className="font-bold text-white">{member.name}</h4>
                      </div>
                      <p className="text-primary-600">{member.role}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/crew-info"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Meet All Members <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div className="text-center mt-8" variants={itemVariants}>
              <Link
                to="/crew-info"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors"
              >
                Explore Full Crew Info <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Join Crew Preview */}
          <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <Swords className="text-primary-600" size={28} />
              <h2 className="text-3xl font-bold text-white">Join Our Crew</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">Our Crew</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">
                      Rell Seas Crew
                    </h4>
                    <p className="text-gray-300">
                      Join our elite Rell Seas team and dominate the seas
                    </p>
                  </div>
                </div>
                <Link
                  to="/join-crew"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div className="text-center mt-8" variants={itemVariants}>
              <Link
                to="/join-crew"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors"
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Community Preview */}
          <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <MessageSquare className="text-primary-600" size={28} />
              <h2 className="text-3xl font-bold text-white">Community</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Discord Server
                </h3>
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-primary-900/30 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-primary-600">
                        50+
                      </div>
                      <div className="text-sm text-gray-300">Members</div>
                    </div>
                    <div className="bg-primary-900/30 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-primary-600">
                        60+
                      </div>
                      <div className="text-sm text-gray-300">Channels</div>
                    </div>
                    <div className="bg-primary-900/30 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-primary-600">
                        10+
                      </div>
                      <div className="text-sm text-gray-300">Voice Rooms</div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Join our active Discord community to connect with fellow
                    crew members...
                  </p>
                </div>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Explore Community <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Social Media
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">
                      YouTube Channel
                    </h4>
                    <p className="text-gray-300">
                      Watch our latest adventures and tutorials
                    </p>
                  </div>
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Roblox Group</h4>
                    <p className="text-gray-300">
                      Join our official Roblox community
                    </p>
                  </div>
                </div>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Connect With Us <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div className="text-center mt-8" variants={itemVariants}>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors"
              >
                Join Our Community <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Achievements Preview */}
          <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <Trophy className="text-primary-600" size={28} />
              <h2 className="text-3xl font-bold text-white">Achievements</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">Recent Achievements</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Global Ranking: #1</h4>
                    <p className="text-gray-300">Achieved top position in global rankings</p>
                  </div>
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Community Growth</h4>
                    <p className="text-gray-300">Reached 50+ active members</p>
                  </div>
                </div>
                <Link
                  to="/achievements"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  View All Achievements <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">Notable Members</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">REDNTH1</h4>
                    <p className="text-gray-300">Leader of the Kraken Pirates</p>
                  </div>
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">MrDramaLlama</h4>
                    <p className="text-gray-300">Co-leader of the Kraken Pirates</p>
                  </div>
                </div>
                <Link
                  to="/achievements"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Meet Our Champions <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div className="text-center mt-8" variants={itemVariants}>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors"
              >
                Explore All Achievements <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Allies Preview */}
          {/* <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <HeartHandshake className="text-primary-600" size={28} />
              <h2 className="text-3xl font-bold text-white">Allies</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-primary-800/20 rounded-lg p-6 border border-primary-600/20 hover:border-primary-600/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">Our Allies</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Kraken Pirates</h4>
                  </div>
                </div>
                <Link
                  to="/achievements"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Meet Our Allies <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div className="text-center mt-8" variants={itemVariants}>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-600 text-white font-bold rounded-md transition-colors"
              >
                View Our Allies <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div> */}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
