import styles from '../styles/Footer.module.css';

import logo from '../assets/github-logo-letters.svg';
import chevronRightLight from '../assets/chevron-right-light.svg';

import iconGithub from '../assets/icon-github.svg';
import iconInstagram from '../assets/icon-instagram.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';
import iconTiktok from '../assets/icon-tiktok.svg';
import iconTwitch from '../assets/icon-twitch.svg';
import iconX from '../assets/icon-x.svg';
import iconYoutube from '../assets/icon-youtube.svg';

import {
  footerProduct,
  footerPlatform,
  footerSupport,
  footerCompany,
} from '../data';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.subscriptionSection}>
            <img src={logo} alt="Github Logo" />
            <div className={styles.subscriptionText}>
              <p>Subscribe to our developer newsletter</p>
              <p>
                Get tips, technical guides, and best practices. Twice a month.
                Right in your inbox.
              </p>
            </div>
            <a href="/" className="secondary-btn">
              Contact sales
              <img src={chevronRightLight} alt="chevron right" />
            </a>
          </div>
          <div className={styles.linkSection}>
            <p>Product</p>
            <ul>
              {footerProduct.map((item) => {
                const { id, link, name } = item;
                return (
                  <li key={id}>
                    <a className={styles.footerLink} href={link}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.linkSection}>
            <p>Platform</p>
            <ul>
              {footerPlatform.map((item) => {
                const { id, link, name } = item;
                return (
                  <li key={id}>
                    <a className={styles.footerLink} href={link}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.linkSection}>
            <p>Support</p>
            <ul>
              {footerSupport.map((item) => {
                const { id, link, name } = item;
                return (
                  <li key={id}>
                    <a className={styles.footerLink} href={link}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.linkSection}>
            <p>Company</p>
            <ul>
              {footerCompany.map((item) => {
                const { id, link, name } = item;
                return (
                  <li key={id}>
                    <a className={styles.footerLink} href={link}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.subFooter}>
        <div className="container">
          <div className={styles.subFooterContent}>
            <ul className={styles.copyrightSection}>
              <li>
                <a className={styles.subLink} href="#">
                  ©2024 GitHub, Inc.
                </a>
              </li>
              <li>
                <a className={styles.subLink} href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className={styles.subLink} href="#">
                  Privacy (Updated 02/2024)
                </a>
              </li>
              <li>
                <a className={styles.subLink} href="#">
                  Sitemap
                </a>
              </li>
              <li>
                <a className={styles.subLink} href="#">
                  What is Git?
                </a>
              </li>
              <li>
                <a className={styles.subLink} href="#">
                  Manage cookies
                </a>
              </li>
              <li>
                <a className={styles.subLink} href="#">
                  Do not share my personal information
                </a>
              </li>
            </ul>
            <ul className={styles.socialSection}>
              <li>
                <a href="#">
                  <img src={iconLinkedin} alt="Linkedin logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconInstagram} alt="Instagram logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconYoutube} alt="Youtube logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconX} alt="X logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconTiktok} alt="Tiktok logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconTwitch} alt="Twitch logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconGithub} alt="GitHub logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
