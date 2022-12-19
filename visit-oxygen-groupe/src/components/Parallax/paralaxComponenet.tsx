import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Contacts from "../Contacts";
import Main from "../Main";
import styles from './styles.module.css'


const ParallaxPage = () => {
  const parallax = useRef<IParallax>(null!)
  return (
    <div className={styles.container}>
      <Parallax ref={parallax} pages={7}  >
        <ParallaxLayer offset={0} speed={0} >
          <Main />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          className={styles.slide}
        > <div className={styles.block2}>
            <h2>Аналитика и оценка проекта</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>

                <h4>Собираем аналитику и погружаемся
                  в контекст - исследуем рынок, анализируем конкурентов.
                  Создаем пользовательские сценарии
                  и оцениваем объем работы на основе пожеланий и требований клиента.
                  <br />
                  За счет этого мы предусматриваем все проблемные моменты
                  и возможные изменения.<br />
                  <ul>
                    <li> Агрегация требований</li>
                    <li>Прототипирование</li>
                    <li>Техническое задание</li>
                  </ul>


                </h4>

              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          className={styles.slide}
        >
          <div className={styles.block2}>
            <h2>UX/UI дизайн</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>

                <h4>Начинаем с проработки внутренней логики - создаем майндмэп.
                  После переносим ее в черно-белый макет для согласования логики.
                  <br />
                  Когда логика проработана, прорисовываем стили на нескольких экранах, чтобы согласовать общий вид будущего приложения.
                  <br />
                  Финализируем дизайн и после
                  отдаем в разработку.<br />
                  <ul>
                    <li>Сбор референсов</li>
                    <li>Отбор креативных идей</li>
                    <li>Дизайн концепция</li>
                  </ul>
                </h4>

              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          className={styles.slide}
        >
          <div className={styles.block2}>
            <h2>Разработка</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>
                <h4>Начинаем с проработки внутренней логики - создаем майндмэп.
                  После переносим ее в черно-белый макет для согласования логики.
                  <br />
                  Когда логика проработана, прорисовываем стили на нескольких экранах, чтобы согласовать общий вид будущего приложения.
                  <br />
                  Финализируем дизайн и после
                  отдаем в разработку.<br />
                  <ul>
                    <li> Сбор референсов</li>
                    <li>Отбор креативных идей</li>
                    <li>Дизайн концепция</li>
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          className={styles.slide}
        >
          <div className={styles.block2}>
            <h2>Тестирование</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>
                <h4>Чтобы мобильные приложения работали без сбоев, а баги фиксились во время. Мы тестируем все приложения в ручную.
                  <ul>
                    <li>Ручное тестирование</li>
                    <li>Автоматическое тестирование</li>
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0}
          className={styles.slide}
        >
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
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "50%", marginLeft: "45%" }}
          />
          <img
            alt="cloud"  
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "30%", marginLeft: "25%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG24 1.png`}
            style={{ display: "block", width: "50%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "40%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.7} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG24 1.png`}
            style={{ display: "block", width: "40%", marginLeft: "45%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "30%", marginRight: "20%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.6} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "60%", marginLeft: "35%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.7} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG24 1.png`}
            style={{ display: "block", width: "40%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "30%", marginRight: "55%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0} >
          <Contacts />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;