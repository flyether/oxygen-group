import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css'

const Contacts = () => {

  return (
    <div className={styles.container}>
      Свяжитесь с нами
      <Link to="/" >
        главная
      </Link>
    </div>
  );
};

export default Contacts;
