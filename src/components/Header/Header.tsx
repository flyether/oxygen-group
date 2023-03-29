import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';

import Navigation from '../Navigation';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

import styles from './Header.module.css';
// import { ReactComponent as Logo } from '../../assets/svg/logo-1.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowVisible, setArrowVisible] = useState<boolean>(false);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.onscroll = function () {
      window.scrollY > 1024 ? setArrowVisible(true) : setArrowVisible(false);
    };
  }, []);

  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        <Link to="/" className={cn(styles.desktop, styles.tablet)}>
          <Logo className={styles.logo} />
        </Link>
        <Navigation />
        <div className={styles.contacts}>
          <a href="tel:+79017793788" className={cn(styles.tablet, styles.desktop)}>
            +7 (901) 779-37-88
          </a>
          <HashLink smooth to="#anchor" className={styles.button}>
            Заказать разработку
          </HashLink>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(styles.tablet, styles.mobile, styles.burger)}
        />
        {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}
      </div>
      {arrowVisible && <div onClick={handleScrollUp} className={styles.up} />}
    </header>
  );
}

export default Header;
