import collapse from '../assets/minus.svg';
import expand from '../assets/plus.svg';
import { useState } from 'react';

import styles from '../styles/SingleQuestion.module.css';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className={styles.question}>
      <header
        className={styles.questionHeader}
        onClick={() => setShowInfo(!showInfo)}
      >
        <p>{title}</p>
        <button>
          {showInfo ? (
            <img src={collapse} alt="collapse icon" />
          ) : (
            <img src={expand} alt="expand icon" />
          )}
        </button>
      </header>
      {showInfo && <p className={styles.questionInfo}>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
