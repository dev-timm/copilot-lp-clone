import { useState } from 'react';
import styles from '../styles/FrequentQuestions.module.css';
import Questions from './Questions';
import { generalQuestions, privacyQuestions, aiQuestions } from '../data';

const FrequentQuestions = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const [questions, setQuestions] = useState({
    generalQuestions,
    privacyQuestions,
    aiQuestions,
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.frequentQuestions}>
      <div className="container">
        <h3>
          Frequently asked <br /> questions
        </h3>
        <div className={styles.content}>
          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={
                activeTab === 'tab1'
                  ? `${styles.tab} ${styles.activeTab}`
                  : styles.tab
              }
              onClick={() => handleTabClick('tab1')}
            >
              General
            </button>
            <button
              className={
                activeTab === 'tab2'
                  ? `${styles.tab} ${styles.activeTab}`
                  : styles.tab
              }
              onClick={() => handleTabClick('tab2')}
            >
              Privacy
            </button>
            <button
              className={
                activeTab === 'tab3'
                  ? `${styles.tab} ${styles.activeTab}`
                  : styles.tab
              }
              onClick={() => handleTabClick('tab3')}
            >
              Responsible AI
            </button>
          </div>

          {/* Tab Content */}

          {activeTab === 'tab1' && (
            <Questions
              headline="General"
              questions={questions.generalQuestions}
            />
          )}

          {activeTab === 'tab2' && (
            <Questions
              headline="Privacy"
              questions={questions.privacyQuestions}
            />
          )}

          {activeTab === 'tab3' && (
            <Questions
              headline="Resposnsible AI"
              questions={questions.aiQuestions}
            />
          )}
        </div>
        <ol className={styles.sideInfo}>
          <li>
            <p>
              Data from June 2023. Additional research can be found{' '}
              <a className={styles.questionLink} href="#">
                here.
              </a>
            </p>
          </li>
          <li>
            <p>
              Feature in public beta for Copilot Individual and Business plans.
              Requires use of repositories, issues, discussions, Actions, and
              other features of GitHub.
            </p>
          </li>
          <li>
            <p>
              <a className={styles.questionLink} href="#">
                Authentication with SAML single sign-on (SSO)
              </a>{' '}
              available for organizations using GitHub Enterprise Cloud.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default FrequentQuestions;
