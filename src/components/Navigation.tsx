import React from 'react';
import '../styles/Navigation.scss'; 

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#skills">Навыки</a></li>
        <li><a href="#projects">Проекты</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;