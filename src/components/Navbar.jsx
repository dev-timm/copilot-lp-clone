import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { Logo } from '../components';

import chevron from '../assets/chevron-down.svg';
import search from '../assets/search.svg';
import openSearch from '../assets/open-search.svg';

const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.leftNav}>
          <Logo />
          <ul className={styles.navLinks}>
            <li>
              <a href="#" className={styles.navLink}>
                Product <img src={chevron} alt="chevron" />
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Solutions <img src={chevron} alt="chevron" />
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Resources <img src={chevron} alt="chevron" />
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Open Source <img src={chevron} alt="chevron" />
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Enterprise <img src={chevron} alt="chevron" />
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Pricing <img src={chevron} alt="chevron" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.rightNav}>
          <div class={styles.searchContainer}>
            <input type="search" placeholder="Search or jump to..." />
            <img src={search} alt="search icon" class={styles.searchIcon} />
            <img
              src={openSearch}
              alt="open search icon"
              class={styles.openSearchIcon}
            />
          </div>
          <a href="#">Sign in</a>
          <a href="#" className={styles.linkBtn}>
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
