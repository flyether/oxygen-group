import React from 'react';
import styles from './steps.module.css'


const Step5: React.FC = () => {
  return (
    // <div className={styles.block2}>
    //   <h2>Интеграции и релиз проекта</h2>
    //   <div className={styles.block}>
    //     <div className={styles.il} >Иллюстрация</div>
    //     <div className={styles.textContainer}>
    //       <h4>Мы знаем все тонкости публикации
    //         в AppStore и Google Play и всегда доводим релиз до конца.
    //         <br />
    //         После выхода в релиз поддерживаем и развиваем продукт: добавляем новые фичи и фиксим баги.
    //         <br />
    //         Интеграция готовых модулей и сервисов.</h4>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.slideContainer}>
      <div className={styles.block}>
         <div className={styles.step__heading}>
          <div className={styles.step__number}>
          05
          </div>
          <h2>Интеграции и релиз проекта</h2>
        </div>
        <div className={styles.block__content}>
          <div className={styles.illustration} >Иллюстрация</div>
          <div className={styles.textContainer}>
            <p className={styles.step__paragraph}>Мы знаем все тонкости публикации в AppStore и Google Play и всегда доводим релиз до конца.
            </p>
            <p className={styles.step__paragraph}>
              После выхода в релиз поддерживаем и развиваем продукт: добавляем новые фичи и фиксим баги.
            </p>
            <ul className={styles.step__list}>
              <li>Интеграция готовых модулей и сервисов.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;