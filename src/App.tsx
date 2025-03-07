import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CrewInfo from './pages/CrewInfo';
import JoinCrew from './pages/JoinCrew';
import Community from './pages/Community';
import Premium from './pages/Premium';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-primary-900 text-light">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crew-info" element={<CrewInfo />} />
            <Route path="/join-crew" element={<JoinCrew />} />
            <Route path="/community" element={<Community />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;