import React from 'react';
import styles from '../styles/AboutMe.module.scss';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>Обо мне</h2>
      <p className={styles.description}>
        Я разработчик, который любит создавать уникальные и удобные веб-приложения.
      </p>
    </section>
  );
};

export default About;