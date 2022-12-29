import React from 'react';
import styles from './steps.module.css'


const Step5: React.FC = () => {
  return (
    <div className={styles.block2}>
      <h2>Интеграции и релиз проекта</h2>
      <div className={styles.block}>
        <div className={styles.il} >Иллюстрация</div>
        <div className={styles.textContainer}>
          <h4>Мы знаем все тонкости публикации
            в AppStore и Google Play и всегда доводим релиз до конца.
            <br />
            После выхода в релиз поддерживаем и развиваем продукт: добавляем новые фичи и фиксим баги.
            <br />
            Интеграция готовых модулей и сервисов.</h4>
        </div>
      </div>
    </div>
  );
};

export default Step5;