import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'


const ParallaxPage = () => {
  const parallax = useRef<IParallax>(null!)
  return (
    <div>
      <Parallax ref={parallax} pages={5}  >
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ backgroundColor: "#e66465" }}
        >
          <Link to="/" >
            главная
          </Link>
          <h1>01 Персик</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ backgroundColor: "#232946" }}
        ><Link to="/" >
            главная
          </Link><h1>02 Синий</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{ backgroundColor: "#8bd3dd" }}
        > <Link to="/" >
            главная
          </Link><h1>03 Голубой</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{ backgroundColor: "#9198e5" }}
        > <Link to="/" >
            главная
          </Link> <h1>04 Фиолетовый</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ backgroundColor: "gold" }}
        >
          <Link to="/" >
            главная
          </Link>
          <h1>05 Желтый</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;