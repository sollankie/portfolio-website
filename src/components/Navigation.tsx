import React from 'react';
import styles from '../styles/Navigation.module.scss'; 

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Главная</li>
        <li className={styles.navItem}>Обо мне</li>
        <li className={styles.navItem}>Проекты</li>
        <li className={styles.navItem}>Контакты</li>
      </ul>
    </nav>
  );
};

export default Navigation;