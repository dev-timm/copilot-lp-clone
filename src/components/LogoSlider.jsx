import styles from '../styles/LogoSlider.module.css';

import logo01 from '../assets/logo01.svg';
import logo02 from '../assets/logo02.svg';
import logo03 from '../assets/logo03.svg';
import logo04 from '../assets/logo04.svg';
import logo05 from '../assets/logo05.svg';
import logo06 from '../assets/logo06.svg';
import logo07 from '../assets/logo07.svg';
import logo08 from '../assets/logo08.svg';
import logo09 from '../assets/logo09.svg';
import logo10 from '../assets/logo10.svg';
import { useState } from 'react';

const logos = [
  {
    id: 1,
    company: logo01,
  },
  {
    id: 2,
    company: logo02,
  },
  {
    id: 3,
    company: logo03,
  },
  {
    id: 4,
    company: logo04,
  },
  {
    id: 5,
    company: logo05,
  },
  {
    id: 6,
    company: logo06,
  },
  {
    id: 7,
    company: logo07,
  },
  {
    id: 8,
    company: logo08,
  },
  {
    id: 9,
    company: logo09,
  },
  {
    id: 10,
    company: logo10,
  },
];

const LogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className={styles.sliderContainer}>
      <div className={`${styles.slider} ${isPaused ? styles.paused : ''}`}>
        {logos.concat(logos).map((logo) => {
          const { id, company } = logo;
          return (
            <img
              key={id}
              src={company}
              alt="logo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <div className={`${styles.fade} ${styles.fadeLeft}`}></div>
      <div className={`${styles.fade} ${styles.fadeRight}`}></div>
    </div>
  );
};

export default LogoSlider;
