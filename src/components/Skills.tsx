import React from 'react';
import styles from '../styles/Skills.module.scss';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Мои навыки</h2>
      <ul className={styles.skillsList}>
        <li className={styles.skill}>React</li>
        <li className={styles.skill}>TypeScript</li>
        <li className={styles.skill}>HTML & CSS</li>
        <li className={styles.skill}>Node.js</li>
        <li className={styles.skill}>Git</li>
      </ul>
    </section>
  );
};

export default Skills;