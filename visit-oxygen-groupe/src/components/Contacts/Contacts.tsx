import React from 'react';
import styles from './Contacts.module.css'

import  Input from './';

const Contacts = () => {

  return (
    <div className={styles.container}>
      <div className={styles.twoDiv}>
        <h1>Связаться
          с нами</h1>
      
          <button className={styles.button}>Отправить</button>
      </div>
      <div className={styles.twoDiv}>

      </div>
    </div>
  );
};

export default Contacts;
