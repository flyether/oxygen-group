import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Contacts from "../Contacts";
import Step1 from '../Contacts/Steps.tsx/Step1';
import Step2 from '../Contacts/Steps.tsx/Step2';
import Step3 from '../Contacts/Steps.tsx/Step3';
import Step4 from '../Contacts/Steps.tsx/Step4';
import Step5 from '../Contacts/Steps.tsx/Step5';
import Main from "../Main";
import styles from './styles.module.css'


const ParallaxPage = () => {
  const parallax = useRef<IParallax>(null!)
  return (
    <div className={styles.container}>
      <Parallax ref={parallax} pages={7}  >
        <ParallaxLayer offset={0} speed={0} >
          <div className={styles.slideContainer}>
            <Main />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          className={styles.slide}
        >
          <Step1 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          className={styles.slide}
        >
          <Step2 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          className={styles.slide}
        >
          <Step3 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          className={styles.slide}
        >
          <Step4 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0}
          className={styles.slide}
        >
          <Step5 />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "50%", marginLeft: "45%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "30%", marginLeft: "25%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG24 1.png`}
            style={{ display: "block", width: "50%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "40%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.7} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG24 1.png`}
            style={{ display: "block", width: "40%", marginLeft: "45%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "30%", marginRight: "20%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.6} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "60%", marginLeft: "35%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.7} className={styles.cloud}>
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG6.png`}
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/cloud_PNG24 1.png`}
            style={{ display: "block", width: "40%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src={process.env.PUBLIC_URL + `/img/—Pngtree—realistic cloud element_8624528 1.png`}
            style={{ display: "block", width: "30%", marginRight: "55%" }}
          />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0} >
          <Link to="/" >
            <div className={styles.button}></div>
          </Link>
        </ParallaxLayer> */}
        <ParallaxLayer offset={6} speed={0} >
          <Contacts />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;