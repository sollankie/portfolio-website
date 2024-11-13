import React from 'react';
import styles from '../styles/Header.module.scss'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Добро пожаловать на мой сайт!</h1>
    </header>
  );
};

export default Header;