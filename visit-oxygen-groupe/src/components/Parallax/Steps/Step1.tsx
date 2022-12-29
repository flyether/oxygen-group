import React from 'react';
import styles from './steps.module.css';

const Step1: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block2}>
        <div className={styles.step__number}>
          01
        </div>
        <h2>Аналитика и оценка проекта</h2>
        <div className={styles.block}>
          <div className={styles.il} >Иллюстрация</div>
          <div className={styles.textContainer}>
            <h4>Собираем аналитику и погружаемся
              в контекст - исследуем рынок, анализируем конкурентов.
              Создаем пользовательские сценарии
              и оцениваем объем работы на основе пожеланий и требований клиента.
              <br />
              За счет этого мы предусматриваем все проблемные моменты
              и возможные изменения.<br />
              <ul>
                <li> Агрегация требований</li>
                <li>Прототипирование</li>
                <li>Техническое задание</li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;