import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store/adminStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import CrewInfo from './components/CrewInfo';
import JoinCrew from './components/JoinCrew';
import CommunityHub from './components/CommunityHub';
import PremiumRoles from './components/PremiumRoles';
import Achievements from './components/Achievements';
import AdminPanel from './components/admin/AdminPanel';
import Footer from './components/Footer';

function App() {
  const { isAuthenticated } = useAdminStore();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdminRoute = window.location.pathname === '/admin';
    setIsAdmin(isAdminRoute && isAuthenticated);
  }, [isAuthenticated]);

  if (isAdmin) {
    return <AdminPanel />;
  }

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