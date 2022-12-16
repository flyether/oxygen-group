import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css'
const WelcomePage = () => {
  return (
    <main className={styles.container}>
   <Header />
   <Link to="/parallax" className={styles.link}>
            Слайдер
          </Link>
    </main>
  );
};

export default WelcomePage;
