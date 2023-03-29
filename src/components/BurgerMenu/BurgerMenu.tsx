import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './BurgerMenu.module.css';
import telegram from '../../assets/svg/telegram-white.svg';
import vk from '../../assets/svg/vk-white.svg';

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return <button onClick={onClick} className={styles.close_btn}></button>;
};

interface Props {
  setIsOpen: (value: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <div className={cn(styles.tablet, styles.mobile, styles.container)}>
      <CloseButton onClick={() => setIsOpen(false)} />
      <div className={styles.menu__content}>
        <ul className={styles.menu__navigation}>
          {/* <li className={styles.nav__item}>    <Link to="/portfolio" className={styles.li__panel} onClick={() => setIsOpen(false)}>
                  Портфолио
               </Link></li> */}
          {/* <li className={styles.nav__item}>    <Link to="/reviews" className={styles.li__panel} onClick={() => setIsOpen(false)}>
                  Отзывы
               </Link></li> */}
          <li className={cn(styles.nav__item, styles.nav__last)}>
            <Link to="/" className={styles.li__panel} onClick={() => setIsOpen(false)}>
              Главная
            </Link>
          </li>
          <li className={cn(styles.nav__item, styles.nav__last)}>
            <Link to="/about" className={styles.li__panel} onClick={() => setIsOpen(false)}>
              O нac
            </Link>
          </li>
        </ul>
        <ul className={styles.menu__socials}>
          <li>
            <a
              target="_blank"
              href="https://t.me/Oxy_group"
              rel="noreferrer"
              className={styles.li__panel}
              onClick={() => setIsOpen(false)}
            >
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://vk.com/oxy_g"
              rel="noreferrer"
              className={styles.li__panel}
              onClick={() => setIsOpen(false)}
            >
              <img src={vk} alt="vk" />
            </a>
          </li>
        </ul>
        <ul className={styles.menu__contacts}>
          <li>
            <a href="tel:+7 (901) 779-37-88" className={styles.li__panel}>
              +7 (901) 779-37-88
            </a>
          </li>
          <li>
            <a href="mailto:info@oxy-group.ru" className={styles.li__panel}>
              info@oxy-group.ru
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
