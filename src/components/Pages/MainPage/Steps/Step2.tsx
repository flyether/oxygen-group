import React from 'react';

import styles from './steps.module.css';
import illustration_step_2 from '../../../../assets/img/illustrations/Alex595_UXUI_illustration_green_1 1.png';

const Step2: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.block}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>02</div>
          <h2>UX/UI дизайн</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration}>
            <img src={illustration_step_2} alt="illustration_step_2" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.step__paragraph}>
              Дизайн — это не просто красиво. Сначала команда продумает все внутренние связи вашего
              будущего диджитал-ресурса и&nbsp;отразит их в специальной схеме — mindmap. Затем
              UX/UI-дизайнер соберёт детальный макет, а UX-писатель текстами поможет пользователю
              сориентироваться. И, наконец, к&nbsp;эстетике: мы проработаем стилистику и создадим
              внешний вид проекта. Каждый этап согласуем с вами.
            </p>
            {/* <ul className={styles.step__list}>
              <li>Сбор референсов</li>
              <li>Отбор креативных идей</li>
              <li>Дизайн концепция</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
