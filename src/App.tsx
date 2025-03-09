import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';
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

// Page transition wrapper
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <ParallaxProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-primary-900 text-light">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/crew-info" element={<CrewInfo />} />
                      <Route path="/join-crew" element={<JoinCrew />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/premium" element={<Premium />} />
                      <Route path="/achievements" element={<Achievements />} />
                    </Routes>
                  </PageTransition>
                  <Footer />
                </>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </ParallaxProvider>
  );
}

export default App;