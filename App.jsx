
import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle function
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Optional: Save preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
