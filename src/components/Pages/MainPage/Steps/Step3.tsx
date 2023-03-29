import React from 'react';

import styles from './steps.module.css';
import illustration_step_3 from '../../../../assets/img/illustrations/Alex595_Programming_illustration_green_1 1.png';

const Step3: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>03</div>
          <h2>Разработка</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration}>
            <img src={illustration_step_3} alt="illustration_step_3" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.step__paragraph}>
              Разработка — это каркас и&nbsp;механика диджитал-проекта. Наши разработчики вдохнут
              жизнь в&nbsp;ваш ресурс и заставят шестерёнки крутиться. Бэкенд обеспечит хранение и
              работу с&nbsp;данными на серверах, а&nbsp;фронтенд проложит связь между этими данными
              и макетом дизайнера. Мы проведём разработку небольшими этапами, затем сделаем пробный
              релиз и&nbsp;протестируем проект на&nbsp;конкретных устройствах.
            </p>
            {/* <ul className={styles.step__list}>
              <li>Frontend</li>
              <li>Backend</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
