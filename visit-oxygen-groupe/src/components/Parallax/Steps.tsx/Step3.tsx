import React from 'react';
import styles from './steps.module.css'


const Step3: React.FC = () => {
  return (
    <div className={styles.block2}>
      <h2>Разработка</h2>
      <div className={styles.block}>
        <div className={styles.il} >Иллюстрация</div>
        <div className={styles.textContainer}>
          <h4>Начинаем с проработки внутренней логики - создаем майндмэп.
            После переносим ее в черно-белый макет для согласования логики.
            <br />
            Когда логика проработана, прорисовываем стили на нескольких экранах, чтобы согласовать общий вид будущего приложения.
            <br />
            Финализируем дизайн и после
            отдаем в разработку.<br />
            <ul>
              <li> Сбор референсов</li>
              <li>Отбор креативных идей</li>
              <li>Дизайн концепция</li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Step3;