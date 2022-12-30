import React from 'react';
import styles from './steps.module.css';

const Step2: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>
          02
          </div>
          <h2 >UX/UI дизайн</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration} >Иллюстрация</div>
          <div className={styles.textContainer}>
            <p className={styles.step__paragraph}>Начинаем с проработки внутренней логики - создаем майндмэп.После переносим ее в черно-белый макет для согласования логики.
            </p>
            <p className={styles.step__paragraph}>
              Когда логика проработана, прорисовываем стили на нескольких экранах, чтобы согласовать общий вид будущего приложения.
            </p>
            <p className={styles.step__paragraph}>
              Финализируем дизайн и после отдаем в разработку.
            </p>
            <ul className={styles.step__list}>
              <li>Сбор референсов</li>
              <li>Отбор креативных идей</li>
              <li>Дизайн концепция</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;