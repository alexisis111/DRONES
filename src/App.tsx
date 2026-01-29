
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProtectionFeatures from './components/ProtectionFeatures';
import HowWeWork from './components/HowWeWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      // Apply theme immediately when component initializes
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return isDark;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark'); // Ensure light theme is active by default
      return false; // Default to light theme
    }
  });

  // Update theme in localStorage and class attribute
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <ProtectionFeatures />
      <HowWeWork />
      <Contact darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
