import React from 'react';
import styles from './steps.module.css'


const Step4: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>
          04
          </div>
          <h2>Тестирование</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration} >Иллюстрация</div>
          <div className={styles.textContainer}>
            <p className={styles.step__paragraph}>Чтобы мобильные приложения работали без сбоев, а баги фиксились во время. Мы тестируем все приложения в ручную.
            </p>
            <ul className={styles.step__list}>
              <li>Ручное тестирование</li>
              <li>Автоматическое тестирование</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;