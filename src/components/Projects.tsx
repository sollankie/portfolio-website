import React from 'react';
import styles from '../styles/Projects.module.scss'; 

const Projects: React.FC = () => {
  return (
    <section id='projects' className={styles.projects}>
      <h2 className={styles.title}>Мои проекты</h2>
      <ul className={styles.projectsList}>
        <li className={styles.project}>Проект 1</li>
        <li className={styles.project}>Проект 2</li>
        <li className={styles.project}>Проект 3</li>
      </ul>
    </section>
  );
};

export default Projects;