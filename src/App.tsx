import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import CrewInfo from './components/CrewInfo';
import JoinCrew from './components/JoinCrew';
import CommunityHub from './components/CommunityHub';
import PremiumRoles from './components/PremiumRoles';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-primary-900 text-light">
      <Navbar />
      <Hero />
      <Timeline />
      <CrewInfo />
      <JoinCrew />
      <CommunityHub />
      <PremiumRoles />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;