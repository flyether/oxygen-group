import React, { FC } from 'react';
import styles from './errorMod.module.scss';

interface IModalProps {
  children: React.ReactNode | JSX.Element;
  onClose: () => void;
}

const ErrorModal: FC<IModalProps> = ({ onClose, children }) => {


  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal}>
        <div className={styles.textDiv}>
          {children}
          <div className={styles.divButtons}>
            <button onClick={onClose} > закрыть </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
