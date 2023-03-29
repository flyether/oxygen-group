import ContactsForm from './ContactsForm';
import cn from 'classnames';

import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div id="anchor" className={styles.container}>
      <div>
        <ContactsForm />
      </div>
      <div className={styles.contacts__container}>
        <div className={styles.logo} />

        <div>
          <h2 className={styles.heading}>Контакты</h2>
        </div>
        <div className={styles.contacts}>
          <a href="mailto:info@oxy-group.ru" className={styles.contactsLine}>
            <div className={cn(styles.email_icon, styles.contacts__icon)} />
            <span> info@oxy-group.ru</span>
          </a>
          <a
            target="_blank"
            href="https://wa.me/message/M6NOB3HYSXNTE1"
            className={styles.contactsLine}
            rel="noreferrer"
          >
            <div className={cn(styles.whatsapp_icon, styles.contacts__icon)} />
            <span> +7 (901) 779-37-88</span>
          </a>
          <a
            target="_blank"
            href="https://vk.com/oxy_g"
            className={styles.contactsLine}
            rel="noreferrer"
          >
            <div className={cn(styles.vk_icon, styles.contacts__icon)} />
            <span>vk.com/oxy_g</span>
          </a>
          <a
            target="_blank"
            href="https://t.me/Oxy_group"
            rel="noreferrer"
            className={styles.contactsLine}
          >
            <div className={cn(styles.telegram_icon, styles.contacts__icon)} />
            <span>@Oxy_group</span>
          </a>
          <span>г. Москва</span>
        </div>
        <div className={styles.legal}>© Oxygen Group 2023. Все права защищены.</div>
      </div>
    </div>
  );
};

export default Contacts;
