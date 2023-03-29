import { useState, useEffect } from 'react';

import Contacts from '../../Contacts';
import { ResponsiveIf } from './responsive';
import { useScrollTo } from '../../../store';
import { Breadcrumbs } from '../../../utils/Breadcrumbs/Breadcrumbs';
import { Helmet } from 'react-helmet';

import styles from './AboutUs.module.css';
import heroImg from '../../../assets/img/illustration-1.png';

function AboutUs() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useScrollTo(0, 0);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  return (
    <div className={styles.about}>
      <Helmet>
        <title>Разработка цифровых решений</title>
        <meta
          name="description"
          content="Разработка цифровых решений. Решаем сложные проблемы. Быстро, удобно. С договором. Все варианты оплаты. "
        />
        <meta
          name="keywords"
          content="разработка цифровых решений, заказать разработку интернет сайта, заказать разработка сайтов услуги, разработка полного цикла"
        />
      </Helmet>
      <div className={styles.slideContainer}>
        <div className={styles.block}>
          <Breadcrumbs />
          <div className={styles.about__heading}>
            <h1 className={styles.h2__about}> О нас</h1>
          </div>
          <div className={styles.block__content}>
            <img src={heroImg} className={styles.illustration} alt="странный чувак." />
            <div className={styles.textContainer}>
              <p className={styles.about__text__title}>
                Привет! <br />
                Мы — продуктовая команда <br /> Oxygen Group в Москве.
              </p>
              <p className={styles.about__paragraph}>
                Мы делаем лендинги, интернет-магазины и другие одностраничные и многостраничные
                сайты, а ещё — веб-приложения и нативные приложения для мобильных устройств. Создаём
                логотипы и иллюстрации для цифровых ресурсов и можем написать документацию для
                целого проекта или любой его части.
              </p>
              <p className={styles.about__paragraph}>
                В нашей команде — бизнес-аналитик, дизайнеры, UX-писатель и разработчики. Мы готовы
                взять ваш проект и выполнить его от начала и до конца. А если у вас уже есть
                наработки, мы можем включиться в любой момент и решить любую задачу по отдельности.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <div className={styles.team__heading}>
            <h2 className={styles.h2__team}> Наша команда</h2>
          </div>
          <ResponsiveIf screenWidth={screenWidth} />
        </div>
      </div>
      <Contacts />
    </div>
  );
}

export default AboutUs;
