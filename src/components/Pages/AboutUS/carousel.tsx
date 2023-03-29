import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import { Member } from './member';
import { images, images1 } from './constantsMember';

import styles from './AboutUs.module.css';

export function Responsive() {
  return (
    <div className={styles.carousel__wrapper}>
      <Carousel
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button className={styles.carousel__next} onClick={clickHandler}>
              ❯
            </button>
          )
        }
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button className={styles.carousel__prev} onClick={clickHandler}>
              ❮
            </button>
          )
        }
        showThumbs={false}
        useKeyboardArrows
        showIndicators={false}
        showStatus={false}
      >
        {images.map((URL, index) => (
          <div className="slide" key={index + 300}>
            <div className={styles.divS}>
              <Member pic={URL.a} text={URL.c} title={URL.b} post={URL.g} />
              <Member pic={URL.d} text={URL.h} title={URL.f} post={URL.j} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export function Responsive1() {
  return (
    <div className={styles.carousel__wrapper}>
      <Carousel
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button className={styles.carousel__next} onClick={clickHandler}>
              ❯
            </button>
          )
        }
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button className={styles.carousel__prev} onClick={clickHandler}>
              ❮
            </button>
          )
        }
        showThumbs={false}
        useKeyboardArrows
        showIndicators={false}
        showStatus={false}
      >
        {images1.map((URL, index) => (
          <div className="slide" key={index + 300}>
            <div className={styles.divS}>
              <Member pic={URL.a} text={URL.c} title={URL.b} post={URL.g} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export function MemberWithoutSlider() {
  return (
    <div className={styles.team__members}>
      {images1.map((URL, index) => (
        <div key={index + 300}>
          <Member pic={URL.a} text={URL.c} title={URL.b} post={URL.g} />
        </div>
      ))}
    </div>
  );
}
