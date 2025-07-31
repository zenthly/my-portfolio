import React from 'react';

const projects = [
  {
    title: 'Weather Dashboard',
    img: "<image /Screenshot 2025-07-31 121555.png",
    desc: 'A live weather app using OpenWeather API, built with JavaScript and styled with Bootstrap.',
    link: 'https://weather-widget-dash.netlify.app/',
  },
  {
    title: 'MindCare Chatbot',
    img: 'images/',
    desc: 'A mental health chatbot built with HTML, CSS, and JavaScript. It allows users to express emotions safely.',
    link: 'https://yourlink.com/mindcare',
  },
  {
    title: 'Image Carousel',
    img: 'images/Screenshot 2025-07-31 122056.png',
    desc: 'A smooth sliding image carousel with JavaScript that loops and supports multiple images.',
    link: 'https://interactive-image-carousel1.netlify.app/',
  },
];

function Projects() {
  return (
    <section id="projects" style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#222' }}>My Projects</h2>
      <p style={{ textAlign: 'center', color: '#555', maxWidth: 600, margin: '0 auto 40px' }}>
        Here are some of the cool projects I’ve built. Click on them to see more!
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 30,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background: 'white',
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{ width: '100%', height: 180, objectFit: 'cover' }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ marginBottom: 10 }}>{project.title}</h3>
              <p style={{ color: '#666' }}>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff' }}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
