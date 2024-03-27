import { Suspense, useEffect, useState } from 'react';
import styles from './Hero.module.css';
import TypewriterComponent from 'typewriter-effect';

const Hero: React.FC = () => {
  const texts = [
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'Frontend Developer',
    'Fullstack Developer',
    'Game Developer',
    'Unity Developer',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted>
          <source src="https://d1fk60b0qsekuw.cloudfront.net/videos/hero" />
        </video>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.texts}>
        <h1 className={styles.name}>Arif Batuhan Yıldırımoğlu</h1>
        <span className={styles.separator}>|</span>
        <span className={styles.generatedText}>
          <TypewriterComponent
            options={{
              strings: texts,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              cursor: '',
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Hero;
