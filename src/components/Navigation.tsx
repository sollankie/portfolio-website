import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Navigation.module.scss';
import burgerStyles from '../styles/BurgerMenu.module.scss';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); 
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  };

  return (
    <nav className={styles.nav}>
      {isMobile && (
        <div className={burgerStyles.burger} onClick={toggleMenu}>
          <div className={isMenuOpen ? burgerStyles.burgerIconOpen : burgerStyles.burgerIcon}></div>
          <div className={isMenuOpen ? burgerStyles.burgerIconOpen : burgerStyles.burgerIcon}></div>
          <div className={isMenuOpen ? burgerStyles.burgerIconOpen : burgerStyles.burgerIcon}></div>
        </div>
      )}

      <ul className={`${styles.list} ${isMenuOpen && isMobile ? styles.showMenu : ''}`}>
        <li>
          <Link to="contacts" smooth={true} duration={500} className={styles.link}>Контакты</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className={styles.link}>Обо мне</Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} className={styles.link}>Образование</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className={styles.link}>Навыки</Link>
        </li> 
        <li>
          <Link to="experience" smooth={true} duration={500} className={styles.link}>Опыт</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className={styles.link}>Проекты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;






