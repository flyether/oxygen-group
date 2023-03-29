// import { Link } from 'react-router-dom';
import styles from './HeadingBlock.module.css';
import illustration_1 from '../../assets/img/illustration-1.png';

function HeadingBlock() {
  return (
    <div id="hash" className={styles.container}>
      <div className={styles.text}>
        <h1>РАЗРАБОТКА ЦИФРОВЫХ РЕШЕНИЙ</h1>
      </div>
      <div className={styles.illustration}>
        <img src={illustration_1} alt="" />
      </div>
      <div className={styles.chevron} />
      {/* <div className={styles.decoration}>
      </div> */}
    </div>
  );
}

export default HeadingBlock;
