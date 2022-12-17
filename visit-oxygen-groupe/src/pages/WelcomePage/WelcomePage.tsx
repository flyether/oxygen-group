import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css'
import ParallaxPage from "../../components/Parallax/Parallax";
import Contacts from "../../components/Contacts";
const WelcomePage = () => {
  return (
    <main className={styles.container}>
   <Header />
   <div className={styles.divColum}>

    <div className={styles.red}></div>
   <ParallaxPage />
   
   <Contacts />
   </div>
   
    </main>
  );
};

export default WelcomePage;
