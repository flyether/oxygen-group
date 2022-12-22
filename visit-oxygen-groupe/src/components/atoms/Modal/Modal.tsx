import React, { FC } from 'react';
import styles from './Modal.module.css';


  interface Props {
    message: string;
    close: () => void;
  }
  
  const Modal: FC<Props> = ({ message, close }) => {
    return (
      <div className={styles.errorModal} onClick={close}>
        <div className={styles.errorMessage}>
          <p>{message}</p>
        </div>
      </div>
    );
  };

export default Modal;
