import React from 'react';
import styles from '../styles/Experience.module.scss';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Опыт работы</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <strong>Продавец-консультант</strong>
          <em>Магазин кроссовок</em>
          <p>Консультировал клиентов, увеличил продажи и обучал новых сотрудников.</p>
          <div className={styles.time}>2020–н.в</div> 
        </div>
        <div className={styles.card}>
          <strong>Фриланс</strong>
          <em>Frontend-разработчик</em>
          <p>Разработал несколько сайтов с использованием React и TypeScript.</p>
          <div className={styles.time}>2023–н.в</div> 
        </div>
      </div>
    </section>
  );
};

export default Experience;

