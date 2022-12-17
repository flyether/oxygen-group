import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css'
import Parallax from "../../components/Parallax";
import ParallaxPage from "../../components/Parallax/Parallax";
import Contacts from "../../components/Contacts";
const WelcomePage = () => {
  return (
    <main className="main">
   <Header />
   <ParallaxPage />
   <Contacts />
    </main>
  );
};

export default WelcomePage;
