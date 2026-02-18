import ProgressBar from '../../tools/ProgressBar/ProgressBar';
import style from './QuestionDesk.module.scss';

function QuestionDesk() {
  return (
    <div className={style.questionDesk}>
      <p className={style.area}>{'area'}</p>
      <h1 className={style.question}>{'question'}</h1>
      <p className={style.prompt}>Click to reveal answer</p>
      <ProgressBar progress={2} />
    </div>
  );
}

export default QuestionDesk;
