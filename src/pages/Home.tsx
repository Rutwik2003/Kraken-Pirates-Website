import React from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import CrewInfo from '../components/CrewInfo';
import JoinCrew from '../components/JoinCrew';
import CommunityHub from '../components/CommunityHub';
import PremiumRoles from '../components/PremiumRoles';
import Achievements from '../components/Achievements';

const Home = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <CrewInfo />
      <JoinCrew />
      <CommunityHub />
      {/* <PremiumRoles /> */}
      <Achievements />
    </div>
  );
};

export default Home;