import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={cn(styles.container, styles.desktop)}>
      <ul className={styles.list}>
        {/* <li className={`${styles.item}`}>
          <Link to="/portfolio" className={styles.link}>
            Портфолио
          </Link>
        </li> */}
        <li className={cn(styles.hidden, styles.item)}>
          <Link to="/news" className={styles.link}>
            Новости
          </Link>
        </li>
        {/* <li className={`${styles.item}`}>
          <Link to="/reviews" className={styles.link}>
            Отзывы
          </Link></li> */}
        <li className={styles.item}>
          <Link to="/about" className={styles.link}>
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
