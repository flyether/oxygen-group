import React from 'react';
import styles from './Contacts.module.css'
interface Props {
  message: string;
  close: () => void;
}

const ErrorModal: React.FC<Props> = ({ message, close }) => {
  return (
    <div className={styles.errorModal} onClick={close}>
      <div className={styles.errorMessage}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;