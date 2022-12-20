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
        <div> тут контакты с иконками </div>
      </div>
    </div>
  );
};

export default Contacts;
