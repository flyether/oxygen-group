import React from 'react';

import styles from './steps.module.css';
import illustration_step_1 from '../../../../assets/img/illustrations/analytics.png';

const Step1: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>01</div>
          <h2>Аналитика и оценка проекта</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration}>
            <img src={illustration_step_1} alt="illustration_step_1" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.step__paragraph}>
              Бизнес-анализ — основа основ. Наш специалист изучит задачи вашего бизнеса, определит
              проблемы и цели, исследует рынок и проанализирует конкурентов. На базе этих данных он
              предложит вам возможное решение будущего диджитал-ресурса и составит документы с
              подробным описанием, схемами и диаграммами — они соберут воедино всю информацию для
              вас и станут путеводной картой для команды разработки.
            </p>
            {/* <p className={styles.step__paragraph}>
              За счет этого мы предусматриваем все проблемные моменты
              и возможные изменения.
              </p>
              <ul className={styles.step__list}>
                <li> Агрегация требований</li>
                <li>Прототипирование</li>
                <li>Техническое задание</li>
              </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
