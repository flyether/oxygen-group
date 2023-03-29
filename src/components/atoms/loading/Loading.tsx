import { FC } from 'react';

import styles from '../loading/loading.module.css';

const Loading: FC = () => {
  return <span className={styles.loader} />;
};

export default Loading;
