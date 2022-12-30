import React from 'react';
import styles from './steps.module.css';

const Step1: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>
          01
          </div>
          <h2 >Аналитика и оценка проекта</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration} >Иллюстрация</div>
          <div className={styles.textContainer}>
            <p className={styles.step__paragraph}>Собираем аналитику и погружаемся
              в контекст - исследуем рынок, анализируем конкурентов.
              Создаем пользовательские сценарии
              и оцениваем объем работы на основе пожеланий и требований клиента.
              </p>
              <p className={styles.step__paragraph}>
    За счет этого мы предусматриваем все проблемные моменты
              и возможные изменения.
              </p>
              <ul className={styles.step__list}>
                <li> Агрегация требований</li>
                <li>Прототипирование</li>
                <li>Техническое задание</li>
              </ul>
            
          </div>
        </div>
        <button className={`${styles.button} ${styles.hidden}`}/>
      </div>
    </div>
  );
};

export default Step1;