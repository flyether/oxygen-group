import { Helmet } from 'react-helmet';

import GlobalRoute from './components/GlobalRoute';
import Header from './components/Header';

import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.app_container}>
      <Helmet>
        <title>Разработка сайта или мобильного приложения под ключ</title>
        <meta
          name="description"
          content="Мы — продуктовая команда. Создадим для вас сайт под ключ, разработаем мобильное приложение или веб-приложение. Разработка полного цикла. Красиво, удобно и функционально."
        />
      </Helmet>
      <Header />
      <GlobalRoute />
    </div>
  );
}

export default App;
