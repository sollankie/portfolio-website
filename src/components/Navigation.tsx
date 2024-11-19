import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Navigation.module.scss';
import burgerStyles from '../styles/BurgerMenu.module.scss';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем изменение размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  // Мобильный экран — меньше 768px
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // вызываем сразу, чтобы получить начальное состояние
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Меняем состояние меню
  };

  return (
    <nav className={styles.nav}>
      {isMobile && (
        // Бургер-меню для мобильных экранов
        <div className={burgerStyles.burger} onClick={toggleMenu}>
          <div className={isMenuOpen ? burgerStyles.burgerIconOpen : burgerStyles.burgerIcon}></div>
          <div className={isMenuOpen ? burgerStyles.burgerIconOpen : burgerStyles.burgerIcon}></div>
          <div className={isMenuOpen ? burgerStyles.burgerIconOpen : burgerStyles.burgerIcon}></div>
        </div>
      )}

      {/* Если экран мобильный, показываем скрытое меню, иначе обычное горизонтальное меню */}
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






