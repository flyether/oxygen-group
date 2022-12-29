import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css'

const Main = () => {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>РАЗРАБОТКА
      ЦИФРОВЫХ
      РЕШЕНИЙ</h1>
      </div>
      <div className={styles.illustration}>
    <p>иллюстрация</p>
      </div>
      

    </div>
  );
};

export default Main;