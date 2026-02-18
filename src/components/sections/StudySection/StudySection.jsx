import Button from '../../tools/Button/Button';
import Settings from '../../tools/Settings/Settings';
import QuestionDesk from './QuestionDesk';
import style from './StudySection.module.scss';
import DoneIcon from '../../../assets/icons/done-circle.svg?react';
import UndoIcon from '../../../assets/icons/undo.svg?react';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg?react';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg?react';
import StudyStatistics from './StudyStatistics';

function StudySection() {
  return (
    <section className={style.studySection}>
      <div className={style.questionContainer}>
        <Settings className={style.settings} />
        <QuestionDesk />
        <div className={style.manageBtnsContainer}>
          <Button kind="primary">
            <DoneIcon />I Know This
          </Button>
          <Button kind="secondary">
            <UndoIcon />
            Reset Progress
          </Button>
        </div>
        <div className={style.switchBtnsContainer}>
          <Button kind="thirdly" className={style.btn}>
            <ArrowLeftIcon />
            <span className={style.btnText}>Previous</span>
          </Button>
          <span className={style.counterCards}>Card 1 of 40</span>
          <Button kind="thirdly" className={style.btn}>
            <span className={style.btnText}>Next</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <StudyStatistics />
    </section>
  );
}

export default StudySection;
