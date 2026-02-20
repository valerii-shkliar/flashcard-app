import clsx from 'clsx';
import ProgressBar from '../../tools/ProgressBar/ProgressBar';
import style from './QuestionDesk.module.scss';
import { useState } from 'react';

function QuestionDesk({ card }) {
  const [isQuestionView, setIsQuestionView] = useState(true);
  const customQuestionDeskClass = clsx(
    style.questionDeskBtn,
    isQuestionView ? style.questionActive : style.answerActive,
  );

  function handleQuestionDeskClick() {
    setIsQuestionView(!isQuestionView);
  }

  return (
    <div className={style.questionDesk}>
      <button className={customQuestionDeskClass} onClick={handleQuestionDeskClick}>
        <p className={style.area}>{card?.area}</p>
        <div className={style.questionContainer}>
          {isQuestionView ? (
            <>
              <h1 className={style.question}>{card?.question}</h1>
              <p className={style.prompt}>Click to reveal answer</p>
            </>
          ) : (
            <>
              <p className={style.prompt}>Answer:</p>
              <h1 className={style.answer}>{card?.answer}</h1>
            </>
          )}
        </div>

        <ProgressBar progress={card?.progress} />
      </button>
    </div>
  );
}

export default QuestionDesk;
