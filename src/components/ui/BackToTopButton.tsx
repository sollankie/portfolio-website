import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.scss';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Обработчик события прокрутки
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Показываем кнопку
    } else {
      setIsVisible(false); // Скрываем кнопку
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className={`${styles['back-to-top']} ${isVisible ? styles['visible'] : ''}`}
    >
      <span className={styles['arrow']}>↑</span>
    </button>
  );
};

export default BackToTopButton;

