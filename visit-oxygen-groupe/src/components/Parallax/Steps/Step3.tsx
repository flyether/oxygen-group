import React from 'react';
import styles from './steps.module.css'


const Step3: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>
          03
          </div>
          <h2>Разработка</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration} >Иллюстрация</div>
          <div className={styles.textContainer}>
            <p className={styles.step__paragraph}>Разработка делится на маленькие этапы, чтобы клиент мог контролировать ход работы и быстро вносить изменения.
            </p>
            <p className={styles.step__paragraph}>
              Пробные релизы делаем в TestFlight и Google Play, чтобы показать как работает приложение на реальных устройствах.
            </p>
            <ul className={styles.step__list}>
              <li>Frontend</li>
              <li>Backend</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;