import React from 'react';
import styles from './steps.module.css'


const Step4: React.FC = () => {
  return (
    <div className={styles.block2}>
      <h2>Тестирование</h2>
      <div className={styles.block}>
        <div className={styles.il} >Иллюстрация</div>
        <div className={styles.textContainer}>
          <h4>Чтобы мобильные приложения работали без сбоев, а баги фиксились во время. Мы тестируем все приложения в ручную.
            <ul>
              <li>Ручное тестирование</li>
              <li>Автоматическое тестирование</li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Step4;