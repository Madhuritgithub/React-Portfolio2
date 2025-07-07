import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Home.css';

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="home" className="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#0f2027' },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: '#ffffff' },
          },
        }}
      />
      <div className="home-container">
        <div className="home-image">
          <img src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Madhu" />

        </div>
        <div className="home-text">
          <h1>Hi, I'm <span className="name">Madhu</span></h1>
          <h2>
            <Typewriter
              words={['Web Developer 🚀']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p>I build interactive, fast and beautiful websites using modern  tools.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
