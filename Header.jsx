import React from 'react';

function Header({ toggleTheme, darkMode }) {
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];
  return (
    <header>
      <nav className="navbar">
        <h1>Obed Portfolio</h1>
        <ul style={{
          display: 'flex',
          gap: '30px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}>
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} style={{
                textDecoration: 'none',
                color: '#222',
                fontWeight: 500,
                fontSize: '1.1rem',
                padding: '6px 12px',
                borderRadius: '6px',
                transition: 'background 0.2s',
                display: 'inline-block',
              }}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="toggle-btn"
          style={{
            marginLeft: 24,
            padding: '8px 18px',
            borderRadius: 8,
            border: 'none',
            background: darkMode ? '#222' : '#eee',
            color: darkMode ? '#fff' : '#222',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
// This component renders the header of the portfolio with navigation links and a theme toggle button.
// It accepts `toggleTheme` and `darkMode` as props to manage the theme state