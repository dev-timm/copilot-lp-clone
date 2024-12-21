import styles from '../styles/Landing.module.css';

import githubIcon from '../assets/github-icon.svg';
import chevronRight from '../assets/chevron-right.svg';
import chevronRightLight from '../assets/chevron-right-light.svg';
import chevronRightBlue from '../assets/chevron-right-blue.svg';
import problemSolution from '../assets/problem-solution.svg';
import lightningCircle from '../assets/lightning-circle.svg';
import githubCircle from '../assets/github-circle.svg';
import heroCode from '../assets/hero-code.png';
import { LogoSlider } from '../components';

import iconLogo1 from '../assets/icon-logo-1.svg';
import iconLogo2 from '../assets/icon-logo-2.svg';
import iconLogo3 from '../assets/icon-logo-3.svg';

const Landing = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.sectionHeader}>
          <div className={styles.heroLabel}>
            <img src={githubIcon} alt="github icon" />
            <p>GitHub Copilot</p>
          </div>
          <h1 className={styles.heroHeading}>
            The world’s most widely adopted AI developer tool
          </h1>

          <a href="/" className={styles.heroBtn}>
            Get started with GitHub Copilot
            <img src={chevronRight} alt="chevron right" />
          </a>
        </div>
        <img src={heroCode} className={styles.heroCode} alt="VS Code editor" />
        <LogoSlider />
      </section>

      {/* ADVANTAGE SECTION */}
      <section className={styles.advantage}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <p>Enterprise-grade</p>
            </div>
            <h2>The competitive advantage developers ask for by name</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.lightBox1}>
                <p className={styles.bigText}>
                  Proven to increase developer productivity and accelerate the
                  pace of software development.
                </p>
                <a href="/" className={styles.lightBoxLink}>
                  Get started with GitHub Copilot
                  <img src={chevronRightLight} alt="chevron right" />
                </a>
              </div>
              <div className={styles.darkBox1}>
                <img
                  src={lightningCircle}
                  className={styles.circleIconShadow}
                  alt="lightning icon"
                />
                <p className={styles.darkBox1Text}>
                  55% <br /> <span>Faster coding</span>
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.darkBox2}>
                <div className={styles.boxIcons}>
                  <img
                    src={githubCircle}
                    className={styles.circleIconShadow}
                    alt="github icon"
                  />
                  <div className={styles.iconLogos}>
                    <img src={iconLogo1} alt="company logo" />
                    <img src={iconLogo2} alt="company logo" />
                    <img src={iconLogo3} alt="company logo" />
                  </div>
                </div>
                <p className={styles.darkBox2Text}>
                  Designed by leaders in AI so you can build with confidence
                </p>
              </div>
              <div className={styles.lightBox2}>
                <p className={styles.bigText}>
                  Committed to your privacy, security, and trust.
                </p>
                <a href="/" className={styles.lightBoxLink}>
                  Visit the GitHub Copilot Trust Center
                  <img src={chevronRightLight} alt="chevron right" />
                </a>
              </div>
            </div>
            <div className={styles.customerStory}>
              <div className={styles.storyData}>
                <div className={styles.storyDescription}>
                  <p>
                    Duolingo empowers its engineers to be force multipliers for
                    expertise with GitHub Copilot and GitHub Codespaces.
                  </p>
                  <a href="/" className="blue-link">
                    Read customer story
                    <img src={chevronRightBlue} alt="chevron right" />
                  </a>
                </div>
                <div className={styles.storyNumbers}>
                  <div className={styles.storyNumber}>
                    <p className={styles.numberTitle}>25%</p>
                    <p className={styles.numberText}>
                      Increase in developer speed with GitHub Copilot
                    </p>
                  </div>
                  <div className={styles.storyNumber}>
                    <p className={styles.numberTitle}>1m</p>
                    <p className={styles.numberText}>
                      Set-up time for largest repo with Codespaces
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.sideInfo}>
                <img src={problemSolution} alt="" />
                <div className={styles.sideInfoContent}>
                  <div className={styles.sideContentText}>
                    <h5>Problem</h5>
                    <p className="greyText">
                      GitHub Copilot, GitHub Codespaces, and custom API
                      integrations enforce code consistency, accelerate
                      developer speed, and remove the barriers to using
                      engineering as a force multiplier for expertise.
                    </p>
                  </div>
                  <div className={styles.sideContentText}>
                    <h5>Solution</h5>
                    <p className="greyText">
                      GitHub Copilot, GitHub Codespaces, and custom API
                      integrations enforce code consistency, accelerate
                      developer speed, and remove the barriers to using
                      engineering as a force multiplier for expertise.
                    </p>
                  </div>
                  <div className={styles.sideContentText}>
                    <h5>Products</h5>
                    <a href="/" className="blue-link">
                      GitHub Enterprise
                      <img src={chevronRightBlue} alt="chevron right" />
                    </a>
                    <a href="/" className="blue-link">
                      GitHub Codespaces
                      <img src={chevronRightBlue} alt="chevron right" />
                    </a>
                    <a href="/" className="blue-link">
                      GitHub Copilot
                      <img src={chevronRightBlue} alt="chevron right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
