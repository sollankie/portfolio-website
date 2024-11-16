import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Иконки
import styles from "../styles/Contacts.module.scss";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className={styles.container}>
      <h2 className={styles.title}>Контакты</h2>
      <ul className={styles.list}>
        <li>
          <FaPhone />
          <a href="tel:+375297266305">+375 29 726 63 05</a>
        </li>
        <li>
          <FaEnvelope />
          <a href="mailto:ignat.pauliuchenka@yandex.ru">ignat.pauliuchenka@yandex.ru</a>
        </li>
        <li>
          <FaGithub />
          <a href="https://github.com/sollankie" target="_blank" rel="noopener noreferrer">
            Sollankie
          </a>
        </li>
        <li>
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/ihnat-pauliuchenka-095a991b9/" target="_blank" rel="noopener noreferrer">
            Ihnat Pauliuchenka
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;


