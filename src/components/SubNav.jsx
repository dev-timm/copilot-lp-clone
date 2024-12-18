import { Link } from 'react-router-dom';

import styles from '../styles/SubNav.module.css';

const SubNav = () => {
  return (
    <div className={styles.subNavContainer}>
      <Link to="/" className={styles.mainLink}>
        Copilot
      </Link>
      <p>/</p>
      <Link to="/extensions" className={styles.subLink}>
        Extensions
      </Link>
      <Link to="/plans" className={styles.subLink}>
        Plans
      </Link>
    </div>
  );
};

export default SubNav;
