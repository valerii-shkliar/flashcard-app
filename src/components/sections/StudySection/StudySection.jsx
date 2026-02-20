import Button from '../../tools/Button/Button';
import Settings from '../../tools/Settings/Settings';
import QuestionDesk from './QuestionDesk';
import style from './StudySection.module.scss';
import DoneIcon from '../../../assets/icons/done-circle.svg?react';
import UndoIcon from '../../../assets/icons/undo.svg?react';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg?react';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg?react';
import StudyStatistics from './StudyStatistics';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleCards, isMasteredHide, updateCard } from '../../../store/flashCardsSlice';
import { useEffect, useState } from 'react';
import EmptyList from '../../tools/EmptyList/EmptyList';
import { setActiveMode } from '../../../store/appModeSlice';
import { MAX_PROGRESS_FOR_CARD, MODE } from '../../../constants/data';
const INITIAL_CARD_INDEX = 0;

function StudySection() {
  const dispatch = useDispatch();
  const visibleCards = useSelector(getVisibleCards);
  const isMastered = useSelector(isMasteredHide);
  const [activeCardIndex, setActiveCardIndex] = useState(INITIAL_CARD_INDEX);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveCardIndex(INITIAL_CARD_INDEX);
  }, [visibleCards.length]);

  function switchCardsMode() {
    dispatch(setActiveMode(MODE.CARDS));
  }

  function riseProgress() {
    const currentCard = {
      ...visibleCards[activeCardIndex],
      progress: visibleCards[activeCardIndex].progress + 1,
    };
    dispatch(updateCard(currentCard));

    if (activeCardIndex < visibleCards.length - 1) {
      goToNextCard();
    }
  }

  function resetProgress() {
    const currentCard = {
      ...visibleCards[activeCardIndex],
      progress: 0,
    };
    dispatch(updateCard(currentCard));
  }

  function goToNextCard() {
    setActiveCardIndex((prev) => prev + 1);
  }

  function goToPreviousCard() {
    setActiveCardIndex((prev) => prev - 1);
  }

  return (
    <section className={style.studySection}>
      <div className={style.questionContainer}>
        <Settings className={style.settings} />
        {visibleCards.length > 0 ? (
          <>
            <QuestionDesk
              card={visibleCards[activeCardIndex]}
              key={visibleCards[activeCardIndex]?.id}
            />
            <div className={style.manageBtnsContainer}>
              <Button
                kind="primary"
                onClick={riseProgress}
                isDisabled={visibleCards[activeCardIndex].progress === MAX_PROGRESS_FOR_CARD}
              >
                <DoneIcon />I Know This
              </Button>
              <Button
                kind="secondary"
                onClick={resetProgress}
                isDisabled={visibleCards[activeCardIndex].progress === 0}
              >
                <UndoIcon />
                Reset Progress
              </Button>
            </div>
            <div className={style.switchBtnsContainer}>
              <Button
                kind="thirdly"
                className={style.btn}
                isDisabled={activeCardIndex === 0}
                onClick={goToPreviousCard}
              >
                <ArrowLeftIcon />
                <span className={style.btnText}>Previous</span>
              </Button>
              <span className={style.counterCards}>
                Card {activeCardIndex + 1} of {visibleCards.length}
              </span>
              <Button
                kind="thirdly"
                className={style.btn}
                isDisabled={activeCardIndex === visibleCards.length - 1}
                onClick={goToNextCard}
              >
                <span className={style.btnText}>Next</span>
                <ArrowRightIcon />
              </Button>
            </div>
          </>
        ) : isMastered ? (
          <EmptyList
            title="You’re all caught up!"
            text="All your cards are mastered. Turn off “Hide mastered” to see them again."
            className={style.emptyList}
          />
        ) : (
          <EmptyList
            title="No cards to study"
            text="You don’t have any cards yet. Add your first card in the All Cards tab."
            button="Go to All Cards"
            btnClick={switchCardsMode}
            className={style.emptyList}
          />
        )}
      </div>
      <StudyStatistics />
    </section>
  );
}

export default StudySection;
