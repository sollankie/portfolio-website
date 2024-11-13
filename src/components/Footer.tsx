import React from 'react';
import styles from '../styles/Footer.module.scss'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2024 Мой сайт</p>
    </footer>
  );
};

export default Footer;