import styles from '../styles/Landing.module.css';

import githubIcon from '../assets/github-icon.svg';
import chevronRight from '../assets/chevron-right.svg';
import heroCode from '../assets/hero-code.png';
import { LogoSlider } from '../components';

const Landing = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.topSection}>
          <div className={styles.heroHeader}>
            <div className={styles.heroLabel}>
              <img src={githubIcon} alt="github icon" />
              <p>GitHub Copilot</p>
            </div>
            <h1 className={styles.heroHeading}>
              The world’s most widely adopted AI developer tool
            </h1>
          </div>
          <a href="/" className={styles.heroBtn}>
            Get started with GitHub Copilot
            <img src={chevronRight} alt="chevron right" />
          </a>
        </div>
        <img src={heroCode} className={styles.heroCode} alt="VS Code editor" />
        <LogoSlider />
      </div>
    </>
  );
};

export default Landing;
