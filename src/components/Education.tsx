import React from 'react';
import styles from '../styles/Education.module.scss';

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Образование</h2>
      <ul className={styles.list}>
        <li>
          <strong>Школа программирования TeachMeSkills</strong> — <em>Frontend Developer</em> 
          <span className={styles.period}>март 2023 – декабрь 2023</span>
          <p>
            Изучал React, TypeScript, адаптивную верстку, работу с API, Git. 
            Выполнил проекты, включая SPA и сайты с использованием современных технологий.
          </p>
        </li>
        <li>
          <strong>Высшая школа финансов и управления в Белостоке</strong> — <em>Бизнес-администрирование</em> 
          <span className={styles.period}>сентябрь 2018 – июль 2021</span>
          <p>
            Освоил управление проектами, основы экономики, маркетинга и финансового анализа.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Education;

