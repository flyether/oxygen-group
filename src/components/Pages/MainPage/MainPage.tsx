import Contacts from '../../Contacts';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import HeadingBlock from '../../HeadingBlock';
// import Main from "../HeadingBlock";
import { useScrollTo } from '../../../store';

import styles from './MainPage.module.css';

function MainPage() {
  useScrollTo(0, 0);
  return (
    <div>
      <HeadingBlock />
      <div className={styles.slides}>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
      </div>
      <Contacts />
    </div>
  );
}

export default MainPage;
