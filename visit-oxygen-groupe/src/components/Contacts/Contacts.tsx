import styles from './Contacts.module.css'
import ContactsForm from './ContactsForm';

const Contacts = () => {

  return (
    <div className={styles.container}>
      <div className={styles.twoDiv}>
        <h1>Связаться с нами</h1>

        <ContactsForm />
      </div>
      <div className={styles.twoDiv}>
        <div className={styles.logo}></div>

        <div> <h2>Контакты</h2></div>
        <div className={styles.contacts}>
        <div className={styles.contactsLine}>
          <a href="mailto:info@oxy-group.ru">
            <div className={styles.emailSvg}></div>
          </a> 
           <span > info@oxy-group.ru</span>
          </div>
          <div className={styles.contactsLine}>
            <div className={styles.telSvg} ></div>
            <span > +7 (901) 779-37-88</span>
          </div>
          <div className={styles.contactsLine}>
            <div className={styles.telegramSvg } ></div>
            <span > @ewre</span>
          </div>
          <span >г. Москва</span>
        </div>
        <div  className={styles.Oxygen}>(C) Oxygen Grop 2022. Все права защищены.</div>
      </div>
    </div>
  );
};

export default Contacts;
