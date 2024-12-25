import styles from '../styles/Landing.module.css';

import PricingTable from '../components/PricingTable';

import githubIcon from '../assets/github-icon.svg';
import chevronRight from '../assets/chevron-right.svg';
import chevronRightLight from '../assets/chevron-right-light.svg';
import chevronRightBlue from '../assets/chevron-right-blue.svg';
import problemSolution from '../assets/problem-solution.svg';
import lightningCircle from '../assets/lightning-circle.svg';
import quoteIcon from '../assets/quote-icon.svg';
import authorLogo from '../assets/author-logo.svg';
import capsuleLogo from '../assets/capsule-logo.svg';
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

          <a href="/" className="primary-btn">
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
          <div className={styles.advantageContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <p>Enterprise-grade</p>
              </div>
              <h2>The competitive advantage developers ask for by name</h2>
            </div>
            <div className={styles.advantageContent}>
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
                      Duolingo empowers its engineers to be force multipliers
                      for expertise with GitHub Copilot and GitHub Codespaces.
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
        </div>
      </section>

      {/* STANDARDS SECTION */}
      <section className={styles.standards}>
        <div className="container">
          <div className={styles.standardsContainer}>
            <div className={styles.sectionHeader}>
              <img
                src={githubIcon}
                alt="github icon"
                className={styles.headerIcon}
              />
              <h2>The industry standard</h2>
            </div>
            <div className={styles.standardsContent}>
              <div className={styles.standardLargeBox}>
                <img src={quoteIcon} alt="quote icon" />
                <p className={styles.standardQuote}>
                  <span>
                    AI empowers developers with automation, intelligent
                    suggestions, and faster debugging.
                  </span>{' '}
                  It enhances productivity, improves code quality, and
                  accelerates development efficiency.
                </p>
                <div className={styles.quoteAuthor}>
                  <img src={authorLogo} alt="company logo" />
                  <div className={styles.authorDetails}>
                    <p>Henry Johnson</p>
                    <p>Engineering Manager for Infrastructure @ Lightbox</p>
                  </div>
                </div>
              </div>
              <div className={styles.standardData}>
                <div className={styles.standardDataBox}>
                  <h3>77,000+</h3>
                  <p>Businesses have adopted GitHub Copilot</p>
                </div>
                <div className={styles.standardDataBox}>
                  <h3>55%</h3>
                  <p>Businesses have adopted GitHub Copilot</p>
                  <p>Stack Overflow 2023 Survey</p>
                </div>
                <div className={styles.standardDataBox}>
                  <h3>3B+</h3>
                  <p>Accepted lines of code</p>
                </div>
              </div>
              <div className={styles.standardLargeBox}>
                <img src={capsuleLogo} alt="capsule company logo" />
                <p className={styles.capsule}>
                  GitHub: A Leader in the 2024 Gartner® Magic Quadrant™for AI
                  Code Assistants
                </p>
                <a href="/" className="blue-link">
                  Read customer story
                  <img src={chevronRightBlue} alt="chevron right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.pricingContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>
                <p>Pricing</p>
              </div>
              <h2>Take flight with GitHub Copilot</h2>
              <p className={styles.headerText}>
                Organizations and developers all over the world use GitHub
                Copilot to code faster, drive impact, and focus on doing what
                matters most: building great software.
              </p>
            </div>

            <div className={styles.pricingOptions}>
              <div className={styles.pricingOption}>
                <div className={styles.pricingHead}>
                  <h4>
                    Copilot <br /> Individual
                  </h4>
                  <p>
                    For individual developers, freelancers, students, and
                    educators that want to code faster and happier.
                  </p>
                </div>
                <div className={styles.pricingContent}>
                  <div className={styles.pricingInfo}>
                    <p className={styles.pricingAmount}>
                      <span>$</span> 10 <span>USD</span>
                    </p>
                    <p>per month / $100 USD per year</p>
                  </div>
                  <div className={styles.pricingAction}>
                    <a href="/" className="primary-btn">
                      Start a free trial
                      <img src={chevronRight} alt="chevron right" />
                    </a>
                    <p>
                      Free for verified students, teachers, and maintainers of
                      popular open source projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.pricingOption}>
                <div className={styles.pricingHead}>
                  <h4>
                    Copilot <br /> Business
                  </h4>
                  <p>
                    For organizations ready to improve engineering velocity,
                    code quality, and developer experience.
                  </p>
                </div>
                <div className={styles.pricingContent}>
                  <div className={styles.pricingInfo}>
                    <p className={styles.pricingAmount}>
                      <span>$</span> 19 <span>USD</span>
                    </p>
                    <p>per user / month</p>
                  </div>
                  <div className={styles.pricingAction}>
                    <a href="/" className="primary-btn">
                      Buy now
                      <img src={chevronRight} alt="chevron right" />
                    </a>
                    <a href="/" className="secondary-btn">
                      Contact sales
                      <img src={chevronRight} alt="chevron right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.pricingOption}>
                <div className={styles.pricingHead}>
                  <h4>
                    Copilot <br /> Enterprise
                  </h4>
                  <p>
                    For companies looking for the most customization based on
                    their organization’s knowledge and codebase.
                  </p>
                </div>
                <div className={styles.pricingContent}>
                  <div className={styles.pricingInfo}>
                    <p className={styles.pricingAmount}>
                      <span className={styles.topSpan}>$</span> 39{' '}
                      <span>USD</span>
                    </p>
                    <p>per user / month</p>
                  </div>
                  <div className={styles.pricingAction}>
                    <a href="/" className="primary-btn">
                      Buy now
                      <img src={chevronRight} alt="chevron right" />
                    </a>
                    <a href="/" className="secondary-btn">
                      Contact sales
                      <img src={chevronRight} alt="chevron right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PricingTable />
        </div>
      </section>
    </>
  );
};

export default Landing;
