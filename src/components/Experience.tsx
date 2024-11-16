import React from 'react';
import styles from '../styles/Experience.module.scss';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Опыт работы</h2>
      <ul className={styles.list}>
        <li>
          <strong>Продавец-консультант</strong> — <em>Магазин кроссовок</em> (2020–н.в)
          <p>Консультировал клиентов, увеличил продажи и обучал новых сотрудников.</p>
        </li>
        <li>
          <strong>Фриланс</strong> — <em>Frontend-разработчик</em> (2023–н.в)
          <p>Разработал несколько сайтов с использованием React и TypeScript.</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;