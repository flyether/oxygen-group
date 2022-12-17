import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css'


const ParallaxPage = () => {
  const parallax = useRef<IParallax>(null!)
  return (
    <div className={styles.container}>
      <Parallax ref={parallax} pages={5}  >
        <ParallaxLayer
          offset={0}
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

                  За счет этого мы предусматриваем все проблемные моменты
                  и возможные изменения.

                  Агрегация требований
                  Прототипирование
                  Техническое задание</h4>

              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
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

                  Когда логика проработана, прорисовываем стили на нескольких экранах, чтобы согласовать общий вид будущего приложения.

                  Финализируем дизайн и после
                  отдаем в разработку.

                  Сбор референсов
                  Отбор креативных идей
                  Дизайн концепция</h4>

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
            <h2>Разработка</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>
                <h4>Начинаем с проработки внутренней логики - создаем майндмэп.
                  После переносим ее в черно-белый макет для согласования логики.

                  Когда логика проработана, прорисовываем стили на нескольких экранах, чтобы согласовать общий вид будущего приложения.

                  Финализируем дизайн и после
                  отдаем в разработку.

                  Сбор референсов
                  Отбор креативных идей
                  Дизайн концепция</h4>
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
            <h2>Тестирование</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>
                <h4>Чтобы мобильные приложения работали без сбоев, а баги фиксились во время. Мы тестируем все приложения в ручную.

                  Ручное тестирование
                  Автоматическое тестирование</h4>
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
            <h2>Интеграции и релиз проекта</h2>
            <div className={styles.block}>
              <div className={styles.il} >Иллюстрация</div>
              <div className={styles.textContainer}>
                <h4>Мы знаем все тонкости публикации
                  в AppStore и Google Play и всегда доводим релиз до конца.

                  После выхода в релиз поддерживаем и развиваем продукт: добавляем новые фичи и фиксим баги.

                  Интеграция готовых           модулей и сервисов</h4>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4} className={styles.cloud}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "45%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "30%", marginLeft: "25%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} className={styles.cloud}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "75%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} className={styles.cloud}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "30%", marginRight: "20%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8} className={styles.cloud}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "60%", marginLeft: "65%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} className={styles.cloud}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "30%", marginRight: "55%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} >
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
      </Parallax>
    </div>
  );
};

export default ParallaxPage;