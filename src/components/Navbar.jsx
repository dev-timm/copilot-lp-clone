import styles from '../styles/Navbar.module.css';
import { Logo } from '../components';

import chevron from '../assets/chevron-down.svg';
import search from '../assets/search.svg';
import openSearch from '../assets/open-search.svg';
import mobileMenu from '../assets/mobile-menu.svg';

import { useRef, useState, useEffect } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const menuRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navMain}>
          <Logo />
          <button className={`${styles.navToggle}`} onClick={toggleLinks}>
            <img src={mobileMenu} alt="mobile menu icon" />
          </button>
          <ul
            ref={menuRef}
            className={
              showLinks
                ? `${styles.linksContainer} ${styles.showContainer}`
                : `${styles.linksContainer}`
            }
          >
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
          <div className={styles.searchContainer}>
            <input type="search" placeholder="Search or jump to..." />
            <img src={search} alt="search icon" className={styles.searchIcon} />
            <img
              src={openSearch}
              alt="open search icon"
              className={styles.openSearchIcon}
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
