import React from 'react';
import cn from 'classnames';

import illustration_step_4 from '../../../../assets/img/illustrations/Alex595_Manual_testing_IT_illustration_green_54412098-2cb1-440f-b8ca-af9b7b992d23 2.png';

import styles from './steps.module.css';

const Step4: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>04</div>
          <h2>Тестирование</h2>
        </div>
        <div className={styles.block__content}>
          <div className={cn(styles.illustration, styles.illustration_4)}>
            <img src={illustration_step_4} alt="illustration_step_4" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.step__paragraph}>
              Тестирование — это проверка вашего будущего ресурса во&nbsp;всевозможных рабочих
              условиях. Наш QA-тестировщик исследует продукт, проверит правильность его работы
              в&nbsp;различных условиях, сверит его с техзаданием и бизнес-требованиям. Затем
              наверняка отправит на доработку и снова проверит — всё это нужно, чтобы мы вручили вам
              сервис в&nbsp;идеальном состоянии.
            </p>
            {/* <ul className={styles.step__list}>
              <li>Ручное тестирование</li>
              <li>Автоматическое тестирование</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
