import React from 'react';
import styles from '../styles/Education.module.scss';

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Образование</h2>
      <p>Самоучка с огромным интересом к программированию. Изучаю React и TypeScript для будущей карьеры разработчика.</p>
    </section>
  );
};

export default Education;