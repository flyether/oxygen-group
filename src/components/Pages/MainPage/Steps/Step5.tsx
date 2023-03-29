import React from 'react';
import cn from 'classnames';

import styles from './steps.module.css';
import illustration_step_5 from '../../../../assets/img/illustrations/Alex595_Integration_into_the_project_illustration_green_7c64c93e-5121-408a-ac10-89b67c661820 2.png';

const Step5: React.FC = () => {
  return (
    <div className={styles.slideContainer}>
      <div className={cn(styles.block, styles.last_block)}>
        <div className={styles.step__heading}>
          <div className={styles.step__number}>05</div>
          <h2>Интеграции и релиз проекта</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration}>
            <img src={illustration_step_5} alt="illustration_step_5" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.step__paragraph}>
              И, наконец, релиз. Мы разместим готовый продукт на ваших серверах или предоставим
              собственные. Но и теперь не&nbsp;обязательно прощаться: мы можем поддерживать
              работающий ресурс или продукт, созданный другой командой, при необходимости добавить
              функционал, встроить нужные сервисы и модули или развить проект с любой степени
              готовности. Просто свяжитесь с&nbsp;нами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
