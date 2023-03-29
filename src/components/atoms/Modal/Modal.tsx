import { FC } from 'react';
// import styles from './Contacts.module.css';
import styles from '../../Contacts/Contacts.module.css';

interface Props {
  message: string;
  close: () => void;
}

const Modal: FC<Props> = ({ message, close }) => {
  return (
    <div className={`${styles.form__container__zindex} ${styles.form__container} `} onClick={close}>
      <div className={styles.modal}>
        <div className={styles.green} />
        <p className={styles.text_modal}>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
