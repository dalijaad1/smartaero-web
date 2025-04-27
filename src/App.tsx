import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/authStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AdminDashboard from './components/Admin/Dashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useAuthStore((state) => state.setUser);
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, [setUser]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark bg-gray-900' : 'bg-white'}>
        <AnimatePresence>
          {isLoading && <LoadingScreen isDarkMode={isDarkMode} />}
        </AnimatePresence>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/journey" element={<Journey isDarkMode={isDarkMode} />} />
          <Route path="/shop/*" element={<Shop isDarkMode={isDarkMode} />} />
          <Route path="/resources" element={<Resources isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
          <Route path="/admin/*" element={<AdminDashboard isDarkMode={isDarkMode} />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;