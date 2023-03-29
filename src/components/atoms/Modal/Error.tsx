import { FC } from 'react';
import cn from 'classnames';

import styles from '../../Contacts/Contacts.module.css';

interface Props {
  close: () => void;
}

const ErrorModal: FC<Props> = ({ close }) => {
  return (
    <div className={styles.form__container__zindex} onClick={close}>
      <div className={styles.modal}>
        <div className={styles.red} />
        <div className={styles.text_modal}>
          <p>Что-то пошло не так</p>
          <p>Напиши нам </p>
          <p>в социальные сети </p>
          <div className={styles.social}>
            <a
              target="_blank"
              href="https://wa.me/message/M6NOB3HYSXNTE1"
              className={styles.contactsLine}
              rel="noreferrer"
            >
              <div className={cn(styles.whatsapp_icon, styles.contacts__icon)} />
            </a>
            <a
              target="_blank"
              href="https://vk.com/oxy_g"
              className={styles.contactsLine}
              rel="noreferrer"
            >
              <div className={cn(styles.vk_icon, styles.contacts__icon)} />
            </a>
            <a
              target="_blank"
              href="https://t.me/Oxy_group"
              rel="noreferrer"
              className={styles.contactsLine}
            >
              <div className={cn(styles.telegram_icon, styles.contacts__icon)} />
            </a>
          </div>
        </div>

        <p className={cn(styles.text_modal, styles.text_repeat)} onClick={close}>
          Повторить
        </p>
      </div>
    </div>
  );
};

export default ErrorModal;
