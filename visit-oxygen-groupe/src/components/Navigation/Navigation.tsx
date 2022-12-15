import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>
            контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
