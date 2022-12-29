import styles from './Header.module.css';
import Navigation from '../Navigation';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <Navigation />
      <div className={styles.contacts}>
        <a href="">
    +7 (901) 779-37-88
        </a>
        <button className={styles.button}>
          Заказать разработку
        </button>
      </div>
    </header>
  );
};

export default Header;
