import React from "react";
import styles from '../styles/Contacts.module.scss';

const Contacts: React.FC = () => {
    return (
        <section id='Contacts' className={styles.container}>
            <h2 className={styles.title}>Контакты</h2>
            <ul className={styles.list}>
                <li>Email: <a href="mailto:ignat.pauliuchenka@yandex.ru">ignat.pauliuchenka@yandex.ru</a></li>
                <li>GitHub: <a href="https://github.com/sollankie" 
                                target="_blank" 
                                rel="noopener noreferrer">sollankie</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/ihnat-pauliuchenka-095a991b9/"
                                        target="_blank"
                                        rel="noopener noreferrer">Ihnat Pauliuchenka</a></li>
            </ul>
        </section>
    )
} 

export default Contacts;