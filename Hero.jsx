import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%)',
        padding: '60px 20px 40px 20px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(60,60,120,0.07)',
        borderRadius: 18,
        margin: '40px auto 32px auto',
        maxWidth: 700,
      }}
    >
      {/* Simple web developer SVG illustration */}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 12 }}>
        <rect x="10" y="20" width="60" height="40" rx="8" fill="#6366f1"/>
        <rect x="18" y="28" width="44" height="24" rx="4" fill="#fff"/>
        <rect x="22" y="34" width="12" height="4" rx="2" fill="#6366f1"/>
        <rect x="36" y="34" width="20" height="4" rx="2" fill="#e0e7ff"/>
        <rect x="22" y="42" width="24" height="4" rx="2" fill="#e0e7ff"/>
        <rect x="48" y="42" width="8" height="4" rx="2" fill="#6366f1"/>
        <circle cx="40" cy="60" r="4" fill="#6366f1"/>
      </svg>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 800,
        color: '#6366f1',
        marginBottom: 8,
        letterSpacing: '-1px',
      }}>
        SEZIBERA Obed
      </h1>
      <h2 style={{
        fontSize: '2.1rem',
        fontWeight: 700,
        color: '#2d2d4d',
        marginBottom: 12,
        letterSpacing: '-1px',
      }}>
        Welcome to My Portfolio
      </h2>
      <p style={{
        fontSize: '1.25rem',
        color: '#444',
        marginBottom: 28,
        maxWidth: 500,
        lineHeight: 1.6,
      }}>
        I am a passionate web developer who loves building beautiful and functional websites.
      </p>
      <a
        href="#projects"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
          color: '#fff',
          padding: '14px 36px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 12px rgba(99,102,241,0.10)',
          transition: 'background 0.2s',
        }}
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
