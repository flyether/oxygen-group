import React, { FC } from 'react';
import styles from '../loading/loading.module.css';

const Loading: FC = () => {
  return (
    <span className={styles.loader}></span>
  );
};

export default Loading;
