import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>
            Портфолио
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>
            Новости
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>
            Отзывы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
