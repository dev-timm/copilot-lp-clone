import styles from '../styles/Questions.module.css';

import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, headline }) => {
  return (
    <div className={styles.questions}>
      <h5>{headline}</h5>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </div>
  );
};
export default Questions;
