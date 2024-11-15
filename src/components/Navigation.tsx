import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500} className={styles.link}>Обо мне</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className={styles.link}>Навыки</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className={styles.link}>Проекты</Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={500} className={styles.link}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
