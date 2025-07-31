import React, { useEffect } from 'react';
import './App.css';
import Header from './my-app/src/components/Header';
import Hero from './components/Hero';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  // Toggle function
  const toggleTheme = () => setDarkMode(!darkMode);

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
    </div>
  );
}

export default App;
